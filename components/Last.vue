<script setup>
let { $ws } = useNuxtApp()
const { data } = await useFetch('http://localhost:4000/historico')
const songs = ref([])

onMounted(async _ => {
  $ws.onmessage = async event => {
    const songs = toRaw(data.value)
    // const msg = JSON.parse(event.data)
    console.log('New server message: ', JSON.parse(event.data))
  }
})
</script>
<template>
  <div class="col order-2 order-md-1">
    Últimas

    {{ songs }}
    <div class="table-responsive">
      <table class="table table-dark table-sm table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Música</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Musica</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>