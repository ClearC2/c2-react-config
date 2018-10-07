const postCSSLoader = require('./partials/postcss-loader')

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          postCSSLoader
        ]
      }
    ]
  }
})
