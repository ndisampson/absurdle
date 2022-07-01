const RSSParser = require('rss-parser');

const feeds = [
  'https://www.theonion.com/rss'
];

const getFeeds = async () => {
  console.log("parsing ", feeds[0]);
  const feed = await new RSSParser().parseURL(feeds[0]);

  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(` -- ${item.title} - ${item.link}\n    ${item.contentSnippet}\n`)
  });
};

getFeeds();