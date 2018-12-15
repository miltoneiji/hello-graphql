const path = require("path");
const config = require("./config");

module.exports = {
  mode: config.env,
  target: "node",
  entry: "./src/server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js"
  },
  resolve: {
    extensions: [".mjs", ".js", ".ts"]
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(ts|js)$/,
        exclude: /node_modules/
      }
    ]
  }
};
