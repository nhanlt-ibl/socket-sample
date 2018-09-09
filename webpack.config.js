require('dotenv').config()
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

module.exports = [{
    entry: {
      server: "./src/Server/Server.ts"
    },
    output: {
      path: __dirname + "/dist",
      filename: "[name].js"
    },
    resolve: {
      extensions: [".ts", ".js", ".json"]
    },
    module: {
      rules: [{
        test: /\.(ts|js)?$/,
        loader: "ts-loader"
      }]
    },
    externals: [nodeExternals()]
  },
  {
    entry: {
      browser: "./src/Client/Client.tsx"
    },
    output: {
      path: __dirname + "/dist",
      filename: "[name].js"
    },
    resolve: {
      extensions: [".ts", ".js", ".json", ".tsx"]
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        loader: "ts-loader"
      }]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          SOCKET_SERVER: JSON.stringify(process.env.SOCKET_SERVER)
        }
      })
    ]
  }
];