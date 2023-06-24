<script setup>
const lastSongs = useState('lastSongs')
</script>
<template>
  <h4>Últimas</h4>
  <div class="table-responsive">
    <table class="table table-dark table-sm">
      <tbody>
        <tr v-for="hist in lastSongs">
          <td class="text-truncate" style="max-width: 100%;">
            {{ hist.song.artist.name }} - {{ hist.song.title }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.table-responsive table tbody tr th,
.table-responsive table tbody tr td {
  font-size: .8rem;
  padding: .2rem;
}
</style>