const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', 
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },
 module: {
   rules: [
     {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
     },
     {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
     },
     {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
     },
   ],
 },
 devtool: 'inline-source-map',
 devServer: {
    static: './src',
    compress: true,
    port: 9000,
  },
 plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: "./src/Images/logo32x32.ico"
    }),
],
//   optimization: {
//     runtimeChunk: 'single',
// },
};