module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'veterkind',
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
  /*
  ** Build configuration
  */
  build: {

    vendor: ['vue2-google-maps'],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      /*
      ** Change img rule to load SVG's with vue-svg-loader
      */
      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        exclude: /(node_modules)/
      })
      
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~/plugins/vue2-google-maps.js'],
}
