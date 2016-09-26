const gulp = require('gulp');
const liveServer = require('gulp-live-server');
const fs = require('fs');
const path = require('path');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const webpack = require('webpack');
const gulpUtils = require('gulp-util');

const config = require('./config');

const NODE_ENV = config.NODE_ENV;

if (NODE_ENV === 'production') {
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  });
}

var server = liveServer('server.js', {env: {NODE_ENV: 'development'}});

gulp.task('clean', () => {
  var files = [
    'public/build/client.js',
    'public/build/client.min.js',
    'public/build/admin.js',
    'public/build/admin.min.js',
  ];

  for (var num = 0 ; num < files.length ; num++) {
    try {
      fs.accessSync(files[num]);
      fs.unlinkSync(files[num]);
    }
    catch (err) {}
  }
});

gulp.task('webpack', ['clean'], (callback) => {
  const webpackConfig = require('./webpack.config.js');
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      server.stop();
      throw new gulpUtils.PluginError('webpack', err);
    }
    gulpUtils.log('[webpack]', stats.toString());

    callback();
  })
});

gulp.task('babel-client', ['clean', 'webpack'], () => {
  return gulp.src('public/build/client.js')
  .pipe(uglify().on('error', (err) => {
    server.stop();
    throw err;
  }))
  .pipe(rename('client.min.js'))
  .pipe(gulp.dest('public/build'));
});

gulp.task('babel-admin', ['clean', 'webpack'], () => {
  return gulp.src('public/build/admin.js')
  .pipe(uglify().on('error', (err) => {
    server.stop();
    throw err;
  }))
  .pipe(rename('admin.min.js'))
  .pipe(gulp.dest('public/build'));
});

gulp.task('restart', ['babel-client', 'babel-admin'], () => {
  server.start.bind(server)();
});

gulp.task('default', ['clean', 'babel-client', 'babel-admin', 'restart'],
    () => {
  server.start();

  gulp.watch([
      'config.js',
      'globals.js',
      'server.js',
      'public/**/*',
      '!public/build/**/*',
      'routes/**/*',
    ], ['clean', 'babel-client', 'restart']);
});
