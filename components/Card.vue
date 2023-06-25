<script setup>
defineProps({
  id: Number,
  image: String,
  title: String,
  body: String
})
</script>
<template>
  <div class="card h-100" style="max-width: 28rem;">
    <img :src="image" class="card-img-top" :alt="title">
    <div class="card-body">
      <h5 class="card-title fs-5">{{ title }}</h5>
      <p class="card-text fs-6">{{ body }}</p>
      <!-- <a :href="link.url" class="btn btn-primary">{{ link.text }}</a> -->
      <NuxtLink :to="`/artista/${id}`" class="btn btn-primary stretched-link">Página do artista</NuxtLink>
    </div>
  </div>
</template>