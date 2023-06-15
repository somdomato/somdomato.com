<script setup>
import { wsConnect } from '~/assets/js/utils'

const config = useRuntimeConfig()
const title = ref('Rádio Som do Mato')
const audio = ref(null)
const volumeperc = ref(null)
const oldVol = ref(1)
const playPauseIcon = ref('ph:play-fill')
const volumeIcon = ref('ph:speaker-simple-high-fill')
const props = defineProps({ stream: { type: String, default: 'https://radio.somdomato.com/principal' } })
const emit = defineEmits({ isMobile: { type: Boolean, default: false } })

function playHandle() {
  if (audio.value.paused) {
    playPauseIcon.value = 'ph:pause-fill'
    audio.value.play()
  } else {
    playPauseIcon.value = 'ph:play-fill'
    audio.value.pause()
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
  title.value = await useIcecastStats()
  audio.value.firstChild.src = props.stream + '?ts=' + ~~(Date.now() / 1000)
  audio.value.load()
  playPauseIcon.value = 'ph:play-fill'
}

async function cycleStreamAndPlay() {
  await cycleStream()
  audio.value.play()
  playPauseIcon.value = 'ph:pause-fill'
}

async function refreshData(data) {
  title.value = await useIcecastStats()
  const history = await useGetQueue(`${config.public.apiBase}/historico`)
  const requests = await useGetQueue(`${config.public.apiBase}/pedidos`)
  useState('lastSongs', () => history)
  useState('lastRequests', () => requests)
  console.log('WebSockets Received: %s', data)
}

onMounted(() => {
  cycleStream()
  audio.value.onpause = _ => cycleStream()
  wsConnect(config.public.wssBase, refreshData)
})
</script>
<template>
  <ul class="navbar-nav ms-auto mb-2 mb-md-0">
    <li class="nav-item d-flex align-items-center">
      <div class="wrapper">
        <div class="title">
          {{ title }}
        </div>
      </div>
    </li>
    <li class="nav-item">
      <div class="player-container">
        <audio ref="audio">
          <source src="https://radio.somdomato.com/principal" type="audio/mp3" />
        </audio>

        <div class="controls">
          <div class="play-container">
            <Icon :name="playPauseIcon" @click.prevent="playHandle()" />
          </div>

          <div class="cycle-container">
            <Icon name="ph:recycle-bold" @click="cycleStreamAndPlay" />
          </div>

          <div ref="volume-container" class="volume-container">
            <div class="volume-button">
              <Icon :name="volumeIcon" @click="muteHandle" />
            </div>

            <div ref="volumeslider" class="volume-slider" @click="volumeHandle">
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
</style>
