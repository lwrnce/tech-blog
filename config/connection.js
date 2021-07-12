const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
<<<<<<< HEAD
      port: 3306
=======
      port: 3001
>>>>>>> bc0de72372641cd2509115374e16ff15b936c0a6
    });

module.exports = sequelize;
