/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

var webpack = require('webpack');

module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle_output.js', // this is the default name, so you can skip it
        // at this directory our bundle file will be available
        // make sure port 8090 is used when launching webpack-dev-server
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            { test: /\.json/, loader: 'json-loader' },
            {
                // tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    plugins: [
        // Protects against multiple React installs when npm linking
        new webpack.NormalModuleReplacementPlugin(/^react?$/, require.resolve('react')),
        new webpack.NormalModuleReplacementPlugin(/^react(\/addons)?$/, require.resolve('react/addons'))
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};