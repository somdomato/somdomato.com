<script setup>
const info = useInfoStore()

const fbUrl = 'https://www.facebook.com/sharer/sharer.php?u=https://somdomato.com&src=sdkpreparse&t='
const wpUrl = 'https://wa.me/?text='
const twUrl = 'https://twitter.com/intent/tweet?text='

function link(url) {
  const text = encodeURIComponent(`Ouça agora: *${info.artist} - ${info.title}* na _Rádio Som do Mato_`).replace(/%20/g, '+')
  return url + text
}
</script>
<template>
  <div>
    <h4>Tocando Agora</h4>
    <div class="card bg-dark text-white">
      <img :src="info.cover" class="card-img-top" :alt="info.artist">
      <div class="card-body pb-0">
        <h5 class="card-title fs-5">{{ info.artist }}</h5>
        <p class="card-text fs-6">{{ info.title }}</p>
        <div class="card-footer ps-0">
          Compartilhe: 
          <a :href="link(wpUrl)" target="_blank" class="me-2">
            <Icon name="logos:whatsapp-icon" />
          </a>
          <a :href="link(fbUrl)" target="_blank" class="fb-xfbml-parse-ignore me-2">
            <Icon name="logos:facebook" />
          </a>
          <a :href="link(twUrl)" target="_blank" class="me-2">
            <Icon name="logos:twitter" />
          </a>
        </div>        
      </div>
    </div>
  </div>
</template>