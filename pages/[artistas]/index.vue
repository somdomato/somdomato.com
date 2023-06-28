<script setup>
import { fetchCoverSync } from '~/assets/js/utils'
const config = useRuntimeConfig()
// const route = useRoute()
// console.log(route.params.id)
const artistas = ref([])
const totalArtists = ref(0)
const currentPage = ref(1)
const pageSize = ref(50)
const totalPages = ref(0)

const cover = async name => fetchCoverSync(name)

async function fetchArtists(pageNumber = 1) {
  currentPage.value = pageNumber
  const { artists, total } = await $fetch(`${config.public.apiBase}/artistas/?p=${currentPage.value}&t=${pageSize.value}`).catch((error) => error.data)
  artistas.value = artists
  totalArtists.value = total
  totalPages.value = Math.ceil(totalArtists.value / pageSize.value)
}

watch(currentPage, fetchArtists)

onMounted(() => {
  fetchArtists()
})
</script>
<template>
  <Row container-class="flex-grow-1 mb-3">
    <div class="col-12 col-md-8 order-first order-md-1 mb-md-0 d-flex flex-column flex-fill">
      <div class="rounded-2 p-2 d-flex flex-column flex-fill" :style="{ backgroundColor: config.public.bgColor }">
        <h4>Artistas</h4>
        <div class="row row-cols-1 row-cols-md-5 g-4 mb-2">
          <template v-for="(item, index) in artistas">
            <div class="col">
              <Card :id="item.id" :body="item.name" :image="item['songs'][0]['cover']" />
            </div>
          </template>
        </div>
        <Pagination :page-size="pageSize" :total-items="totalArtists" @page-changed="fetchArtists" v-if="artistas.length > 1" />
      </div>
    </div>
  </Row>
</template>