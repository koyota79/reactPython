const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 8080;
module.exports = {
  mode: 'development',
  entry:'./src/index.js',
//   output: {
//     path: '',
//     filename: '',
//     publicPath: '',
//   },
  module: {
    rules: [
        { // 첫번째 룰
            test: /\.js$/,
            exclude:/node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, 
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }


      ]
  },
  plugins: [],
  optimization: {},
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'E:/react/reactPython/frontend/public/index.html',
      // favicon: 'public/favicon.ico' 파비콘은 준비가 되어있지 않아 주석처리합니다.
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    open: true,
    historyApiFallback: true
  }
}