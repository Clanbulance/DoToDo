const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  plugins:[
    new HtmlWebpackPlugin({
        template: './src/index.html',
        clean: 'true',
        title: 'the dotodo',
        filename: 'splindex.html'
    })
  ],
  module: {
    rules: [
  
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
     },
     {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    ],
  },
};