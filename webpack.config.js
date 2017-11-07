const Path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
        index: Path.resolve(__dirname, "src/main.js")
    },
    output: {
        path: Path.resolve(__dirname, "dist"),
        filename: "[name]_bundle.js?v=[chunkhash:8]"
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            include: Path.resolve(__dirname, "src"),
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
            include: Path.resolve(__dirname, "src")
        }, {
            test: /\.(jpg|gif|svg|png|ttf)$/,
            loader: "url-loader",
            include: Path.resolve(__dirname, "src"),
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
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('css/[name].css?v=[contenthash:8]');
            },
            allChunks: true
        }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: Path.resolve(__dirname, "src/index.html"),
            inject: true
        }),
        new webpack.DllReferencePlugin({
            context: Path.join(__dirname, "./", "common"),
            manifest: require("./common/manifest.json")
        })
    ]
}