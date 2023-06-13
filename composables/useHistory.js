export const useHistory = async _ => {
  const { songs } = await $fetch('http://localhost:4000/historico').catch((err) => console.log(err.data))
  return songs
}