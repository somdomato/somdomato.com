<script setup>
const info = useInfoStore()
</script>
<template>
  <div>
    <h4>Artista</h4>
    <div class="card bg-dark">
      <img :src="info.cover" class="card-img-top" :alt="info.artist">
      <div class="card-body">
        <h5 class="card-title fs-5">{{ info.artist }}</h5>
        <p class="card-text fs-6">{{ info.title }}</p>
        <p class="card-text fs-7">Compartilhe</p>
        <a href="#" class="btn btn-primary">WhatsApp</a>
      </div>
    </div>
  </div>
</template>