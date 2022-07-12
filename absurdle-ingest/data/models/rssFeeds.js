const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('RssFeed', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "",
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "",
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "",
    },
    language: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'en-US',
    },
    feedUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'feed_url',
    },
    image: { type: DataTypes.JSONB },
    lastBuildDate: {
      type: DataTypes.DATE,
      field: 'last_build_date',
    },
    paginationLinks: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      field: 'pagination_links',
    },
  }, {
    sequelize,
    tableName: 'rss_feeds',
    schema: 'public',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
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
