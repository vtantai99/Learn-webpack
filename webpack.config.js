const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Webpack app', filename: 'index.html' })
  ]
}