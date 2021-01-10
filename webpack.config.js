const path = require('path')
const apiMocker = require('mocker-api')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './src/index',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'auto'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3001,
    // open: true,
    before(app) {
      apiMocker(app, path.resolve('./mock/index.js'))
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript'
          ]
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    // new ModuleFederationPlugin({
    //   name: 'app1',
    //   remotes: {
    //     app2: 'app2@http://localhost:3002/remoteEntry.js'
    //   },
    //   shared: ['react', 'react-dom']
    // }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
