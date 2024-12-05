const { Sequelize } = require('sequelize');

const username = 'root';
const password = '';
const database = 'curso_db';

const sequelize = new Sequelize(database, username, password, {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
  logging: false,
  pool: {
    max: 8,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
