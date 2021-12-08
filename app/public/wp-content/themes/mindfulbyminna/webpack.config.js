module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/build'
    },
    module: {
        rules: [ 
              {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
              }
        ]
    },
    resolve: {
        extensions: [
          '.tsx',
          '.ts',
          '.js'
        ]
      }
}