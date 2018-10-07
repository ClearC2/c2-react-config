const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const postCSSLoader = require('./partials/postcss-loader')

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          postCSSLoader,
          'sass-loader'
        ]
      }
    ]
  }
})
