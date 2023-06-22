<script setup lang="ts">
defineProps<{
  containerClass?: string
  rowClass?: string
}>()
</script>
<template>
  <div class="container" :class="containerClass">
    <div class="row h-100 g-0 gy-3 gx-md-3" :class="rowClass">
      <slot />
    </div>
  </div>
</template>