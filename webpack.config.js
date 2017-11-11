const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-Plugin");
const CleanWebpackPlugin = require('clean-webpack-Plugin');
const ExtractTextPlugin = require("extract-text-webpack-Plugin");
const AddAssetHtmlPlugin = require('add-asset-html-webpack-Plugin');
const webpack = require("webpack");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "src/main.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]_bundle.js?v=[chunkhash:8]"
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            include: path.resolve(__dirname, "src"),
            loader: "vue-loader"
        }, {
            test: /\.css$/,
            //loader: "style-loader!css-loader!autoprefixer-loader"
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader!autoprefixer-loader"
            })
        }, {
            test: /\.js$/,
            loader: "babel-loader",
            include: path.resolve(__dirname, "src")
        }, {
            test: /\.(jpg|gif|svg|png|ttf)$/,
            loader: "url-loader",
            include: path.resolve(__dirname, "src"),
            options: {
                limit: 409600,
                name: "[name].[ext]"
            }
        }]
    },
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
            filename: (getpath) => {
                return getpath('css/[name].css?v=[contenthash:8]');
            },
            allChunks: true
        }),
        new webpack.DllReferencePlugin({
            context: path.join(__dirname),
            manifest: require("./common/manifest.json")
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "src/index.html"),
            inject: true
        }),
        new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname, './common/*.dll.js')
        })
    ]
}