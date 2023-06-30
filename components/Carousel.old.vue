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
      <div class="carousel-item active right-align">
        <img src="/img/banner/felipe_e_rodrigo.jpg" class="d-block w-100" alt="Gusttavo Lima">
      </div>
      <div class="carousel-item">
        <img src="/img/banner/gusttavo_lima.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/img/banner/ze_neto_e_cristiano.jpg" class="d-block w-100" alt="Gusttavo Lima">
      </div>
    </div>
    <img src="/img/media/cover.png" class="carousel-logo" alt="Rádio Som do Mato">
  </div>
</template>
<style scoped>
.carousel-inner.justify-content-end {
  justify-content: flex-end;
}

.carousel>.carousel-inner {
  max-height: 500px;
}

.carousel-item img {
  object-fit: contain;
  height: auto;
  max-height: 500px;
  width: 100%;
}

.carousel-logo {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 180px;
  max-width: 20%;
  z-index: 1;
}

.carousel-inner {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.carousel-item.right-align {
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .carousel-inner {
    flex-wrap: wrap;
  }

  .carousel-item {
    width: 100%;
  }

  .carousel-item.right-align {
    justify-content: flex-start;
  }
}
</style>