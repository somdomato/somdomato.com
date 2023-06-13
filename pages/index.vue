<script setup>
const lastSongs = useState('lastSongs')
const lastRequests = useState('lastRequests')
</script>
<template>
  <!-- <div class="row h-100"> -->
  <div class="row h-75">
    <blocks-last :songs="lastSongs" />
    <Chat />
    <blocks-requests :songs="lastRequests" />
  </div>
  <div class="row h-auto">
    <Requests />
  </div>
</template>
