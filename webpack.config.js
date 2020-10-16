const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry:  ["@babel/polyfill", "./src/index.js"],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
      new CopyPlugin({
        patterns: [
          { from: './src/img', to: 'images' },
        ]
      })
],
module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    },
    {
      test: /\.s[ac]ss$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      loader: 'file-loader',
      options: {
        outputPath: 'images',
        name: '[name].[ext]',
      },
    },
  ]
}
};