const webpack = require('webpack');
const babel = require('babel-loader');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'frontend/dist');
const APP_DIR = path.resolve(__dirname, 'frontend/src');


module.exports = {
  devtool: 'eval-source-map',
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test : /\.lsc/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
    ]
  }
}
