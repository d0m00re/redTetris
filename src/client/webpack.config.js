const path = require('path');
const HWP = require('html-webpack-plugin');

 
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'core-js/es6': 'core-js/es',
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    publicPath:"/",
    contentBase: path.resolve(__dirname, './dist'),
    compress: true,
    port: 9001
  },
  plugins: [
    new HWP({
      template: path.join(__dirname, './public/index.html'),
    }),
  ],
};