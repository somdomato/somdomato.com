export async function wsConnect(url, callback) {
  let ws = new WebSocket(url)

  ws.onmessage = function (event) {
    callback(event.data)
  }

  ws.onclose = function (event) {
    console.log('WS: Socket is closed. Reconnect will be attempted in 1 second.', event.reason)
    setTimeout(function () {
      wsConnect()
    }, 1000)
  }

  ws.onerror = function(event) {
    console.error('WS: Socket encountered error: ', event.message, 'Closing socket')
    ws.close()
  }
}