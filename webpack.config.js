const path = require('path');

const webpack = require('webpack');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = env => {
    const isDevelopment = env.NODE_ENV === 'development';

    return {
        mode: isDevelopment ? 'development' : 'production',
        entry: {
            bundle: [
                isDevelopment && 'webpack-dev-server/client',
                isDevelopment && 'webpack/hot/dev-server',
                './src/index.tsx',
            ].filter(Boolean),
        },
        output: {
            filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            assetModuleFilename: 'assets/[hash][ext][query]',
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            port: 9191,
            historyApiFallback: true,
        },
        devtool: 'eval-source-map',
        optimization: {
            minimize: !isDevelopment,
            minimizer: [
                new TerserPlugin(),
                new CssMinimizerPlugin(),
            ],
            runtimeChunk: 'single',
            splitChunks: {
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        name: 'vendor',
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'initial',
                        priority: 1,
                    },
                },
            },
        },
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    use: ['ts-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'resolve-url-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpe?g|svg|woff(2)?|ttf|eot)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.scss'],
            alias: {
                shared: path.resolve(__dirname, 'src/shared/'),
                routes: path.resolve(__dirname, 'src/routes/'),
                assets: path.resolve(__dirname, 'src/assets/'),
                styles: path.resolve(__dirname, 'src/styles/'),
                data: path.resolve(__dirname, 'src/data/'),
            },
        },
        plugins: [
            new CleanWebpackPlugin(),
            isDevelopment && new webpack.HotModuleReplacementPlugin(),
            new MiniCssExtractPlugin({
                filename: isDevelopment ? '[name].css' : '[name].[contenthash].css',
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/index.html',
                inject: 'body',
                chunks: ['bundle', 'vendor'],
            }),
        ].filter(Boolean),
    };
};
