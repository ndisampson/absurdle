require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT || 5432,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    },
    seederStorage: 'sequelize',
  },
  test: {
  },
  production: {
  }
};
