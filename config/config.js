// config/config.js
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DBUSER,
    password: process.env.PASS,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mariadb'
  },
};
