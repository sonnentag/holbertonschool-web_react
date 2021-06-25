const path = require("path");

module.exports = {
  entry: "./js/dashboard_main.js",
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
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
