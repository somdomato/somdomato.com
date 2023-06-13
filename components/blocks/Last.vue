<script setup>
defineProps({ songs: Object })
</script>
<template>
  <div class="col-12 col-md-2 order-2 order-md-1">
    Últimas
    <div class="table-responsive">
      <table class="table table-dark table-sm table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Música</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="hist in songs">
            <th scope="row">{{ hist.song.id }}</th>
            <td>{{ hist.song.artist }} - {{ hist.song.title }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>