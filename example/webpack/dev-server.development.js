const utils = require('../../webpack/utils')

module.exports = env =>
  utils.extendPreset(env, 'dev-server.development', {
    devServer: {
      port: 8089
    }
  })
