<script setup>
defineProps({
  bgColor: String
})
</script>
<template>
  <footer class="footer mt-auto py-3 text-white fixed-bottom mt-5" :style="{backgroundColor: bgColor}">
    <div class="container container-wide">
      <span>&copy; 2012-2023 Rádio Som do Mato</span>
    </div>
  </footer>
</template>
