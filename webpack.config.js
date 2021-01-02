var path = require("path");

module.exports = {
  entry: { index: path.resolve(__dirname, "src","client", "src", "index.js") },

  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /nodes_modules/
      }
    ]
  },
};
