/*
*/
const webpack = require('webpack');


module.exports = [
    {
        devtool: 'source-map',
        entry: './src/index.js',
        output: {
            filename: 'synthes.js',
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015'],
                        plugins: ["add-module-exports"]
                    }
                }
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                beautify: true,
                output: {comments: false}
            })
        ]
    },
    {
        entry: './src/index.js',
        output: {
            filename: 'synthes.min.js',
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015'],
                        plugins: ["add-module-exports"]
                    }
                }
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                output: {comments: false}
            })
        ]
    }
]