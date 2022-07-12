const { syncDb, sequelize } = require('../data/db');
const models = require("../data/models");

syncDb(sequelize, { force: true });
