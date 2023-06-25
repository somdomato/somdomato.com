<script setup>
const route = useRoute()
console.log(route.params.id)
</script>
<template>
  <Row>
    <div class="col-12">
      <img src="/img/logo.svg" class="img-fluid" alt="Rádio Som do Mato" />
    </div>
  </Row>

  <Row>
    <div class="col-12">
      <div class="bg-dark rounded-2 p-2 bg-warning d-flex flex-column flex-fill">
        <h4>Erro 404</h4>
        <p>Página não encontrada.</p>
        <p><NuxtLink to="/" class="btn btn-primary">Voltar</NuxtLink></p>
      </div>
    </div>
  </Row>
</template>