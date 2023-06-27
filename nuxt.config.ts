// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ['stores']
  },
  alias: { '~~': './node_modules/' },
  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss'],
  modules: [
    [
      '@pinia/nuxt',
      { autoImports: ['defineStore', 'acceptHMRUpdate'] },
    ], 
    '@nuxtjs/google-fonts', 
    'nuxt-icon'
  ],
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
      appBase: process.env.NUXT_PUBLIC_APP_BASE || "https://somdomato.com",
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "https://api.somdomato.com",
      wssBase: process.env.NUXT_PUBLIC_WSS_BASE || "wss://ws.somdomato.com",
      bgColor: process.env.NUXT_PUBLIC_BACKGROUND_COLOR || "#4C3D3D"
    }
  }
})
