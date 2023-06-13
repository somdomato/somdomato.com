<script setup>
const song = ref('Rádio Som do Mato')
const searchResults = ref([])

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


</script>
<template>
  <Header :song="song" @search-results="showSearchResults" />
  <main class="h-100">
    <div class="container h-100">
      <slot />
    </div>
  </main>
  <Footer />
</template>
