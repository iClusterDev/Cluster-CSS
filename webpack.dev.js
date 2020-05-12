const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "main.js"),
  stats: {
    children: false,
    modules: false,
    assets: false,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "boundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", { loader: "sass-loader", options: { implementation: require("sass") } }, "resolve-url-loader"],
      },
    ],
  },
};
