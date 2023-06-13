<script setup>
let { $ws } = useNuxtApp()
const title = ref('Rádio Som do Mato')
const audio = ref(null)
const volumeperc = ref(null)
const playPauseIcon = ref('ph:play-fill')
const volumeIcon = ref('ph:speaker-simple-high-fill')


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
  volumeperc.value.style.width = newVolume + '%'
  audio.value.volume = newVolume / 100
}

function cycleStream() {
  audio.value.firstChild.src = props.stream + '?ts=' + ~~(Date.now() / 1000)
  audio.value.load()
  audio.value.play()
}

onMounted(async _ => {
  title.value = await useIcecastStats()
  audio.value.firstChild.src = props.stream + '?ts=' + ~~(Date.now() / 1000)

  // audio.value.onpause = _ => {
  //   audio.value.firstChild.src = props.stream + '?ts=' + ~~(Date.now() / 1000)
  //   audio.value.load()
  // }

  $ws.onmessage = async event => {
    console.log('Server Message!!!!!!!!!!!!!!!!!')
    // const msg = JSON.parse(event.data)
    // msg.action
    const history = await useHistory()
    useState('lastSongs', _ => history)
    title.value = await useIcecastStats()
  }
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
            <Icon name="ph:recycle-bold" @click="cycleStream" />
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
.wrapper {
  display: grid;
  align-content: stretch;
  min-width: 0;
}

.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

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

    >* {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .volume-container {
      cursor: pointer;

      .volume-button {
        display: flex;
        align-items: center;
      }

      .volume-slider {
        width: 50px;
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

      // .volume-slider {
      //   // left: 28px;
      //   width: 140px;
      // }

    }
  }
}
</style>
