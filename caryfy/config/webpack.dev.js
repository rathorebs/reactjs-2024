const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist', // Correct path to serve static files
    hot: true,
    historyApiFallback: true // This is important for React Router to work correctly with Webpack Dev Server
  },
});