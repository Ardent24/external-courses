const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const configObj = {splitChunks: {chunks: 'all'}};

  if (isProd) {
    configObj.minimizer = [new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
      new ImageMinimizerPlugin({
        minimizerOptions: {
          plugins: [
            ['gifsicle', {interlaced: true}],
            ['jpegtran', {progressive: true}],
            ['optipng', {optimizationLevel: 5}],
            ['svgo', {plugins: [{removeViewBox: false,},],},],
          ],
        },
      }),
    ];
  }
  return configObj;
};

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {main: './index.js'},
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.less', '.png', '.jpg', '.html'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  optimization: optimization(),
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  devtool: isProd ? false : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'), minify: {collapseWhitespace: isProd}
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename: filename('css')}),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'dist')
      }]
    })
  ],
  module: {
    rules: [
      {test: /\.html$/, loader: 'html-loader',},
      {
        test: /\.(less|css)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: `./img/${filename('[ext]')}`
          }
        }, {
          loader: ImageMinimizerPlugin.loader,
          options: {
            severityError: 'warning',
            minimizerOptions: {
              plugins: ['gifsicle'],
            },
          },
        },]
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/, use: [{
          loader: 'file-loader',
          options: {
            name: `./fonts/${filename('[ext]')}`
          }
        }]
      },
      {test: /\.xml$/, use: ['xml-loader']},
      {test: /\.csv$/, use: ['csv-loader']},
      {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'],},
    ]
  },
}