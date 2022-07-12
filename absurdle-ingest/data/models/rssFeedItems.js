module.exports = function (sequelize, DataTypes) {
  return sequelize.define('RssFeedItem', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pubDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'pub_date',
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    importance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'rss_feed_items',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "rss_item_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
