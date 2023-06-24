<template>
  <div class="col-12 col-md-8 order-first order-md-1 mb-md-0 d-flex flex-column flex-fill">
    <div class="bg-dark rounded-2 p-2 bg-warning d-flex flex-column flex-fill">
      <h4>Chat</h4>
      <iframe src="https://chat.somdomato.com" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</template>
<style scoped>
iframe {
  box-sizing: border-box;
  width: 100%;
  min-height: 500px;
  height: 100%;  
  /* height: calc(100% - 50px); */
}
</style>
