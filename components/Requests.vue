<script setup>
const searchResults = ref([])
const searchTotal = ref(0)
// const swal = inject('$swal')
const search = useState('search')

async function doRequest(id) {
  const { data } = await useFetch(`http://localhost:4000/req/${id}`)
  const { status, message } = toRaw(data.value)

  swal.fire({
    title: status == 'success' ? 'Sucesso!' : 'Erro!',
    text: message,
    icon: status,
    confirmButtonText: 'Fechar'
  })

  searchResults.value = []
}

async function doSearch() {
  if (search.value !== '' && search.value.length > 3) {
    const { data } = await useFetch(`http://localhost:4000/song/?q=${search.value}`)
    const { songs } = toRaw(data.value)

    console.log(songs.data)

    searchResults.value = songs.data
    searchTotal.value = songs.total
  } 
}
</script>
<template>
  <div class="col-12 order-4" v-if="search">
    <h2>Pedidos</h2>

    <form class="d-flex" role="search" @submit.prevent="doSearch">
      <div class="input-group input-group mb-3">
        <input 
          ref="inputsearch" 
          v-model="search" 
          type="text" 
          class="form-control bg-dark text-white"
          placeholder="Música ou Artista" 
          aria-label="Música ou Artista" 
          aria-describedby="button-addon"
          style="font-size: 16px;" 
        />
        <button class="btn btn-danger" type="reset" id="button-addon">Limpar</button>
        <button class="btn btn-info" type="submit" id="button-addon">Pesquisar</button>
      </div>
    </form>

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

    Total: {{ searchTotal }}
  </div>
</template>
<style lang="scss">
// @import url('@sweetalert2/themes/dark/dark.scss');
</style>
