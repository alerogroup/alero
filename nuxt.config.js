const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const siteConfig = require('./config/site')
const analyticsID = 'UA-143741549-1'
const googleAdClient = 'ca-pub-1508072306809427'
const siteUrl = 'https://www.alero.co.ke'

require('dotenv').config()

// ./nuxt.config.js

module.exports = {
  mode: 'universal',

  watch: ['~/config/*'],

  env: {
    baseUrl:
      process.env.NODE_ENV === 'production'
        ? `${siteConfig.url}/`
        : 'http://localhost:3000/'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Alero Group',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge'
      },
      {
        hid: 'description',
        name: 'description',
        content: siteConfig.description
      },
      {
        hid: 'robots',
        name: 'robots',
        content:
          siteConfig.index === false ? 'noindex,nofollow' : 'index,follow'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:site_name',
        content: siteConfig.title
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: siteConfig.title
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteConfig.description
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'B_5KQRyRmfrcsYNjxPFRH6SbJxuCSQUzegVL44RePfo'
      },

      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'VFBmJ73rVpSlREwokm_IiOWVjsQITOr1Hb-_R9IGheo'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css'
      }
    ]
  },

  /*
   ** Customize the progress-bar color */

  loading: '~/components/loading.vue',

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-adsense',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /**
   * Google analytics
   * @see https://github.com/nuxt-community/analytics-module
   */
  googleAnalytics: {
    id: analyticsID
  },

  sitemap: {
    hostname: siteUrl
  },

  'google-adsense': {
    id: googleAdClient
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    }
    /*
     ** You can extend webpack config here
     */
    /*   extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        }) 
    }
     } */
  }
}
