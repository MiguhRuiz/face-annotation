const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const config = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/build',
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /(\.js|.jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: { presets: ['es2015', 'react'] }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ]
}

module.exports = config