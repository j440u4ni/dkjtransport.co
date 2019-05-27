const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withFonts = require('next-fonts');
const withImages = require('next-images')

module.exports = withImages(withFonts(withLess(withSass(withCSS({ lessLoaderOptions: { javascriptEnabled: true } })), { enableSvg: true })));
//module.exports = { webpack: config => { config.node = { fs: 'empty' }; return config; } }
