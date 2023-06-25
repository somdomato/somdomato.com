<script setup>
const config = useRuntimeConfig()
const url = ref(null)
const genre = ref('Geral')
const loading = ref(false)
const status = ref('')

const genreOptions = computed(() => {
  return ['Geral', 'Universitário', 'Modão']
})

const onSelectChange = () => {
  if (genre.value === 'Outro') {
    console.log('Opção personalizada selecionada:', genre.value)
  } else {
    console.log('Opção selecionada:', genre.value);
  }
}

const handleSubmit = async () => {
  loading.value = true
  const payload = { url: url.value, genre: genre.value }

  const { data: response } = await useFetch(`${config.public.apiBase}/upload`, {
    method: 'post',
    body: { data: JSON.stringify(payload) }
  })

  if (response) {
    // const json = JSON.parse(response.value)
    console.info(response)

    loading.value = false
    status.value = response.value.message
  }
}

const handleSelectChange = () => {

}

// computed: {
//     options() {
//       // Opções do dropdown
//       return ['Opção 1', 'Opção 2'];
//     }
//   },
</script>
<template>
  <Row container-class="flex-grow-1 mb-3">
    <div class="col-12 col-md-8 order-first order-md-1 mb-md-0 d-flex flex-column flex-fill">
      <div class="bg-dark rounded-2 p-2 bg-warning d-flex flex-column flex-fill">
        <h4>Upload de Música</h4>
        <div class="alert alert-dark align-items-center" role="alert">
          <h5>Como funciona</h5>
          <p>Esse link será enviado ao servidor, lá o vídeo será baixado e convertido em um arquivo de música.<br />
            Posteriormente o arquivo será incluído na rotação automática e sistema de pedidos da rádio.</p>
        </div>
        <div class="mb-3">
          <div class="row">
            <div class="col-12 col-md-8">
              <label for="url" class="form-label">Link do Youtube</label>
              <input v-model="url" type="url" class="form-control shadow-none border-2 border-secondary" id="url"
                aria-describedby="urlHelp" data-bs-theme="dark">
              <div id="urlHelp" class="form-text text-secondary">
                Digite uma URL do Youtube, no formato: https://www.youtube.com/watch?v=DoBRdWugGoY<br />
              </div>
              <button class="btn btn-secondary" type="button" @click="handleSubmit" :disabled="loading">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
                <span class="loading" v-if="loading">Enviando</span>
                <span v-if="!loading">Enviar</span>
              </button>
            </div>
            <div class="col-12 col-md-4">
              <label for="estilo" class="form-label">Estilo</label>
              <select id="estilo" class="form-select shadow-none border-2 border-secondary" v-model="genre" @change="onSelectChange" data-bs-theme="dark">
                <option v-for="option in genreOptions" :key="option" :value="option.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')">{{ option }}</option>
                <option value="Outro">Outro</option>
              </select>
              <input v-if="genre === 'Outro'" v-model="customOption" type="text" class="form-control mt-2" placeholder="Digite o nome do diretório" data-bs-theme="dark">
            </div>
          </div>
        </div>
        <div class="alert alert-dark align-items-center" role="alert" v-if="status">
          <h5>Status</h5>
          <p>{{ status }}</p>
        </div>
      </div>
    </div>
  </Row>
</template>
<style scoped>
.loading:after {
  content: ' . ';
  animation: dots 1s steps(5, end) infinite;
}

@keyframes dots {

  0%,
  20% {
    color: rgba(0, 0, 0, 0);
    text-shadow:
      .25em 0 0 rgba(0, 0, 0, 0),
      .5em 0 0 rgba(0, 0, 0, 0);
  }

  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0, 0, 0, 0),
      .5em 0 0 rgba(0, 0, 0, 0);
  }

  60% {
    text-shadow: .25em 0 0 white, .5em 0 0 rgba(0, 0, 0, 0);
  }

  80%,
  100% {
    text-shadow: .25em 0 0 white, .5em 0 0 white;
  }
}</style>