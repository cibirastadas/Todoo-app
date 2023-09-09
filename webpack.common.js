const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    bundle: "./src/features/todoList.js",
    nav: "./src/features/navBar.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // delete bundles to not reuse same
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/, //regular expression of files we want to target with this css e
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
          },
        ], //From right to left run loaders
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo app",
      fileName: "index.html",
      template: "src/template.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
