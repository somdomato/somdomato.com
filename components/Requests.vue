<script setup>
const { $toast } = useNuxtApp()
const searchResults = ref([])
const searchTotal = ref(0)
const search = useState('search')



async function doRequest(id) {
  const { data } = await useFetch(`http://localhost:4000/req/${id}`)
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

  searchResults.value = []
}

async function doSearch() {
  if (search.value !== '' && search.value.length > 3) {
    const { data } = await useFetch(`http://localhost:4000/song/?q=${search.value}`)
    const { songs } = toRaw(data.value)
    searchResults.value = songs.data
    searchTotal.value = songs.total
  }
}
</script>
<template>
  <div class="col-12 order-4 mb-3">
    <div class="bg-dark rounded-2 p-2 h-100">
      <h2>Pedidos</h2>
      <form class="d-flex" role="search" @submit.prevent="doSearch">
        <div class="input-group input-group mb-3">
          <input ref="inputsearch" v-model="search" type="text" class="form-control bg-dark text-white"
            placeholder="Música ou Artista" aria-label="Música ou Artista" aria-describedby="button-addon"
            style="font-size: 16px;" />
          <button class="btn btn-danger" type="reset" id="button-addon">Limpar</button>
          <button class="btn btn-primary" type="submit" id="button-addon">Pesquisar</button>
        </div>
      </form>
      <table class="table table-borderless table-dark">
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
      <p v-if="searchResults.length > 1">Total: {{ searchTotal }}</p>
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
