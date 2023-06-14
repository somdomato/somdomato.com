<script setup>
defineProps({ songs: Object })
</script>
<template>
  <div class="col-12 col-md-2 order-2 order-md-1">
    <div class="bg-dark rounded-2 p-2">
      <h4>Últimas</h4>
      <div class="table-responsive">
        <table class="table table-dark table-sm">
          <tbody>
            <tr v-for="hist in songs">
              <!-- <th scope="row">{{ hist.song.id }}</th> -->
              <td class="text-truncate" style="max-width: 100%;">
                {{ hist.song.artist }} - {{ hist.song.title }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped>
.table-responsive table tbody tr th,
.table-responsive table tbody tr td {
  font-size: .8rem;
  padding: .2rem;
}
</style>