const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const _rssFeedItems = require("./rssFeedItems");
const _rssFeeds = require("./rssFeeds");


const RssFeedItem = _rssFeedItems(sequelize, DataTypes);
const RssFeed = _rssFeeds(sequelize, DataTypes);

module.exports = {
  RssFeedItem,
  RssFeed,
};
