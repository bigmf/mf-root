const path = require('path')
const apiMocker = require('mocker-api')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3001,
    open: true,
    before(app) {
      apiMocker(app, path.resolve('./mock/index.js'))
    }
  },
  output: {
    publicPath: 'auto'
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
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript']
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-import',
                  [
                    'tailwindcss',
                    {
                      darkMode: 'class'
                    }
                  ],
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    }
                  ]
                ]
              }
            }
          }
        ]
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
