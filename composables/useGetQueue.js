export const useGetQueue = async (url) => {
  const { songs } = await $fetch(url).catch((err) => console.error(err.data))
  return songs
}