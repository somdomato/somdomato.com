<script setup>
defineProps({ songs: Object })
</script>
<template>
  <div class="col order-3">
    Próximas
    <div class="table-responsive">
      <table class="table table-dark table-sm table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Música</th>
          </tr>
        </thead>
        <tbody>

          <template v-if="songs">          
            <tr v-for="hist in songs">
              <th scope="row">{{ hist.song.id }}</th>
              <td>{{ hist.song.artist }} - {{ hist.song.title }}</td>
            </tr>
          </template>

          <template v-else>          
            <tr>
              <th scope="row"></th>
              <td>Sem pedidos, modo auto-dj</td>
            </tr>
          </template>

        </tbody>
      </table>
    </div>
  </div>
</template>