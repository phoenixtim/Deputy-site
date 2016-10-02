var express = require('express');

const globals = require('./globals');
const config = require(__base + 'config');

var app = express();
process.env.NODE_ENV = config.NODE_ENV;
__env = process.env.NODE_ENV;

const router = require(__base + 'routes');
const db = require(__base + 'models');
const graphs = require(__base + 'graphs');

app.use('/', express.static(__base + 'public/'));
app.use(graphs);
app.use(router);

var address = config.APP ?
  (config.PROTOCOL ? config.PROTOCOL : 'http') + '://' +
  (config.HOST ? config.HOST : 'localhost') + ':' +
  (config.PORT ? config.PORT : 3000) :
  'http://localhost:3000';

db.sequelize.sync()
.then(() => {
  app.listen((config.APP && config.APP.PORT) ? config.APP.PORT : 3000, () => {
    console.log('Server started and listening on', address);
  });
});
