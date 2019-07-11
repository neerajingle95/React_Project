const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  // Track file from where error originates
  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
    hot: true
  }
});