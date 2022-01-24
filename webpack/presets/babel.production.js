const path = require('path')

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
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
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
  }
})
