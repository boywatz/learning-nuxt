// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    privateKey: process.env.NUXT_PRIV_KEY,
    public: {
      publicKey: process.env.NUXT_PUB_KEY
    }
  },
  $development: {

  },
  $test: {

  },
  $production: {
    
  }
})
