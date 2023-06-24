export const wsConnect = (url = 'wss://ws.somdomato.com', callback = null) => {
  const socket = new WebSocket(url)

  socket.onopen = () => {
    console.info('WS: Conexão estabelecida com o servidor')
  }

  socket.onerror = (error) => {
    // console.warn('WS: Erro na conexão WebSocket, fechamento forçado:', error)
    socket.terminate()
  }

  socket.onmessage = (event) => {
    // console.info('WS: Mensagem recebida do servidor:', event.data)
    if (callback !== null) callback()
  }

  socket.onclose = () => {
    // console.warn('WS: Conexão fechada com o servidor. Tentando reconectar...')
    wsReconnect(url)
  }

  socket.onping = () => {
    console.info('WS: Ping do servidor')
    socket.pong()
    if (callback !== null) callback()
  }
}

const wsReconnect = (url = 'wss://ws.somdomato.com') => {
  setTimeout(() => {
    console.warn('WS: Reconectando...')
    wsConnect(url) // Substitua `urlWebSocket` pela sua URL WebSocket e `callback` pela sua função de retorno de chamada.
  }, 5000)
}

const formatName = (coverName) => {
  const normalized = coverName.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  const formatted = normalized.replace(/\s+/g, '_')
  const replacedAmpersand = formatted.replace(/&/g, 'e')
  const alphanumeric = replacedAmpersand.replace(/[^a-zA-Z0-9_]/g, '')
  const lowercase = alphanumeric.toLowerCase()
  return lowercase
}

export const fetchCover = async (name) => {
  try {
    const image_url = '/img/covers/' + formatName(name) + '.png';
    const response = await fetch(image_url);
    
    if (response.status === 200) {
      return image_url; // Retorna a URL da imagem se ela existir
    } 
    // else {
      // throw new Error('Image not found'); // Lança um erro se a imagem não existir
    // }
  } catch (error) {
    return '/img/cover.svg'; // Retorna a imagem padrão em caso de erro
  }
}

