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
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },

      {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          publicPath: 'assets/'
        }
      }
      
    ]
    
  }
}



module.exports = environment;

