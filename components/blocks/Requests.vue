<script setup>
defineProps({ songs: Object })
</script>
<template>
  <div class="col-12 col-md-2 order-3">
    <div class="bg-dark rounded-2 p-2">
      <h4>Próximas</h4>
      <div class="table-responsive">
        <table class="table table-dark table-sm">
          <tbody>
            <template v-if="songs">
              <tr v-for="req in songs">
                <!-- <th scope="row">{{ hist.song.id }}</th> -->
                <td>{{ req.song.artist }} - {{ req.song.title }}</td>
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
  </div>
</template>
<style scoped>
.table-responsive table tbody tr th,
.table-responsive table tbody tr td {
  font-size: .8rem;
  padding: .2rem;
}
</style>