const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rss_feeds', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ""
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ""
    },
    language: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'rss_feeds',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "rss_feed_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
