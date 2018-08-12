const path = require('path')

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'lib'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: 'css-loader',
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
          },
        },
      },
    ],
  },
}
