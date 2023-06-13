<script setup>
const lastSongs = useState('lastSongs')
const lastRequests = useState('lastRequests')
</script>
<template>
  <div class="row h-100">
    <blocks-last :songs="lastSongs" />
    <Chat />
    <blocks-requests :songs="lastRequests" />
    <Requests />
  </div>
</template>
