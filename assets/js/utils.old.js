// import WebSocket from 'ws'

export function connect(url, callback) {
  const ws = new WebSocket(url)

  ws.onopen = function () {
    console.log("WebSockets OPEN")
    // ws.send(JSON.stringify({
    //     //.... some message the I must send when I connect ....
    // }))
  }

  ws.onmessage = function (e) {
    console.log('Message:', e.data)
  }

  ws.onclose = function (e) {
    console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason)
    setTimeout(function () {
      connect()
    }, 1000)
  }

  ws.onerror = function (err) {
    console.error('Socket encountered error: ', err.message, 'Closing socket')
    ws.close()
  }
}
//   connect();