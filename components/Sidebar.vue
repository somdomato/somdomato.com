<script setup>
defineProps({ cssClasses: String })
</script>
<template>
  <div class="col-12 col-md-2 d-flex flex-column flex-fill" :class="cssClasses">
    <div class="bg-dark rounded-2 p-2 d-flex flex-column flex-fill">
      <slot />
    </div>
  </div>
</template>