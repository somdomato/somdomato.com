<script setup>
const { $bootstrap } = useNuxtApp()
const tooltip = ref(null)

defineProps({
  content: { type: String, default: '' },
  place: { type: String, default: 'bottom' }
})

onMounted(() => {
  const tooltipInstance = new $bootstrap.Tooltip(tooltip.value)
})
</script>
<template>
  <a ref="tooltip" href="#" class="d-inline-block" data-bs-toggle="tooltip" :data-bs-placement="place" :data-bs-title="content">
    <slot />
  </a>
</template>