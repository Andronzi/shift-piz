const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/i, // for jsx tsx and ts files
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        use: "file-loader",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    alias: {
      "@modules": path.resolve(__dirname, "..", "src/modules"),
      "@assets": path.resolve(__dirname, "..", "src/assets"),
      "@images": path.resolve(__dirname, "..", "src/assets/images"),
      "@store": path.resolve(__dirname, "..", "src/store"),
      "@src": path.resolve(__dirname, "..", "src"),
    },
    extensions: [
      ".wasm",
      ".ts",
      ".tsx",
      "jsx",
      ".mjs",
      ".cjs",
      ".js",
      ".json",
      ".jpg",
      ".png",
      ".jpeg",
      ".ico",
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", "./dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./public/index.html"),
    }),
  ],
  stats: "errors-only",
};
