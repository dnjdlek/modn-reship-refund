const widthBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const webpack = require('webpack');

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv({
  // Your Next.js config.
});

module.exports = {
  i18n: {
    locales: ['ko'],
    defaultLocale: 'ko',
  },
  webpack(config, { isServer, buildId }) {
    config.resolve.modules.push(__dirname);

    return config;
  },
};
