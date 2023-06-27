<script setup>
const config = useRuntimeConfig()
</script>
<template>
  <Header :bg-color="config.public.bgColor" />
  <main class="d-flex flex-column flex-grow-1">
    <slot />
  </main>
  <Footer :bg-color="config.public.bgColor" />
</template>