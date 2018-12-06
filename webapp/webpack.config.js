const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/index.html',
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: process.env.DEV_SERVER_PORT || 4000,
    historyApiFallback: true,
  }
};
