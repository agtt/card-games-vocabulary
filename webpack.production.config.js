'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var PostcssModulesValues = require('postcss-modules-values');


module.exports = {
    entry: [
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name]-[hash].min.js'
        // publicPath: '/'
    },
    plugins: [

        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: 'temp.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('[name]-[hash].min.css', 
            {
                allChunks: true
            }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],

    module: {

       loaders:[
            {
                test:/\.jsx?$/,
                loader:'babel',
                exclude: /node_modules/
                
            },
            {
                test:/\.css$/,
                exclude: path.resolve(__dirname, 'src/css/public'),
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss')
            },
            {
                test:/\.css$/,
                include: path.resolve(__dirname, 'src/css/public'),
                loader: ExtractTextPlugin.extract('style', 'css!postcss')
            }
        ]
    },
    postcss: [
        autoprefixer,
        PostcssModulesValues
    ]
};
