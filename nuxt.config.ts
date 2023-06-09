// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: `https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v17.0&appId=${process.env.NUXT_PUBLIC_FACEBOOK_APPID}&autoLogAppEvents=1`,
          async: true,
          crossorigin: 'anonymous',
          defer: true,
          nonce: "Y4qSS687"
        }
      ]
    }
  },
  imports: {
    dirs: ['stores']
  },
  alias: { '~~': './node_modules/' },
  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss'],
  extends: ['nuxt-umami'],
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
      wssBase: process.env.NUXT_PUBLIC_WSS_BASE || "wss://ws.somdomato.com"
    }
  }
})
