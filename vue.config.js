const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 100,
})
module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss],
      },
      sass: {
        prependData: `@import '@/assets/scss/index.scss';`,
      },
    },
  },
  devServer: {
    proxy: 'http://127.0.0.1:7001/',
  },
}
