const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: "./app/src/app.js",
    output: {
        path: path.resolve(__dirname, "app", "dist"),
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: '[hash:8]',
                            }
                        }
                    },
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'bundle.css',
    })]
};
