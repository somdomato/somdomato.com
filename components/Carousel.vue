<template>
  <!-- <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="..." class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="..." class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="..." class="d-block w-100" alt="...">
      </div>
    </div>
  </div> -->

  <div id="carouselExampleSlidesOnly" class="carousel slide mb-3" data-bs-ride="carousel" data-bs-interval="10000">
    <div class="carousel-inner rounded">
      <div class="carousel-item active">
        <img src="/img/banner/felipe_e_rodrigo.jpg" class="d-block w-100" alt="Gusttavo Lima">
        <img src="/img/media/cover.png" class="carousel-logo" alt="Rádio Som do Mato">
      </div>
      <div class="carousel-item">
        <img src="/img/banner/gusttavo_lima.jpg" class="d-block w-100" alt="...">
        <img src="/img/media/cover.png" class="carousel-logo" alt="Rádio Som do Mato">
      </div>
      <div class="carousel-item">
        <img src="/img/banner/ze_neto_e_cristiano.jpg" class="d-block w-100" alt="Gusttavo Lima">
        <img src="/img/media/cover.png" class="carousel-logo" alt="Rádio Som do Mato">
      </div>
    </div>
  </div>
</template>
<style scoped>
.carousel > .carousel-inner {
  max-height: 500px;
}

.carousel-logo {
  position: absolute;
  top: 15px; /* Ajuste conforme necessário */
  left: 15px; /* Ajuste conforme necessário */
  width: 180px;
  max-width: 20%; /* Ajuste conforme necessário */
  z-index: 1; /* Certifique-se de definir um valor alto para que o logotipo fique acima da imagem do carrossel */
  animation: fadeOut 0.3s forwards; /* Adicionamos uma animação de fade out para ocultar o logotipo durante a transição */
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  99.99% {
    opacity: 0;
  }
  100% {
    pointer-events: none; /* Desativa os eventos de clique no logotipo durante a transição */
  }
}
</style>