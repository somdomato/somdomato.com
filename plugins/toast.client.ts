import * as vt from 'vue-toastification'
import "vue-toastification/dist/index.css"

const options = {
  position: "bottom-center",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vt.default, options)
  return {
    provide: {
      toast: vt.useToast()
    }
  }
})