const { merge } = require('webpack-merge');
// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// Configs
const baseConfig = require('./webpack.base.config');

const prodConfiguration = (env, argv) => {
  return merge([
    {
      devtool: '',
      mode: 'production',
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
      },
      optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: -10,
              reuseExistingChunk: true,
            },
          },
          minSize: 10000,
          maxSize: 250000,
        },
        minimizer: [new TerserPlugin({ parallel: 2 })],
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].[hash].css',
          chunkFilename: '[id].[hash].css',
        }),
        new OptimizeCssAssetsPlugin(),
      ],
    },
  ]);
};

module.exports = (env, argv) => {
  return merge(baseConfig(env, argv), prodConfiguration(env, argv));
};
