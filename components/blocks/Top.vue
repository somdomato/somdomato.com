<script setup>
const topSongs = useState('topSongs')
</script>
<template>
  <h4>Top 10</h4>
  <div class="table-responsive">
    <table class="table table-dark table-sm">
      <tbody>
        <tr v-for="top in topSongs">
          <td class="text-truncate" style="max-width: 100%;">
            {{ top.song.artist.name }} - {{ top.song.title }}
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