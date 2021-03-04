const withImages = require("next-images");
module.exports = withImages({
  target: "serverless",
  async rewrites() {
    return [
      // Rewrite everything to `pages/index`
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
  webpack(config, options) {
    return config;
  },
});
