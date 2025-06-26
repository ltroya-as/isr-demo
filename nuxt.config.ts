// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  devtools: { enabled: true },

  modules: ['@nuxt/eslint'],

  routeRules: {
    '/': {
      isr: 3600,
      headers: {
        'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400'
      }
    },
    '/custom-endpoint-usage': {
      isr: 3600,
      headers: {
        'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400'
      }
    },
    '/api/time': {
      isr: 3600,
      headers: {
        'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400'
      }
    }
  }
})
