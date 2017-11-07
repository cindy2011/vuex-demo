const webpack = require('webpack');
const path=require("path");
const vendors = [
  'vue',
  'vue-router',
  'axios',
  'moment'
];

module.exports = {
  entry: {
    vendor: vendors,
  },
  output: {
    path:path.resolve(__dirname,"common"),
    filename: '[name].[chunkhash].js',
    library: '[name]_[chunkhash]',
  },  
  plugins: [
    new webpack.DllPlugin({
      path:  path.resolve(__dirname,"common","manifest.json"),
      name: '[name]_[chunkhash]',//name是dll暴露的对象名，这里需要跟output.library一致
      context:__dirname//,context是解析包路径的上下文，这个要跟接下来配置的dll user一致。
    })
  ],
};