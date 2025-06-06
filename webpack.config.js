const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/scripts/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
		
		watchFiles: ["./src/**/*.html"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|avif)$/i,
				type: "asset/resource",
				generator:{
					filename: 'images/[name].[hash][ext]'
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
				generator:{
					filename: 'fonts/[name].[hash][ext]'
				}
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
		],
	},
};
