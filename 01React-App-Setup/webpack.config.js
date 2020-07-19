import { join } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: join(__dirname, "src", "index.js"),

  output: {
    path: join(__dirname, "dist"),
    filename: "bundle.js",
  },

  devServer: {
    port: 3000,
    compress: false,
    contentBase: join(__dirname, "dist"),
  },

  module: {
    rules: [
      //Babel Loader
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { compact: false },
      },

      //Css -Loader
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
        ],
      },

      //Sass/Scss Loader
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      //File-Loader
      {
        test: /\.(png|j?g|svg|gif)?$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, "public", "index.html"),
      filename: "index.html",
    }),
  ],
};
