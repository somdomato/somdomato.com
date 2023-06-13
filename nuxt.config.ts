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
  }
})
