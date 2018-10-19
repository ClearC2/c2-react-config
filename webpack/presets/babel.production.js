const path = require('path')

module.exports = (env) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: [
          path.join(env.projectDir, 'src')
        ]
      }
    ]
  }
})
