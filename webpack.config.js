var glob = require('glob');
var path = require('path');

var entries = {};
glob.sync("./src/**/*.ts").map(function (file) {
  console.log(file)
  entries[file.replace(/.\/src\//, ".\/dist\/").replace(/\.ts$/, ".js")] = file;
});

module.exports = {
  entry: entries,
  output: {
    filename: '[name]',
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  }
};

