const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')
const webpack = require('webpack')


module.exports = {
  devServer: {
    port: 3000,
    hot: true,
  },
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js'
  },
  resolve: {
    alias: {
      '@templates': path.resolve(__dirname, 'src/templates/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/, //todos los archivos js seran leidos por el babel-loader
        exclude: /node_modules/, //exepto estas carpetas
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['babel-plugin-styled-components', '@babel/plugin-syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin({})
  ],
}