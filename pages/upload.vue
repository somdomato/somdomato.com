<script setup>
const config = useRuntimeConfig()
const url = ref(null)
const genre = ref('geral')
const loading = ref(false)
const status = ref('')

const onSelectChange = (e) => {
  genre.value = e.target.value
}

async function handleSubmit() {
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
            <div class="col">
              <label for="url" class="form-label">Link do Youtube</label>
              <input v-model="url" type="url" class="form-control shadow-none border-0 bg-secondary" id="url"
                aria-describedby="urlHelp" data-bs-theme="dark">
              <div id="urlHelp" class="form-text text-secondary">
                Digite uma URL do Youtube, no formato: https://www.youtube.com/watch?v=DoBRdWugGoY<br />
              </div>
            </div>
            <div class="col-auto">
              <label for="estilo" class="form-label">Estilo</label>
              <select name="genre" @change="onSelectChange(e)" v-model="genre" id="estilo"
                class="form-select shadow-none border-0 bg-secondary" aria-label="Selecione o estilo musical"
                data-bs-theme="dark">
                <option value="geral" selected>Geral</option>
                <option value="uni">Universitário</option>
                <option value="modao">Modão</option>
              </select>
            </div>
          </div>
          <button class="btn btn-secondary" type="button" @click="handleSubmit" :disabled="loading">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loading"></span>
            <span class="loading" v-if="loading">
              Enviando
            </span>
            <span v-if="!loading">
              Enviar
            </span>
          </button>
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