const webpack = require('webpack');
const babel = require('babel-loader');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'frontend/dist');
const APP_DIR = path.resolve(__dirname, 'frontend/src');


module.exports = {
  devtool: 'eval-source-map',
  entry: APP_DIR + '/main.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(lsc|jsx?)/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['lightscript']
        }
      },
    ],
  },
  plugins: [
  ],
  devServer: {
    contentBase: path.join(__dirname, "frontend"),
  },
}
