const path = require('path');

module.exports = {
  app: path.resolve(__dirname, '..'),
  appCommon: path.resolve(__dirname, '../src/Common'),
  appDist: path.resolve(__dirname, '../dist'),
  appPages: path.resolve(__dirname, '../src/Pages'),
  appSrc: path.resolve(__dirname, '../src'),
  postcssConfig: path.resolve(__dirname, '../config'),
};
