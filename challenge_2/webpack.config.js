const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: './client/src/app.jsx',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},

	externals: {
		moment: 'moment',
	},

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'client/src')],
				loader: 'babel-loader',

				options: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				}
			}
		]
	},
};
