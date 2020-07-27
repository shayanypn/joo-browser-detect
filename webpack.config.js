/* global __dirname, require, module*/
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const libraryName = 'joo';
const isProduction = process.env.NODE_ENV === 'production';

let plugins = [],
  outputFile;

const config = {
	entry: __dirname + '/app/joo.js',
	devtool: 'source-map',
	mode: isProduction ? 'production' : 'development',
	output: {
		path: __dirname + '/dist',
		filename: isProduction ? (libraryName + '.min.js') : (libraryName + '.js'),
		library: libraryName,
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		rules: [{
				test: /(\.jsx|\.js)$/,
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/
			},
			{
				test: /(\.jsx|\.js)$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		modules: [path.resolve('./node_modules'), path.resolve('./src')],
		extensions: ['.json', '.js']
	},
	plugins: plugins
};

if (isProduction) {
	config.optimization = {
		minimizer: [new UglifyJsPlugin()],
	};
}


module.exports = config;
