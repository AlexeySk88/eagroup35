module.exports = {
  /*
  ** Headers of the page
  */
   head: {
    title: 'EAGroup',
    meta: [
      {charset: 'utf-8'},
      {hid: 'description', name: 'description', content: 'Качественные и доступные юридические и бухгалтерские услуги. Представительство в судах. Подготовка бизнес-планов. Бесплатные консультации.'},
      {name: 'keywords', content: 'еагрупп, еагрупп35, Шулепов Алексей, Вологда, бухгалтерские, бухгалтерского, бухуслуги, налоговая декларация, налогообложение, кадровик, кадровика, менеджер по персоналу, юридические, юрист, представление в суде, возврат автомобиля, помощь, консультация, возврат товара, потребитель'},
      {name: 'google-site-verification', content: 'j5Du3nZ6CAj_210yklfbG8IMZnAinoECOG2XbkCNRp0'}
    ],
    link: [
      {rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700&amp;subset=cyrillic'}
    ],
    script: [
      { src: 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full' }
    ],
  },
  /*head: {
    title: 'nuxt_test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },*/
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

