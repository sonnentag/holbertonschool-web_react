const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./js/dashboard_main.js",
  mode: "development",
	plugins: [
    new HTMLWebpackPlugin(),
    new CleanWebpackPlugin()
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  performance: {
    hints: false,
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000
  },
	devServer: {
    contentBase: './public',
    compress: true,
    port: 8564,
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
