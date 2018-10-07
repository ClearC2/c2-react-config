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
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          postCSSLoader
        ]
      }
    ]
  }
})
