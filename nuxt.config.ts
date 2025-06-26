// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  devtools: { enabled: true },

  modules: ['@nuxt/eslint'],

  routeRules: {
    '/': {
      isr: 3600,
    },
    '/custom-endpoint-usage': {
      isr: 3600,
    },
    '/api/time': {
      isr: 3600,
    }
  }
})
