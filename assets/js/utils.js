// let socket = null;

export const wsConnect = (url, callback) => {
  const socket = new WebSocket(url)

  socket.onopen = () => {
    console.log('WS: Conexão estabelecida com o servidor')
  }

  socket.onerror = (error) => {
    console.error('WS: Erro na conexão WebSocket:', error)
    // socket.terminate()
  }

  socket.onmessage = (event) => {
    console.log('WS: Mensagem recebida do servidor:', event.data)
    callback()
  }

  socket.onclose = () => {
    console.log('WS: Conexão fechada com o servidor. Tentando reconectar...')
    reconnect()
  }

  socket.onping = () => {
    console.log('WS: Ping do servidor')
    socket.pong()
    callback()
  }
}

const reconnect = () => {
  setTimeout(() => {
    console.log('WS: Reconectando...')
    wsConnect()
  }, 5000)
}