const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

let mode = 'development';
if (process.argv.find((arg) => arg.indexOf('production') !== -1)?.length) {
  mode = 'production';
}

module.exports = {
  context: __dirname,
  mode,
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    filename: '[name].[hash:8].js',
    publicPath: mode === 'development' ? '/' : './',
    clean: true,
  },
  devServer: {
    open: true,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: 'defaults',
                },
              ],
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.s[ac]|ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)?$/,
        use: 'file-loader',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],
};
