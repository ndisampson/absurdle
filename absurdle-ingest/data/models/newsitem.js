'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewsItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NewsItem.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NewsItem',
  });
  return NewsItem;
};