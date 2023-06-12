<script setup>
let { $ws } = useNuxtApp()
const song = ref('Rádio Som do Mato')
const searchResults = ref([])
// const { title } = await useIcecastStats()
// const swal = inject('$swal')

function showSearchResults(results) {
  searchResults.value = results
}

async function doRequest(id) {
  const { data } = await useFetch(`http://localhost:4000/req/${id}`)
  const { message } = toRaw(data.value)

  // swal.fire({
  //   title: 'Sucesso!',
  //   text: message,
  //   icon: 'success',
  //   confirmButtonText: 'Fechar'
  // })
  searchResults.value = []
}

// onMounted(async _ => {
//   // song.value = await useIcecastStats()

//   // $ws.onmessage = async event => {
//   //   const msg = JSON.parse(event.data)
//   //   switch (msg.action) {
//   //     case 'songchanged':
//   //       song.value = await useIcecastStats('title')
//   //       console.log('Song Changed: ', song.value)
//   //       break
//   //     case 'requestadded':
//   //       console.log('New request', event.data)
//   //       break
//   //     default:
//   //       console.log('New server message: ', event.data)
//   //   }
//   // }
// })
</script>
<template>
  <Header :song="song" @search-results="showSearchResults" />
  <main class="h-100">
    <div class="container h-100">
      <slot />
      
      <div class="row" v-if="searchResults.length > 0">
        <div class="col-12">
          <table class="table table-borderless table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Artista</th>
                <th scope="col">Música</th>
                <th scope="col">Pedir</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in searchResults">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ item.artist }}</td>
                <td>{{ item.title }}</td>
                <td>
                  <button type="button" class="btn btn-success btn-sm" @click="doRequest(item.id)">Pedir</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
<style lang="scss">
// @import url('@sweetalert2/themes/dark/dark.scss');
</style>
