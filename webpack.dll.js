const webpack = require('webpack');
const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
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
    devtool: '#source-map',
    output: {
        path: path.resolve(__dirname, "common"),
        filename: '[name].dll.js',
        library: '[name]_[chunkhash]',
    },
    plugins: [
        new CleanWebpackPlugin(['common']),
        new webpack.DllPlugin({
            path: path.resolve(__dirname, "common", "manifest.json"),
            name: '[name]_[chunkhash]',
            context: path.join(__dirname) //name是dll暴露的对象名，这里需要跟output.library一致           
        })
    ]
};