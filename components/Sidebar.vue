<script setup>
const config = useRuntimeConfig()
defineProps({ cssClasses: String })
</script>
<template>
  <div class="col-12 col-md-2 d-flex flex-column flex-fill" :class="cssClasses">
    <div class="rounded-2 p-2 d-flex flex-column flex-fill" :style="{ backgroundColor: config.public.bgColor }">
      <slot />
    </div>
  </div>
</template>