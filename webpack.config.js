const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'main.js'
    },
    
    resolve: {
      extensions: ['.js'],  
    },
    
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    mode: 'development',
devServer: {
   port: 9000,
   open: true
},
    plugins: [
      new HtmlWebpackPlugin(
          {
              inject:true,
              template:'./public/index.html',
              filename: './index.html',
              minify:false,
          }
      ),
      new CopyWebpackPlugin({
        patterns: [{ from: './src/styles/styles.css',
        to: '' },
      ],
      })
    ]
  }