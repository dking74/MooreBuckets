const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: 'server.js', to: 'server.js', toType: 'file' }
        ]
      })
    ]
  }
};