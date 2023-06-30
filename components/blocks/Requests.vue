<script setup>
const lastRequests = useState('lastRequests')
</script>
<template>
  <div v-if="lastRequests && lastRequests[0]">
    <h4>Próximas</h4>
    <div class="table-responsive">
      <table class="table table-dark table-sm">
        <tbody>
          <tr v-for="req in lastRequests">
            <td class="text-truncate" style="max-width: 100%;">
              {{ req.song.artist.name }} - {{ req.song.title }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>