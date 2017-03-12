const webpack = require('webpack');
const babel = require('babel-loader');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'app');

module.exports = {
  entry: './app/main.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './app',
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
