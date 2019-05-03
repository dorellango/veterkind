module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Veterkind - Muebles clínicos a medida.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Veterkind website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700|News+Cycle:400,700|Open+Sans' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: ['@/assets/css/tailwind.css'],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue2-google-maps'],
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
    }
  },
  plugins: ['~/plugins/vue2-google-maps.js'],
}
