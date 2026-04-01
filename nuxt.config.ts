// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Inter: [400, 500, 600],
      'JetBrains Mono': [400, 500],
    },
    display: 'swap'
  },
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/css/main.css']
})
