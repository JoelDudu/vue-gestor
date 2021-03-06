const pkg = require('./package')


const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {},

  dev: process.env.NODE_ENV !== 'production',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - Gestor',
    title: 'Site',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description', name: 'description', content: 'Vue Material Admin Template is a \n' +
          '    Google Material Design inspired admin dashboard template built with Vue and Vuetify.'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ],
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/echarts/4.0.4/echarts-en.min.js'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#3adced'},

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/theme.styl',
    '~/assets/style/app.styl',
    'font-awesome/css/font-awesome.css',
    'roboto-fontface/css/roboto/roboto-fontface.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/vee-validate'
  ],

  components: true,
  
  router: {
    middleware: ['acesso']
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
      '@nuxtjs/firebase',
    ],
    firebase: {
      config: {
        apiKey: "AIzaSyAb39bE-zx0ADy005H38V8VWbBcPpxQVOo",
        authDomain: process.env.FIREBASE_authDomain,
        projectId: process.env.FIREBASE_projectId,
        storageBucket: process.env.FIREBASE_storageBucket,
        messagingSenderId: process.env.FIREBASE_messagingSenderId,
        appId: process.env.FIREBASE_appId
      },
      services: {
        auth: {
          persistence: 'local', // default
          initialize: {
            onAuthStateChangedAction: 'onAuthStateChangedAction',
            subscribeManually: false
          },
          ssr: false,
        }
      }
    },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
