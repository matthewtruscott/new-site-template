const path = require("path");
const settings = require("./settings");

module.exports = {
  entry: {
    App: settings.themeLocation + "/js/app.js"
  },
  output: {
    path: path.resolve(__dirname, settings.themeLocation + "/temp"),
    filename: "app-bundled.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  mode: "development"
};
