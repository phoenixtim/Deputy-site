const Sequelize = require('sequelize');

const config = require(__base + 'config');

var sequelize = new Sequelize(config.DB_SETTINGS.name, config.DB_SETTINGS.user,
  config.DB_SETTINGS.password, {
  host: config.DB_SETTINGS.host,
  dialect: config.DB_SETTINGS.dialect,
});

const Todo = require('./Todo');
// const News = require('./News');

module.exports = {
  sequelize: sequelize,

  Todo: sequelize.define(...Todo),
  News: sequelize.define(...require('./News')),
};
