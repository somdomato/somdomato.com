<script setup>
const lastSongs = useState('lastSongs')
const lastRequests = useState('lastRequests')
</script>
<template>
  <div class="row my-3" style="min-height: 500px;">
    <blocks-last :songs="lastSongs" />
    <Chat />
    <blocks-requests :songs="lastRequests" />
  </div>
  <div class="row">
    <Requests />
  </div>
</template>
