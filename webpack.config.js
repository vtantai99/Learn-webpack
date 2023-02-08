const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    sum: './src/sum.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    open: true,
    port: 8000
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Webpack App', filename: 'index.html' })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}