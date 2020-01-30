const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': resolve('src/assets'),
        '@components': resolve('src/components'),
        '@views': resolve('src/views'),
        '@css': resolve('src/assets/css')
      }
    }
  },
}
