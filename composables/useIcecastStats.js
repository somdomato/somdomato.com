export const useIcecastStats = async (idx = 5, section = 'title') => {
  const { icestats: { source } } = await $fetch('https://radio.somdomato.com/json').catch((error) => console.log(error.data))
  if (typeof source === 'undefined') return 'Rádio Som do Mato'
  if (section === 'title') return source[idx].title  
  return source[idx]
}