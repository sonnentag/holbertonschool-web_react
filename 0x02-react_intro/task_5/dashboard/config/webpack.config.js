const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve("./dist")
  },
	devServer: {
    hot: true,
    contentBase: path.resolve('./dist'),
    compress: true,
    port: 3000,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
	module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: ['file-loader',
						{
		    			loader: 'image-webpack-loader',
		    			options: {
			  				bypassOnDebug: true,
			  				disable: true,
			  			},
			  		},
				],
		  },
    ]
  }
};
