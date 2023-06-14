export const useGetQueue = async (url) => {
  const { songs } = await $fetch(url).catch((err) => console.log(err.data))
  return songs
}