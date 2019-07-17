const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const environment = process.env.ENV;

let config = {};

if (environment === "PROD") {
  config = {
    entry: path.join(__dirname, "src/index.jsx"),
    output: {
      path: path.join(__dirname, "dist"),
      filename: "index.js",
      libraryTarget: "commonjs2"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.(css|scss)$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    externals: {
      react: {
        commonjs: "react",
        commonjs2: "react",
        amd: "React",
        root: "React"
      },
      "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "ReactDOM"
      }
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css"
      })
    ]
  };
} else {
  config = {
    entry: path.join(__dirname, "examples/src/index.jsx"),
    output: {
      path: path.join(__dirname, "examples/dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "examples/src/index.html")
      })
    ],
    resolve: {
      extensions: [".js", ".jsx"]
    },
    devServer: {
      contentBase: path.join(__dirname, "examples/dist"),
      port: 8000
    }
  };
}

module.exports = config;
