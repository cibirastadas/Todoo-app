const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 3000,
    open: true, // open browser automatically
    compress: true, // zip html file and it's get downloaded faster and browser unzip it and use it
    hot: true, //  a method of updating javascript modules within a running application
    historyApiFallback: true, //index.html page will likely have to be served in place of any 404 responses.
  },
});
