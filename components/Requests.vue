<script setup>
const config = useRuntimeConfig()
const { $toast } = useNuxtApp()

const search = ref('')
const currentPage = ref(1)
const pageSize = ref(10)
const totalSongs = ref(0)
const totalPages = ref(0)
const songsResult = ref([])

async function doRequest(id, evt) {
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

async function fetchSongs(pageNumber) {
  currentPage.value = pageNumber || 1;

  if (search.value !== '' && search.value.length > 1) {
    const response = await useFetch(`${config.public.apiBase}/musica/?q=${search.value}&p=${currentPage.value}&t=${pageSize.value}`)
    const { songs, total } = toRaw(response.data.value)
    
    songsResult.value = songs
    totalSongs.value = total

    totalPages.value = Math.ceil(totalSongs.value / pageSize.value)
  }
}

watch(currentPage, fetchSongs)
</script>
<template>
  <div class="col-12 order-4">
    <div class="bg-dark rounded-2 p-2">
      <h2>Pedidos</h2>
      <form class="d-flex" role="search" @submit.prevent="fetchSongs()">
        <div class="input-group input-group mb-3">
          <input ref="inputsearch" v-model="search" type="text" class="form-control bg-dark text-white"
            placeholder="Música ou Artista" aria-label="Música ou Artista" aria-describedby="button-addon"
            style="font-size: 16px;" />
          <button class="btn btn-danger" type="reset" id="button-addon" @click="songsResult = []">Limpar</button>
          <button class="btn btn-primary" type="submit" id="button-addon">Pesquisar</button>
        </div>
      </form>
      <table class="table table-borderless table-dark">
        <tbody>
          <tr v-for="(item, index) in songsResult">
            <!-- <th scope="row">{{ index + 1 }}</th> -->
            <th scope="row">{{ (currentPage - 1) * pageSize + index + 1 }}</th>
            <td>{{ item.artist.name }}</td>
            <td>{{ item.title }}</td>
            <td>
              <button type="submit" class="btn btn-success btn-sm" @click="doRequest(item.id, $event)">Pedir</button>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination :totalItems="totalSongs" @page-changed="fetchSongs" v-if="songsResult.length > 1" />
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
