const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        app: ['./js/deflate.js','./js/inflate.js','./js/zip.js','./js/monocore.js','./js/monoctrl.js','./efm.js'],
        vendors: ['react']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            exclude: /(node_modules)/,
            test: /\.(js|jsx)$/i,
            loader: "babel-loader"
          }
        ]
      },
};