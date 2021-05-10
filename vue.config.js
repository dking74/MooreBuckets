const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  configureWebpack: {
    module: {
    //   rules: [
    //     {
    //       test: /\.s[ac]ss$/i,
    //       use: [
    //         // Creates `style` nodes from JS strings
    //         "style-loader",
    //         // Translates CSS into CommonJS
    //         "css-loader",
    //         // Compiles Sass to CSS
    //         "sass-loader",
    //       ],
    //     },
    //     {
    //       test: /\.(png|jpe?g|gif)$/i,
    //       loader: 'file-loader',
    //       options: {
    //         outputPath: 'assets',
    //       },
    //     }
    //   ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: 'server.js',
            to: 'server.js',
            toType: 'file'
          }
        ]
      })
    ]
  }
};