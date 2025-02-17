module.exports = {
  devServer: {
    port: 80
  },
  publicPath: './',
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 20480 }))
  }
}