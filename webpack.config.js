module.exports = {
  entry: {
    client: './routes/client/Router.jsx',
    admin: './routes/admin/Router.jsx',
  },
  output: {
    path: './public/build',
    filename: '[name].js',
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
