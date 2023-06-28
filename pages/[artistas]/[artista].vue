<script setup>
const config = useRuntimeConfig()
const route = useRoute()

const artista = ref('')
const artistSongs = ref([])
const totalSongs = ref(0)
const currentPage = ref(1)
const pageSize = ref(10)
const totalPages = ref(0)

async function fetchSongs(page = 1) {
  currentPage.value = page
  const { artist, songs, total } = await $fetch(`${config.public.apiBase}/artist/${route.params.artista}?p=${currentPage.value}&t=${pageSize.value}`).catch((error) => error.data)
  artista.value = artist
  artistSongs.value = songs
  totalSongs.value = total
  totalPages.value = Math.ceil(totalSongs.value / pageSize.value)
}

watch(currentPage, fetchSongs)

onMounted(() => {
  fetchSongs()
})
</script>
<template>
  <Row container-class="flex-grow-1 mb-3">
    <div class="col-12 col-md-8 order-first order-md-1 mb-md-0 d-flex flex-column flex-fill">
      <div class="rounded-2 p-2 d-flex flex-column flex-fill" :style="{ backgroundColor: config.public.bgColor }">
        <h4>{{ artista }}</h4>
        <table class="table table-dark table-sm">
          <tbody>
            <tr v-for="song in artistSongs">
              <td class="text-truncate" style="max-width: 100%;">
                {{ song.title }}
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination :page-size="pageSize" :total-items="totalSongs" @page-changed="fetchSongs" v-if="artistSongs.length > 1" />
      </div>
    </div>
  </Row>
</template>