// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '~~': './node_modules/',
  },
  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxtjs/google-fonts', 'nuxt-icon'],
  googleFonts: {
    families: {
      Nunito: true
    }
  },
  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'exact-active'
    }
  },
  runtimeConfig: {
    public: {
      appBase: process.env.NUXT_PUBLIC_APP_BASE || "http://localhost:3000",
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:4000",
      wssBase: process.env.NUXT_PUBLIC_WSS_BASE || "ws://localhost:4000"
    }
  }
})
