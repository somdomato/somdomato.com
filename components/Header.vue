<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark my-0">
      <div class="container">
        <NuxtLink class="navbar-brand fs-4 d-flex align-items-center" to="/">
          <img src="/img/logotipo.svg" alt="Rádio Som do Mato" width="30" height="30" class="d-inline-block m-0 me-1" />
          Som do Mato
        </NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <Menu />
          <Player />
        </div>
      </div>
    </nav>
  </header>
</template>