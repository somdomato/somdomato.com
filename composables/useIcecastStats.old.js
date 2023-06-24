export const useIcecastStatsOld = async (idx = 5, section = 'title') => {
  const { icestats: { source } } = await $fetch('https://radio.somdomato.com/json').catch((error) => console.error(error.data))
  if (typeof source === 'undefined') return 'Rádio Som do Mato'
  if (section === 'title') return source[idx].title  
  return source[idx]
}