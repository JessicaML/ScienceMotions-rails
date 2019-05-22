const { environment } = require("@rails/webpacker");
const webpack = require("webpack");
environment.plugins.append(
  "Provide",
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  })
);

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|mp3|ogg)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  }
};

module.exports = environment;
