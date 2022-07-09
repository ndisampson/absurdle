var DataTypes = require("sequelize").DataTypes;
var _rss_feed_items = require("./rss_feed_items");
var _rss_feeds = require("./rss_feeds");

function initModels(sequelize) {
  var rss_feed_items = _rss_feed_items(sequelize, DataTypes);
  var rss_feeds = _rss_feeds(sequelize, DataTypes);


  return {
    rss_feed_items,
    rss_feeds,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
