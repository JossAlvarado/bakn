const { Sequelize } = require('sequelize');

const dbConfig = {
  host: 'localhost',
  username: 'user',
  password: '1234',
  database: 'babyblue',
  dialect: 'mysql', // Puedes cambiar esto según tu base de datos (por ejemplo, 'postgres' para PostgreSQL)
};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  logging: false, // Puedes activar esto si quieres ver los logs de las consultas SQL
});

module.exports = sequelize;
