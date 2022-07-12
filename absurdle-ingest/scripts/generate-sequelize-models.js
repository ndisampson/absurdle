require('dotenv').config();
const SequelizeAuto = require('sequelize-auto');

const auto = new SequelizeAuto(
  process.env.POSTGRES_DATABASE,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    caseModel: 'c',   // camelCase
    caseFile: 'c',    // camelC
  }
);

auto.run().then(data => {
  console.log(data.tables);      // table and field list
  console.log(data.foreignKeys); // table foreign key list
  console.log(data.indexes);     // table indexes
  console.log(data.hasTriggerTables); // tables that have triggers
  console.log(data.relations);   // relationships between models
  console.log(data.text)         // text of generated models
});
