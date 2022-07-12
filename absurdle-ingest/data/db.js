const { Sequelize } = require('sequelize');

const dbConfig = require('../config/db');

const config = dbConfig[process.env.NODE_ENV || 'development'];

console.log(config);

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  database: config.database,
  dialect: config.dialect,
  host: config.host,
  password: config.password,
  port: config.port,
  username: config.username,
});

async function syncDb(sequelize, options = {}) {
  const { force, alter } = options
  try {
    if (force) await sequelize.sync({ force: true })
    else if (alter) await sequelize.sync({ alter: true })
    else await sequelize.sync()
    console.log('All models were synchronized successfully');
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  sequelize,
  syncDb,
}
