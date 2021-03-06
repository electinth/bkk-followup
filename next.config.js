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
  // },
  webpack(config, options) {
    return config;
  },
});
