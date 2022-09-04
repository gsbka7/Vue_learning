const path = require('path'); //npm init

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //resolve =>cd路徑前, __dirname =>路徑cd後進行拼接   //絕對路徑
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                //css-loader負責將css加載
                //style-loader負責將樣式添加到DOM中
                //使用多個loader，從右向左
                use: ['style-loader', 'css-loader']
            }
        ]
    },

}