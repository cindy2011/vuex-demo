const Path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        index: Path.resolve(__dirname, "src/main.js"),
    },
    output: {
        path: Path.resolve(__dirname, "dist"),
        filename: "[name]_bundle.js"
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            include: Path.resolve(__dirname, "src"),
            loader: "vue-loader"
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader!autoprefixer-loader"
        }, {
            test: /\.js$/,
            loader: "babel-loader",
            include: Path.resolve(__dirname, "src")
            // ,options: {
            //     presets: ["es2015", "stage-3"],
            //     plugins: ["transform-runtime"]
            // }
            // options: {
            //     "presets": ["env"],
            //     "plugins": ["transform-object-rest-spread"]
            // }
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
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: Path.resolve(__dirname, "src/index.html"),
            inject: true
        })
    ]
}