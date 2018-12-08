const path = require('path')

exports.onCreateWebpackConfig = ({getConfig, actions}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        remiges$: path.resolve(__dirname, 'dist', 'lib', 'index.js'),
      },
    },
  })
}
