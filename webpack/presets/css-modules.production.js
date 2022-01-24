const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const postCSSLoader = require('./partials/postcss-loader')

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          postCSSLoader
        ]
      }
    ]
  }
})
