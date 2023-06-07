export default defineNuxtPlugin(() => {
  const ws = new WebSocket('ws://localhost:4000')
  return { provide: { ws } }
})