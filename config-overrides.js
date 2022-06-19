const webpack = require("webpack");
module.exports = function override(config, env) {
  config.resolve.fallback = {
    "os": require.resolve("os-browserify/browser"),
    "stream": require.resolve("stream-browserify"),
    "crypto": require.resolve("crypto-browserify"),
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  );

  return config;
};