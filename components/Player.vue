<script setup>
import { wsConnect, fetchCover } from '~/assets/js/utils'

const info = useInfoStore()
const config = useRuntimeConfig()

const title = ref('Rádio Som do Mato')
const cover = ref('/img/media/cover.svg')
const audio = ref(null)
const muted = ref(true)
const volumeperc = ref(null)
const oldVol = ref(1)
const playPauseIcon = ref('ph:play-fill')
const volumeIcon = ref('ph:speaker-simple-high-fill')
const props = defineProps({ stream: { type: String, default: 'https://radio.somdomato.com/principal' } })

function playHandle() {
  if (audio.value.paused) {
    playPauseIcon.value = 'ph:pause-fill'
    audio.value.play()
    muted.value = false
  } else {
    playPauseIcon.value = 'ph:play-fill'
    audio.value.pause()
    muted.value = true
  }
}

function muteHandle() {
  oldVol.value = audio.value.volume
  audio.value.muted = !audio.value.muted
  if (audio.value.muted) {
    volumeperc.value.style.width = '0%'
  } else {
    volumeperc.value.style.width = (oldVol.value * 100) + '%'
  }
  volumeIcon.value = audio.value.muted ? 'ph:speaker-simple-x-fill' : 'ph:speaker-simple-high-fill'

}

function volumeHandle(event) {
  const rect = event.currentTarget.getBoundingClientRect()
  const percent = (Math.min(Math.max(0, event.x - rect.x), rect.width) / rect.width) * 100
  const newVolume = parseInt(percent)
  volumeperc.value.style.width = newVolume + '%'
  audio.value.volume = newVolume / 100
}

async function cycleStream() {
  const icecastData = await useIcecastStats()
  title.value = `${icecastData.artist} - ${icecastData.title}`
  audio.value.firstChild.src = props.stream + '?ts=' + ~~(Date.now() / 1000)
  audio.value.load()
  playPauseIcon.value = 'ph:play-fill'
}

async function cycleStreamAndPlay() {
  await cycleStream()
  audio.value.play()
  playPauseIcon.value = 'ph:pause-fill'
}

async function refreshData() {
  const icecastData = await useIcecastStats()
  title.value = `${icecastData.artist} - ${icecastData.title}`
  const top = await useGetQueue(`${config.public.apiBase}/top`)
  const history = await useGetQueue(`${config.public.apiBase}/historico`)
  const requests = await useGetQueue(`${config.public.apiBase}/pedidos`)
  useState('lastSongs', () => history)
  useState('lastRequests', () => requests)
  useState('topSongs', () => top)

  info.artist = icecastData.artist
  info.title = icecastData.title
  info.cover = await fetchCover(icecastData.artist)
  cover.value = info.cover

  // const encodedTitle = encodeURIComponent(`Ouça agora: ${title.value}\n\nNa Rádio Som do Mato!\n\nhttps://somdomato.com`)
  // const whatsappLink = `https://wa.me/?text=${encodedTitle}`
  // const facebookLink = `<em>${title.value}</em>`
  // const twitterLink = `<em>${title.value}</em>`
  // const shareLinks = `Teste`


  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: info.title,
      artist: info.artist,
      album: "Rádio Som do Mato",
      artwork: [
        {
          src: "/img/media/cover-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "/img/media/cover-128x128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "/img/media/cover-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/img/media/cover-256x256.png",
          sizes: "256x256",
          type: "image/png",
        },
        {
          src: "/img/media/cover-384x384.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "/img/media/cover-512x512.png",
          sizes: "512x512",
          type: "image/png",
        }
      ]
    })
  }
}

onMounted(() => {
  cycleStream()
  audio.value.onpause = _ => cycleStream()
  wsConnect(config.public.wssBase, refreshData)
  refreshData()
})
</script>
<template>
  <ul class="navbar-nav mb-2 mb-md-0">
    <li class="nav-item d-flex align-items-center mx-auto">
      <Cover :image="cover" :class="{'rotating': !muted }" />

      <div class="wrapper ms-2">
        <div class="title">
          {{ title }}
        </div>
      </div>
    </li>
    <li class="nav-item mx-auto">
      <div class="player-container">
        <audio ref="audio">
          <source src="https://radio.somdomato.com/principal" type="audio/mp3" />
        </audio>

        <div class="controls">
          <div>
            <Icon :name="playPauseIcon" @click.prevent="playHandle" />
          </div>

          <div>
            <Icon name="ph:recycle-bold" @click="cycleStreamAndPlay" />
          </div>

          <div ref="volume-container" class="volume-container">
            <div class="volume-button">
              <Icon :name="volumeIcon" @click="muteHandle" />
            </div>

            <div ref="volumeslider" class="volume-slider d-none d-md-block" @click="volumeHandle">
              <div ref="volumeperc" class="volume-percentage"></div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<style scoped lang="scss">
@import '~/assets/scss/player.scss';

@-webkit-keyframes rotating { /* Safari and Chrome */
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}
</style>
