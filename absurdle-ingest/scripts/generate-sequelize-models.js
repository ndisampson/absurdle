require('dotenv').config();
const SequelizeAuto = require('sequelize-auto');

const auto = new SequelizeAuto(
  process.env.PG_DATABASE,
  process.env.PG_USER,
  process.env.PG_PASSWORD, {
  host: process.env.PG_HOST,
  dialect: 'postgres',
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
