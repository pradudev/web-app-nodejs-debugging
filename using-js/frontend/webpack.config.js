const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '.')
    },
    //mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    devtool: 'source-map',
};