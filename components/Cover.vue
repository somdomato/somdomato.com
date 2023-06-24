<script setup>
const imageExists = ref(false)
const props = defineProps({ 
  image: { type: String, required: true },
  imageSize: { type: String, default: '38' } 
})

onMounted(() => {
  const img = new Image()
  img.src = props.image
  img.onload = () => {
    imageExists.value = true
  }
})
</script>
<template>
  <div class="cover me-2">
    <img :src="image" class="rounded-circle" style="height: auto;" :style="{ width: imageSize + 'px' }" alt="Rádio Som do Mato" v-if="imageExists" />
    <img src="/img/cover.svg" style="height: auto;" :style="{ width: imageSize + 'px' }" alt="Rádio Som do Mato" v-else />
  </div>
</template>
