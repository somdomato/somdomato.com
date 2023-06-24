export const useInfoStore = defineStore('InfoStore', () => {
  const artist    = ref('Rádio Som do Mato')
  const title     = ref('')
  const cover     = ref('/img/cover.svg')
  const station   = ref('geral')
  const listeners = ref(0)
  const peak      = ref(0)
  return { artist, title, cover, station, listeners, peak }
})