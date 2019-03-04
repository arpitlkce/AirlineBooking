const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }

            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: {
            index: './public/index.html'
        },
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                pathRewrite: {'^/api' : ''}
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin([outputDirectory]),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        /*new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
        })*/
    ]
};