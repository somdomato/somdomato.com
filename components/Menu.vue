<template>
  <ul class="navbar-nav me-auto mb-2 mb-md-0">
    <li class="nav-item">
      <NuxtLink class="nav-link" to="/">Início</NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink class="nav-link" to="/artistas">Artistas</NuxtLink>
    </li>
    <li class="nav-item dropdown" data-bs-theme="dark">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Redes
      </a>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="https://somdomato.com/facebook" target="_blank">
            <Icon name="logos:facebook" font-size="16" /> Facebook
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="https://somdomato.com/instagram" target="_blank">
            <Icon name="skill-icons:instagram" font-size="16" /> Instagram
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="https://somdomato.com/twitter" target="_blank">
            <Icon name="logos:twitter" font-size="16" /> Twitter
          </a>
        </li>
      </ul>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Estilo
      </a>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#">
            <Icon name="fxemoji:guitar" font-size="16" /> Geral
          </a>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li>
          <a class="dropdown-item" href="#">
            <Icon name="fxemoji:guitar" font-size="16" /> Universitário
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            <Icon name="fxemoji:guitar" font-size="16" /> Romântico
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            <Icon name="fxemoji:guitar" font-size="16" /> Modão
          </a>
        </li>
        <li><a class="dropdown-item" href="#">
            <Icon name="fxemoji:guitar" font-size="16" /> Gaúcha
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>