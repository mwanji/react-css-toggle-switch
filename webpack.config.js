module.exports = {
  entry: { 
    "react-css-toggle-switch": "./src/index.js",
    docs: "./docs/index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    library: "ToggleSwitch",
    libraryTarget: "var"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"],
          plugins: ["syntax-export-extensions", "transform-export-extensions"]
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
