<script setup>
const config = useRuntimeConfig()
const { $toast } = useNuxtApp()

const search = ref('')
const artistId = ref(null)
const currentSongsPage = ref(1)
const songsPageSize = ref(5)
const songsResult = ref([])
const totalSongs = ref(0)
const totalSongsPages = ref(0)
const artistsResult = ref([])
const totalArtists = ref(0)
const fakeDiv = ref(null)

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

async function clearSearchArtists() {
  artistsResult.value = []
  totalArtists.value = 0
  songsResult.value = []
  totalSongs.value = 0
  setTimeout(() => fakeDiv.value.scrollIntoView({ behavior: "smooth" }), 1000)
}

async function fetchArtists(l) {
  const { data: response } = await useFetch(`${config.public.apiBase}/artista/${l}?p=1&t=100`)
  const { artists, total } = toRaw(response.value)

  artistsResult.value = artists
  totalArtists.value = total

  setTimeout(() => fakeDiv.value.scrollIntoView({ behavior: "smooth" }), 1000)
}

async function fetchSongsByArtist(id, page = 1) {
  artistId.value = id
  currentSongsPage.value = page || 1

  if (artistId.value) {
    const { data: response } = await useFetch(`${config.public.apiBase}/artista/${artistId.value}`)
    const { songs, total } = toRaw(response.value)

    songsResult.value = songs
    totalSongs.value = total

    // console.log(songs)

    totalSongsPages.value = Math.ceil(totalSongs.value / songsPageSize.value)

    setTimeout(() => fakeDiv.value.scrollIntoView({ behavior: "smooth" }), 1000)
  }
}

async function fetchSongs(page) {
  currentSongsPage.value = page || 1

  if (search.value !== '' && search.value.length > 1) {
    const response = await useFetch(`${config.public.apiBase}/musica/?q=${search.value}&p=${currentSongsPage.value}&t=${songsPageSize.value}`)
    const { songs, total } = toRaw(response.data.value)

    songsResult.value = songs
    totalSongs.value = total

    console.log(total)

    totalSongsPages.value = Math.ceil(totalSongs.value / songsPageSize.value)

    setTimeout(() => fakeDiv.value.scrollIntoView({ behavior: "smooth" }), 1000)
  }
}

async function doRequest(id) {
  const { data } = await useFetch(`${config.public.apiBase}/pedido/${id}`)
  const { status, message } = toRaw(data.value)

  switch (status) {
    case 'success':
      $toast.success(message)
      break;
    case 'warning':
      $toast.warning(message)
      break;
    case 'info':
      $toast.info(message)
      break;
    case 'error':
      $toast.error(message)
      break;
    default:
      $toast.error(message)
      break;
  }
}

watchEffect(currentSongsPage, fetchSongs)
// watchEffect(currentArtistsPage, fetchArtists)
</script>
<template>
  <div class="col-12 order-4">
    <div class="bg-dark rounded-2 p-2">
      <h2>Pedidos</h2>
      <form class="d-flex" role="search" @submit.prevent="fetchSongs">
        <div class="input-group input-group mb-3">
          <input ref="inputsearch" v-model="search" type="text" class="form-control bg-transparent text-white" placeholder="Música ou Artista" aria-label="Música ou Artista" aria-describedby="button-addon" style="font-size: 16px;" />
          <button class="btn btn-danger" type="reset" id="button-addon" @click="songsResult = []"><Icon name="solar:trash-bin-minimalistic-2-linear" class="text-white" /></button>
          <button class="btn btn-primary" type="submit" id="button-addon"><Icon name="material-symbols:search-rounded" /></button>
        </div>
      </form>

      <div class="container text-center">
        <div class="row g-1">
          <div class="col-auto">Ou filtre por artista:</div>
          <div class="col-auto d-flex flex-nowrap">
            <button v-for="l in alphabet" :key="l" type="button" class="btn btn-primary btn-sm mx-1" @click="fetchArtists(l)">{{ l.toUpperCase() }}</button>
            <button type="button" class="btn btn-primary btn-sm mx-1" @click="clearSearchArtists"><Icon name="solar:trash-bin-minimalistic-2-linear" /></button>
            <button type="button" class="btn btn-primary btn-sm mx-1" @click="fetchArtists('*')">Todos</button>
          </div>
        </div>
      </div>

      <table class="table table-borderless table-dark">
        <tbody>
          <tr v-for="(item, index) in artistsResult">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>
              <button type="submit" class="btn btn-warning btn-sm" @click="fetchSongsByArtist(item.id)">Músicas</button>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="table table-borderless table-dark">
        <tbody>
          <tr v-for="(item, index) in songsResult">
            <th scope="row">{{ (currentSongsPage - 1) * songsPageSize + index + 1 }}</th>
            <td>{{ item.artist.name }}</td>
            <td>{{ item.title }}</td>
            <td>
              <button type="submit" class="btn btn-success btn-sm" @click="doRequest(item.id, $event)">Pedir</button>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination :total-items="totalSongs" :page-size="songsPageSize" @page-changed="fetchSongs" v-if="totalSongsPages > 1" />

      <div ref="fakeDiv"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
input,
input:focus {
  border: 2px solid rgba(255, 255, 255, 0.25);
  box-shadow: none;
}
</style>
