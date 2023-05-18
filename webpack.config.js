const path = require('path');
module.exports = {
    entry: {
        main: path.join(__dirname, '/test.ts'),
    },
    output: {
        filename: 'test.js',
        path: __dirname
    },
    module: {
        rules: [
            {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};