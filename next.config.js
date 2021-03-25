const withImages = require("next-images");
module.exports = withImages({
  // target: "serverless",
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:any*",
  //       destination: "/",
  //     },
  //   ];
  // // },
  basePath: "/bkk-election",
  webpack(config, options) {
    return config;
  },
});
