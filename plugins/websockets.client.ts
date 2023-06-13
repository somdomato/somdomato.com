export default defineNuxtPlugin(() => {
  const ws = new WebSocket('wss://ws.somdomato.com')
  
  return { 
    provide: { ws }
  }
})