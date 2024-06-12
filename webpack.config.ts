const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ruleForTypeScript = {
    test: /\.tsx?$/,
    use: [
        {
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                        '@babel/preset-react',
                        { 
                            runtime: 'automatic'
                        }
                    ],
                    '@babel/preset-typescript',
                ]
            }
        },
        'ts-loader'
    ],
    exclude: /node_modules/,
};

const ruleForStyles = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
};

const rules = [ ruleForTypeScript, ruleForStyles ];

module.exports = (env, argv) => {
    const { mode } = argv;
    const isProduction = mode === 'production';

    return {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: isProduction 
            ? '[name].[contenthash].js'
            : '[name].js'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            alias: {
                'react': 'react',
            },
            fallback: {
                crypto: require.resolve('crypto-browserify'),
                stream: require.resolve('stream-browserify'),
                assert: require.resolve('assert'),
                zlib: require.resolve('browserify-zlib'),
                util: require.resolve('util'),
                buffer: require.resolve('buffer/'),
                process: require.resolve('process/browser.js'),
                vm: require.resolve('vm-browserify')
            }
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            }
        },
        plugins: [
          new HtmlWebpackPlugin({ template: 'public/index.html' }),
          new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: 'process/browser.js'
          }),
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
            openAnalyzer: false,
          }),
          new CompressionPlugin({
            algorithm: 'gzip',
          }),
          new CleanWebpackPlugin(),
        ],
        module: {
            rules
        },
        devServer: {
            open: true,
            port: 3000,
            //overlay: true,
            compress: true
        },
        //devtool: 'source-map'
    }
};
