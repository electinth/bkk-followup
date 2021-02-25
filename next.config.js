const withImages = require('next-images');
module.exports = withImages({
  // distDir: 'build',
  target: 'serverless',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/dashboard': { page: '/dashboard' },
      '/intro-dashboard': { page: '/intro-dashboard' },
    };
  },
  webpack(config, options) {
    return config;
  },
});
