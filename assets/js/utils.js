export const wsConnect = (url = 'wss://ws.somdomato.com', callback = null) => {
  const socket = new WebSocket(url)

  socket.onopen = () => {
    console.info('WS: Conexão estabelecida com o servidor')
  }

  socket.onerror = (error) => {
    console.error('WS: Erro na conexão WebSocket:', error)
    // socket.terminate()
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

// export const fetchCover = async (name) => {
//   const defaultCover = '/img/media/cover.svg'

//   try {
//     const image_url = '/img/covers/' + formatName(name) + '.png';
//     const response = await fetch(image_url)  
//     console.info(response)  
//     if (response.status === 200) return image_url
//     return defaultCover
//   } catch (error) {
//     return defaultCover
//   }
// }

export const fetchCover = async (name) => {
  const defaultCover = '/img/media/cover.svg'
  const image_url = '/img/covers/' + formatName(name) + '.png'

  try {
    const response = await fetch(image_url)
    if (response.ok && response.headers.get('content-type') === 'image/png') {
      return image_url
    } else {
      return defaultCover
    }
  } catch (error) {
    return defaultCover
  }
}

export const fetchCoverSync = (name) => {
  const defaultCover = '/img/media/cover.svg'
  const image_url = '/img/covers/' + formatName(name) + '.png'

  try {
    const response = fetch(image_url)
    if (response.ok && response.headers.get('content-type') === 'image/png') {
      return image_url
    } else {
      return defaultCover
    }
  } catch (error) {
    return defaultCover
  }
}