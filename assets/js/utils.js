let socket = null;

export const wsConnect = (url, callback) => {
  socket = new WebSocket(url)

  socket.onopen = () => {
    console.log('Conexão estabelecida com o servidor')
  }

  socket.onmessage = (event) => {
    console.log('Mensagem recebida do servidor:', event.data)
    callback()
  }

  socket.onclose = () => {
    console.log('Conexão fechada com o servidor. Tentando reconectar...')
    reconnect()
  }

  socket.onerror = (error) => {
    console.error('Erro na conexão WebSocket:', error)
  }

  socket.onping = () => {
    socket.pong()
    callback() 
  }
}

const reconnect = () => {
  setTimeout(() => {
    wsConnect()
  }, 5000)
}