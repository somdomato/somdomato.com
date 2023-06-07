export const useIcecastStats = async (section) => {
  const { data } = await useFetch('/json', { baseURL: 'https://radio.somdomato.com' })
  if (section === 'title')
    return (toRaw(data.value)).icestats.source.title
  return (toRaw(data.value)).icestats.source
}