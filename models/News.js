const Sequelize = require('sequelize');

var News = [
  'News',
  {
    title: {type: Sequelize.STRING, allowNull: false},
    text: {type: Sequelize.TEXT, allowNull: false, defaultValue: ''},
    date: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},
  },
];

module.exports = News;
