module.exports = {
  entry: './routes/client/Router.jsx',
  output: {
    path: './public/build',
    filename: 'client.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['latest', 'react'],
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['latest'],
        },
      },
    ],
  },
};
