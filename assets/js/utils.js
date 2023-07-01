let socket = null

export const wsConnect = (url = 'wss://ws.somdomato.com', callback = null) => {
  socket = new WebSocket(url)
  
  socket.onopen = console.info('WS: Conexão estabelecida com o servidor')
  socket.onerror = (error) => console.error('WS: Erro na conexão WebSocket:', error)

  socket.onmessage = (event) => { 
    if (callback !== null) {
      console.info('WS: Message', event)
      callback() 
    }
  }

  socket.onclose = () => wsReconnect(url)

  socket.onping = () => {
    socket.pong()
    if (callback !== null) callback()
  }
}

const wsReconnect = (url) => {
  setTimeout(() => {
    console.warn('WS: Reconectando...')
    wsConnect(url)
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