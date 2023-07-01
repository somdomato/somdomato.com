<template>
  <div id="carouselExampleSlidesOnly" class="carousel slide mb-3" data-bs-ride="carousel" data-bs-interval="5000">
    <div class="carousel-inner rounded">
      <div class="carousel-item active right-align">
        <img src="/img/banner/jorge_e_mateus.webp" class="d-block" alt="Jorge & Mateus">
      </div>
      <div class="carousel-item">
        <img src="/img/banner/lauana_prado.webp" class="d-block" alt="Lauana Prado">
      </div>
      <div class="carousel-item">
        <img src="/img/banner/lais_yasmin.webp" class="d-block" alt="Lais Yasmin">
      </div>
      <div class="carousel-item">
        <img src="/img/banner/yasmin_santos.webp" class="d-block" alt="Yasmin Santos">
      </div>
    </div>
    <img src="/img/media/cover.png" class="carousel-logo" alt="Rádio Som do Mato">
  </div>
</template>
<style scoped>
.carousel>.carousel-inner {
  max-height: 500px;
}

.carousel-item img {
  height: 500px;
  width: 100%;
  object-fit: cover;
  object-position: 50% 30%;
}

.carousel-logo {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 180px;
  max-width: 20%;
  z-index: 1;
}

@media (max-width: 375px) {
  .carousel>.carousel-inner {
    max-height: 300px;
  }
  .carousel-item img {
    height: 300px;
    object-position: -80px 50%;
  }
}
</style>