const path = require('path')

module.exports = {
  entry: path.join(__dirname, '../src/react/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: [
          'babel-loader'
        ],
        exclude: [/node_modules/]
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  mode: 'development'
}
