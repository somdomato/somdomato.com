<script setup>
const topSongs = useState('topSongs')
</script>
<template>
  <h4>Mais Pedidas</h4>
  <div class="table-responsive">
    <table class="table table-dark table-sm">
      <tbody>
        <tr v-for="(top, index) in topSongs">
          <td>
            {{ (index + 1) }}
          </td>
          <td class="text-truncate" style="max-width: 100%;">
            {{ top.song.artist.name }} - {{ top.song.title }} ({{ top.requests }} pedidos)
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