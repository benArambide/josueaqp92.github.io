


var webpack =  require('webpack');
var path =  require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
   filename: "assets/css/app.css"
  //disable: process.env.NODE_ENV === "development"
});


module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'assets/js/bundle.js',
      publicPath: (process.env.NODE_ENV === 'production') ? '/' : '/josuearambide.com/resources/dist/',
      path: path.resolve(__dirname, 'dist')
   },
   resolve : {
      alias: {
         '@app': path.resolve(__dirname, 'src/'),
      }
   },
   module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'es2016'],
              plugins: [ [require('babel-plugin-angularjs-annotate'), { "explicitOnly" : true}] ]
            }
          }
        },
         {
            test: /\.(html)$/,
            use: {
               loader: 'html-loader',
               options: {
                  attrs: [':data-src']
               }
            }
        },
        {
          test: /\.scss|css$/,
          use: extractSass.extract({
              use: [{
                  loader: "css-loader"
              }, {
                  loader: "sass-loader",
              }],
              // use style-loader in development
              fallback: "style-loader"
          })
        },
        {
          test: /\.(ttf|woff2|woff|otf|eot)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '',
            outputPath : 'assets/fonts/' 
          }
        },
        {
          test: /\.(png|jpg|gif|svg|ico)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '',
            outputPath : 'assets/img/' 
          }
        },
        {
         test: /\.(mp4)$/,
         loader: 'file-loader',
         options: {
           name: '[name].[ext]',
           publicPath: '',
           outputPath : 'assets/video/' 
         }
       }
      ]
   },
   plugins: [
      new webpack.ProvidePlugin({
         $: 'jquery',
         jQuery: 'jquery',
         jquery: 'jquery'
      }),
      extractSass
   ]
}