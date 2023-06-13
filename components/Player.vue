<script setup>
let { $ws } = useNuxtApp()
const song = ref('Rádio Som do Mato')
// const searchResults = ref([])
// const counter = useState('counter', () => Math.round(Math.random() * 1000))
// const songs = useState('lastSongs', _ => 'Songggg')

const audio = ref(null)
const volumeperc = ref(null)
const playPauseIcon = ref('ph:play-fill')
const volumeIcon = ref('ph:speaker-simple-high-fill')
const isMobile = ref(false)

const props = defineProps({
  title: { type: String, default: 'Rádio Som do Mato' },
  stream: { type: String, default: 'https://radio.somdomato.com/principal' }
})

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
  audio.value.muted = !audio.value.muted
  volumeIcon.value = audio.value.muted ? 'ph:speaker-simple-x-fill' : 'ph:speaker-simple-high-fill'
}

function volumeHandle(event) {
  const rect = event.currentTarget.getBoundingClientRect()
  const percent = (Math.min(Math.max(0, event.x - rect.x), rect.width) / rect.width) * 100
  const newVolume = parseInt(percent)
  if (newVolume > 94) newVolume = 100
  volumeperc.value.style.width = newVolume + '%'
  audio.value.volume = newVolume / 100
}

function cycleStream() {
  audio.value.firstChild.src = props.stream + '?ts=' + ~~(Date.now() / 1000)
  audio.value.load()
  audio.value.play()
}

onMounted(async _ => {
  song.value = await useIcecastStats()

  isMobile.value = window.innerWidth < 768 ? true : false
  emit('isMobile', isMobile)
  audio.value.firstChild.src = props.stream + '?ts=' + ~~(Date.now() / 1000)

  // audio.value.onpause = _ => {
  //   audio.value.firstChild.src = props.stream + '?ts=' + ~~(Date.now() / 1000)
  //   audio.value.load()
  // }

  window.addEventListener('resize', _ => {
    isMobile.value = window.innerWidth < 768 ? true : false
    emit('isMobile', isMobile)
  })

  $ws.onmessage = async event => {
    const msg = JSON.parse(event.data)
    const history = await useHistory()

    // console.log(songs)

    useState('lastSongs', _ => history)
    song.value = await useIcecastStats()

    switch (msg.action) {
      case 'songchanged':
        // console.log('Song Changed:', song.value)
        break
      case 'requestadded':
        // console.log('New request', event.data)
        break
      default:
        console.log('New server message:', event.data)
    }
  }
})
</script>
<template>
  <div class="player-container">
    <audio ref="audio">
      <source src="https://radio.somdomato.com/principal" type="audio/mp3" />
    </audio>

    <div class="controls">
      <div class="play-container">
        <Icon :name="playPauseIcon" @click.prevent="playHandle()" />
      </div>

      <div class="cycle-container">
        <Icon name="ph:recycle-bold" @click="cycleStream" />
      </div>

      <div ref="volume-container" class="volume-container" v-if="!isMobile">
        <div class="volume-button">
          <Icon :name="volumeIcon" @click="muteHandle" />
        </div>

        <div ref="volumeslider" class="volume-slider" @click="volumeHandle">
          <div ref="volumeperc" class="volume-percentage"></div>
        </div>
      </div>

      <div class="title">{{ song }}</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.player-container {
  display: grid;
  grid-template-rows: 1fr;

  height: 40px;
  // width: 300px;
  // box-shadow: 0 0 10px 0 #000a;
  overflow: hidden;

  .controls {
    display: flex;
    // justify-content: space-between;
    align-items: stretch;
    padding: 0 10px;
    gap: 10px;

    > * {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .volume-container {
      position: relative;
      z-index: 2;
      cursor: pointer;

      .volume-button {
        height: 26px;
        display: flex;
        align-items: center;
        .volume {
          transform: scale(1);
        }
      }

      .volume-slider {
        position: absolute;
        left: 20px;
        // top: 15px;
        z-index: -1;
        width: 0;
        height: 8px;
        background: white;
        box-shadow: 0 0 20px #000;
        transition: 0.25s;

        .volume-percentage {
          background: coral;
          height: 100%;
          width: 100%;
        }
      }
      &:hover {
        .volume-slider {
          left: 28px;
          width: 140px;
        }
      }
    }
  }
}
</style>
