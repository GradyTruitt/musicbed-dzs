var path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    library: "react-dzs",
    libraryTarget: "umd",
    publicPath: "/build/",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom")
    }
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },

    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  }
};
