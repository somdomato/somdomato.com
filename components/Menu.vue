<template>
  <ul class="navbar-nav me-auto mb-2 mb-md-0">
    <li class="nav-item">
      <NuxtLink class="nav-link active" to="/">Início</NuxtLink>
    </li>
    <li class="nav-item">
      <div class="d-flex">
        <a class="nav-link me-2" href="https://somdomato.com/facebook" target="_blank">
          <Icon name="devicon:facebook" font-size="22" />
        </a>
        <a class="nav-link me-2" href="https://somdomato.com/twitter" target="_blank">
          <Icon name="devicon:twitter" font-size="22" />
        </a>
        <a class="nav-link" href="https://somdomato.com/telegram" target="_blank">
          <Icon name="logos:telegram" font-size="22" />
        </a>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <Icon name="fxemoji:guitar" font-size="22" /> Estilo
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">
            <Icon name="fxemoji:guitar" font-size="16" /> Geral
          </a></li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="#">
            <Icon name="fxemoji:guitar" font-size="16" /> Universitário
          </a></li>
        <li><a class="dropdown-item" href="#">
            <Icon name="fxemoji:guitar" font-size="16" /> Romântico
          </a></li>
        <li><a class="dropdown-item" href="#">
            <Icon name="fxemoji:guitar" font-size="16" /> Modão
          </a></li>
        <li><a class="dropdown-item" href="#">
            <Icon name="fxemoji:guitar" font-size="16" /> Gaúcha
          </a></li>
      </ul>
    </li>
  </ul>
</template>