/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

var webpack = require('webpack');

module.exports = function (grunt) {
    grunt.initConfig({
        clean: ['./build', './lib'],
        babel: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'lib',
                    src: ['src/**.jsx', 'src/**.js', 'src/**.json'],
                    dest: 'lib',
                    ext: '.js'
                }]
            }
        },
        concurrent: {
            dev: ['nodemon:dev', 'webpack:dev'],
            options: {
                logConcurrentOutput: true
            }
        },
        nodemon: {
            dev: {
                script: './server.js',
                options: {
                    ignore: ['build/**'],
                    ext: 'js,jsx'
                }
            }
        },
        webpack: {
            dev: {
                resolve: {
                    extensions: ['', '.js', '.jsx']
                },
                entry: './index.jsx',
                output: {
                    filename: 'bundle_output.js',
                    publicPath: 'http://localhost:8090/assets'
                },
                module: {
                    loaders: [
                        { test: /\.css$/, loader: 'style!css' },
                        { test: /\.json/, loader: 'json-loader' },
                        {
                            test: /\.(js|jsx)$/,
                            exclude: /node_modules/,
                            loader: 'babel-loader'
                        }
                    ]
                },
                plugins: [
                    new webpack.NormalModuleReplacementPlugin(/^react?$/, require.resolve('react')),
                ],
                stats: {
                    colors: true
                },
                devtool: 'source-map',
                watch: true,
                keepalive: true
            }
        }
    });


    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('default', ['clean', 'concurrent:dev']);
};
