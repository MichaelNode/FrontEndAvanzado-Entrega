/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require("webpack-merge");
const webpack = require("webpack");
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var Dotenv = require('dotenv-webpack');
//var CriticalPlugin = require('webpack-plugin-critical').CriticalPlugin;
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var page = function({ title, template, chunks, filename }) {
    return new HtmlWebpackPlugin(
      {
        title: title,
        template: template,
        chunks: chunks,
        minify: {
          collapseWhitespace: true
        },
        filename: filename
      }
    )
  }

var commonConfig = {
    //entry: path.join(__dirname, 'src', 'index'),
    entry: {
        articles: [ 'babel-polyfill', 'whatwg-fetch',  path.join(__dirname, 'src', 'pages', 'articles', 'index')],
        register:[ 'babel-polyfill', 'whatwg-fetch', path.join(__dirname, 'src', 'pages', 'register', 'index')],
        login: [ 'babel-polyfill', 'whatwg-fetch',path.join(__dirname, 'src', 'pages', 'login', 'index')],
        article: [ 'babel-polyfill', 'whatwg-fetch',  path.join(__dirname, 'src', 'pages', 'article', 'index')],
      },
    output: {
        filename: '[name][hash].js',
        path: path.resolve(__dirname, 'dist')
    },
   
    plugins: [
        new Dotenv(),
        page({
          title: 'Articles',
          template: path.join(__dirname, 'src', 'pages', 'articles', 'index.html'),
          chunks: ['articles'],
          filename: path.resolve(__dirname, 'dist', 'index.html')
        }),
        page({
          title: 'Article',
          template: path.join(__dirname, 'src', 'pages', 'article', 'index.html'),
          chunks: ['article'],
          filename: path.resolve(__dirname, 'dist','article', 'index.html')
        }),
        page({
            title: 'Register',
            template: path.join(__dirname, 'src', 'pages', 'register', 'index.html'),
            chunks: ['register'],
            filename: path.resolve(__dirname, 'dist', 'register', 'index.html')
          }),
        page({
          title: 'Login',
          template: path.join(__dirname, 'src', 'pages', 'login', 'index.html'),
          chunks: ['login'],
          filename: path.resolve(__dirname, 'dist', 'login', 'index.html')
        }),
        // new HtmlWebpackPlugin({
        //     title: 'Blog',
        //     template: path.join(__dirname, 'src', 'index.html'),
        //     minify:{
        //         collapseWhitespace:true
        //     }
        // }),
        // new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ],
    module:{
        rules:[
            {
             test: /\.(js)$/,
             exclude: /node_module/,
             use: "babel-loader"

            },
            {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
            },
            // {
            //     test: /\.scss$/,
            //     use: [
            //       MiniCssExtractPlugin.loader,
            //       'css-loader',
            //       'sass-loader',
            //       {
            //         // Loader for webpack to process CSS with PostCSS
            //         loader: 'postcss-loader',
            //         options: {
            //           plugins: function () {
            //             return [
            //               require('autoprefixer')
            //             ];
            //           }
            //         }
            //     }
                    
            //     ]
            // },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                  },
                ],
            },
            {
              test: /\.(html|ejs)$/,
              use: ['html-loader', 'ejs-html-loader']
            }     
        ]
    },
    resolve: {
        alias: {
          components: path.resolve(__dirname, 'src', 'components'),
          assets: path.resolve(__dirname, 'src', 'assets'),
          styles: path.resolve(__dirname,'src', 'styles'),
          utils: path.resolve(__dirname, 'src', 'utils'),
          data: path.resolve(__dirname, 'src', 'data'),
          services: path.resolve(__dirname, 'src', 'services'),
          pages: path.resolve(__dirname, 'src', 'pages')
        }
      },
    devtool: 'source-map'
};

var devConfig = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
      ]
    },
    devServer: {
      overlay: true,
      port: 5000
    },
  };


var prodConfig = {
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin(
          {
            cssProcessorOptions: { map: { inline: false } }
          }
        ),
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css'
      }),
      new CleanWebpackPlugin(['dist'])
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
      ]
    },
  };


  module.exports = (env, argv) =>
  argv.mode === 'development' ?
    merge(commonConfig, devConfig) :
    merge(commonConfig, prodConfig);


  




    