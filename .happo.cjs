const { RemoteBrowserTarget } = require("happo.io");

module.exports = {
  apiKey: "dcbe856cbe",
  apiSecret: "49f735a73043032bb100037f9",
  targets: {
    chrome: new RemoteBrowserTarget("chrome", {
      viewport: "1024x768",
    }),
  },
};
