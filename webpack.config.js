const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成index.html 文件并把名字 文件啥的 写入
const {CleanWebpackPlugin} = require('clean-webpack-plugin');//清理指定文件夹下的文件
const webapack = require("webpack")
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  "devtool": "cheap-module-source-map",
  module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: "/\.css$/",
                use: [
                        'style-loader',
                        'css-loader'
                    ]
            },
            {
                test: "/\.(jpg|gif|png|svg)$/",
                use: [
                    "file-loader"
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase: "./dist",
        hot: true
    }
};