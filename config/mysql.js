const Sequelize = require('sequelize');

const sequelize = new Sequelize('database2', 'root', 'Naveen@1994', {
  dialect: 'mysql',
  host: 'localhost',
  storage: './session.mysql'
});

module.exports = sequelize;