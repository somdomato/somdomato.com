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
          <!-- <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <Player />
          </ul> -->

          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">

              <div class="wrapper">
                <!-- <div class="child2"> -->
                  <!-- <div class="flex"> -->
                    <div class="el">
                      long long long long long long long long long long long long long long long long long
                      long long long text
                    </div>
                    <!-- <div>a</div> -->
                  <!-- </div> -->
                <!-- </div> -->
              </div>

            </li>
          </ul>


          <form class="d-flex" role="search">
            <div class="input-group input-group-sm mb-3 mb-md-0">
              <input type="text" class="form-control bg-dark text-white" placeholder="Música ou Artista"
                aria-label="Música ou Artista" aria-describedby="button-addon" style="font-size: 16px;" />
              <button class="btn btn-danger" type="reset" id="button-addon">Limpar</button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>
<style>
.wrapper{
  display: grid;
  align-content: stretch;
  padding: 5px;
  min-width: 0;
  border: 1px solid
}

.wrapper .child2 {
  flex-grow: 1;
  overflow: hidden;
}

.flex {
  display: flex;
  min-width: 0;
}

.el {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>