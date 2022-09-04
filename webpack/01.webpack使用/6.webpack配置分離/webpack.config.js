const path = require('path'); //npm init
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'), //resolve =>cd路徑前, __dirname =>路徑cd後進行拼接   //絕對路徑
        filename: 'bundle.js',
    },  
    module: {
        rules: [
            {
                test: /\.css$/,
                //css-loader負責將css加載
                //style-loader負責將樣式添加到DOM中
                //使用多個loader，從右向左
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                },
            ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                options: {
                presets: ['@babel/preset-env']
                }
            }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {
        alias: {//別名
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.BannerPlugin('版權test'),
        new HtmlWebpackPlugin({
            template: 'index.html' //原本的index.html作為樣板
        }),
    ],
    
}