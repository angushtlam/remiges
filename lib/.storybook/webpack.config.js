const mainWebpackFile = require('../webpack.config')

module.exports = (_baseConfig, _env, defaultConfig) => {
  // Copy resolves to Storybook so it works.
  defaultConfig.resolve = {
    ...mainWebpackFile.resolve,
  }

  return defaultConfig
}
