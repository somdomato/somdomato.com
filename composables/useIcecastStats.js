export const useIcecastStats = async (station = 5) => {
  let title = null, artist = null, listeners = null, topListeners = null, genre = null
  const { icestats: { source } } = await $fetch('https://radio.somdomato.com/json').catch((error) => console.error(error.data))
  if (typeof source === 'undefined') return 'Rádio Som do Mato'
  artist        = source[station].title.split('-')[0].trim()
  title         = source[station].title.split('-')[1].trim()
  listeners     = source[station].listeners
  topListeners  = source[station].listener_peak
  genre         = source[station].listenurl.split('/').pop()
  return { artist, title, listeners, top: topListeners, genre }
}