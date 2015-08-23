// entry: root component that renders all its children components
// output: where to output rendered bundle
// loaders: how to process entry to get to output. Babel comes with jsx compiler!
module.exports = {
	entry: './app/App.js',
	output: {
		filename: 'public/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
        		exclude: /(node_modules|bower_components)/,
        		loader: 'babel'			
			}
		]
	}
};