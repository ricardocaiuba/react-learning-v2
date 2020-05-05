const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve("./src/index.js"),
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff2?|otf)$/,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname + "/public"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve("./public"),
    hot: true,
    port: 3001,
    historyApiFallback: true,
  },
};
