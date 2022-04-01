const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = (env) => ({
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: [require('react-refresh/babel')]
            }
          }
        ],
        resolve: {
          fullySpecified: false
        },
        include: [
          path.join(env.projectDir, 'src')
        ]
      }
    ]
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ]
})
