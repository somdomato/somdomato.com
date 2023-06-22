<script setup>
const lastSongs = useState('lastSongs')
const lastRequests = useState('lastRequests')
</script>
<template>
  <Row>
    <Carousel />
  </Row>
  <Row container-class="flex-grow-1 mb-3">
    <blocks-last :songs="lastSongs" />
    <Chat />
    <blocks-requests :songs="lastRequests" />
  </Row>
  <Row>
    <Requests />
  </Row>
</template>
