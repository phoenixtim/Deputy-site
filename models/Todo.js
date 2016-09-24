const Sequelize = require('sequelize');

var Todo = [
  'Todo',
  {
    name: Sequelize.STRING,
    text: Sequelize.STRING,
  },
];

module.exports = Todo;
