const path = require('path')
const HappyPack = require('happypack')

module.exports = (env) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'happypack/loader?id=js',
        include: [
          path.join(env.projectDir, 'src')
        ]
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'js',
      threads: 4,
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      ]
    })
  ]
})
