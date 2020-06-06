import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + 'Welcome',
    title: 'Alero: Web and Mobile Development Company in Kenya' || 'New Website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Agile web and mobile development team building Nodejs, Vuejs, NUXT, React and React Native applications for startups and enterprises. Let&#39;s talk!' },
      { hid: 'og:title', name: 'og:title', content: 'Alero: Web and Mobile Development Company in Kenya' },
      { hid: 'og:description', name: 'og:description', content: 'Agile web and mobile development team building Nodejs, Vuejs, NUXT, React and React Native applications for startups and enterprises. Let&#39;s talk!' },
      { hid: 'og:locale', content: 'en_KE' },
      { hid: 'og:description', name: 'og:description', content: 'Alero Website Develpoment' },
      { hid: 'og:url', content: 'https://alero.co.ke' },
      { hid: 'og:site_name', content: 'Alero Group' },
      { hid: 'article:publisher', content: 'https://www.facebook.com/alerogroup' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],

  googleAnalytics: {
    id: 'UA-143741549-1',
    dev: false
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Sitemap
  */
  sitemap: {
    path: '/alero.co.ke.xml',
    hostname: 'https://alero.co.ke',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    routes: [
      '/',
      '/about',
      '/blog'
    ].map(route => ({
      url: route,
      changefreq: 'daily',
      priority: 1,
      lastmodISO: new Date().toISOString().split('T')[0]
    }))
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: '#F2DF9E',
          aleroblack: '#231F20'
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
