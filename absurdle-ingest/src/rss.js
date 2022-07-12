const Parser = require('rss-parser');
const parser = new Parser();

const getRssFeed = async (url) => {
  return await parser.parseURL(url);
}

const getRssFeedItems = async (url) => {
  const feed = await getRssFeed(url);
  // console.log(feed.title);
  // feed.items.forEach(item => {
  //   console.log(item.title + ':' + item.link)
  // });
  return feed.items;
}

const getRssFeedInfo = async (url) => {
  const feed = await getRssFeed(url);
  return {
    ...feed,
    items: undefined,
  };
}

(async () => {
  const feedUrls = [
    'https://rss.reddit.com/r/nottheonion/',
    'https://chaski.huffpost.com/us/auto/vertical/weird-news',
    'http://www.thenation.com/feed/?post_type=article',
    'https://www.phillyvoice.com/feed/tag/odd-news/',
    'https://www.mercurynews.com/tag/weird-news/feed/',
    'https://rss.reddit.com/r/NewsOfTheWeird/',
    'https://theintercept.com/feed/?lang=en',
    'https://news.google.com/rss/search?q=site%3Anpr.org%20%22strange%20news%22&hl=en-US&gl=US&ceid=US%3Aen',

    // non-xml
    // 'https://www.rsssearchhub.com/feeds/strange-news-feeds',
    // 'https://www.npr.org/sections/strange-news/',
  ];
  feedUrls.forEach(async (url) => console.log(await getRssFeedInfo(url)));
})();
