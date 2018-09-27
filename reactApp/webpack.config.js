const path = require('path');

// entry point is files we edit.
// __dirname is used to get path of where our public folder is located.
// filename is file where our es6 code gets transpiled to.
// loader transpiles to babel and uses reg ex to get all .js files
// We exclude the node_modules folder.
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
      }]
    }
};