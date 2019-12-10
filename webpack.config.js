const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "test") {
  require("dotenv").config({ path: ".env.test" });
} else if (
  process.env.NODE_ENV === "development" ||
  process.env.NODE_ENV === "production"
) {
  require("dotenv").config({ path: ".env.development" });
}

module.exports = env => {
  const isProduction = env === "production";
  const isDevelopment = env === "development";
  return {
    entry: ["./src/app.js"],
    mode: "development",
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js"
    },
    optimization: {
      noEmitOnErrors: true
    },
    plugins: [
      new BundleAnalyzerPlugin(),
      new HtmlWebpackPlugin({
        filename: "../index.html",
        template: "template.html"
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? "styles.[hash].css" : "styles.css",
        path: "/dist"
      }),
      new webpack.DefinePlugin({
        "process.env.SOME_KEY": JSON.stringify(process.env.SOME_KEY)
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js|ts)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },
        {
          test: /\.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            { loader: "css-loader", options: { sourceMap: isDevelopment } },
            { loader: "sass-loader", options: { sourceMap: isDevelopment } }
          ]
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".js", ".json"]
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: "/dist/"
    }
  };
};
