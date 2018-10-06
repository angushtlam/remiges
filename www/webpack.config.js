const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './www/index.js',
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'www'),
    filename: 'index.js',
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
    ],
  },
  resolve: {
    alias: {
      remiges$: path.resolve(__dirname, '..', 'dist', 'lib', 'index.js'),
    },
  },
  plugins: [new HtmlWebpackPlugin({template: './www/index.html'})],
}
