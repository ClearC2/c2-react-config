const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const postCSSLoader = require('./partials/postcss-loader')

const extractCSS = new MiniCssExtractPlugin({
  filename: '[name].[contenthash].css',
  chunkFilename: '[id].[contenthash].css'
})

module.exports = () => ({
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [
          /\.module\.css$/
        ],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          postCSSLoader
        ]
      }
    ]
  },
  plugins: [
    extractCSS
  ]
})
