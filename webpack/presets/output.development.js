const path = require('path')

module.exports = (env) => ({
  output: {
    path: path.join(env.projectDir, 'dist'),
    publicPath: '/'
  }
})
