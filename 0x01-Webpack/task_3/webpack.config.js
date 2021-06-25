const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
	},
  mode: "development",
	plugins: [
    new HTMLWebpackPlugin(),
    new CleanWebpackPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public")
  },
	devtool: 'inline-source-map',
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
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
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
