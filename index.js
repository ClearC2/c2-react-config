const webpackConfig = require('./webpack/webpack.config')
const webpackUtils = require('./webpack/utils')
const babelConfig = require('./babel.config')
const postCSSConfig = require('./postcss.config')

module.exports = {
  webpackConfig,
  webpackUtils,
  babelConfig,
  postCSSConfig
}
