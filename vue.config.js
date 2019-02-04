/* eslint-disable */
var webpack = require('webpack');
var path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/escofield/' : '/',
  configureWebpack: {
    devtool: 'source-map',
  },
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,

  css: undefined
}
