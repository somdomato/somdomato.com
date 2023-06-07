<script setup>
const inputsearch = ref(null)
const search = ref('')
const placeholder = ref('Música ou Artista')
const open = ref(false)

defineProps({song: {type: String }})

const emit = defineEmits(['searchResults'])

async function doSearch() {
  if (search.value !== '' && search.value.length > 3) {
    const { data } = await useFetch(`http://localhost:4000/song/?q=${search.value}`)
    search.value = ''
    const { songs } = toRaw(data.value)
    emit('searchResults', songs)
  } else if (search.value === '' || search.value.length < 3) {
    let oldSearch = search.value
    search.value = ''
    placeholder.value = 'Pelo menos 3 caracteres!!'

    setTimeout(() => {
      placeholder.value = 'Música ou Artista'   
      search.value = oldSearch   
      inputsearch.value.focus()
    }, 3000);    
  }  
}
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark my-0">
      <div class="container">
        <NuxtLink class="navbar-brand fs-4 d-flex align-items-center" to="/">
          <img src="/img/logotipo.svg" alt="Rádio Som do Mato" width="30" height="30" class="d-inline-block m-0 me-1" />
          Som do Mato
        </NuxtLink>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" :class="{ show: open }" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <Player :title="song" @is-mobile="n => (open = n)" />
            <!-- <li class="nav-item"><a class="nav-link" href="#">Link</a></li> -->
          </ul>

          <form class="d-flex" role="search" @submit.prevent="doSearch">
            <!-- <input class="form-control me-2 bg-dark text-white" type="search" placeholder="Música ou Artista" aria-label="Música ou Artista" /> -->
            <!-- <button class="btn btn-outline-success" type="submit">Pesquisar</button> -->
            <div class="input-group input-group-sm mb-3">
              <input ref="inputsearch" v-model="search" type="text" class="form-control bg-dark text-white" :placeholder="placeholder" aria-label="Música ou Artista" aria-describedby="button-addon" style="font-size: 16px;" />
              <button class="btn btn-danger" type="submit" id="button-addon">Pesquisar</button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
input,
input:focus {
  border: 2px solid rgba(255, 255, 255, 0.25);
  box-shadow: none;
}
</style>
