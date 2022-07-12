'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rss_feeds', [
      {
        name: 'Weird News',
        link: 'https://chaski.huffpost.com/us/auto/vertical/weird-news',
        feed_url: 'https://chaski.huffpost.com/us/auto/vertical/weird-news',
        description: 'HuffPost - United States',
        title: 'HuffPost - United States',
        language: 'en-US',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'The Nation Magazine',
        title: 'The Nation Magazine',
        link: 'http://www.thenation.com/feed/?post_type=article',
        feed_url: 'http://www.thenation.com/feed/?post_type=article',
        language: 'en-US',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Not The Onion',
        feed_url: 'https://www.reddit.com/r/nottheonion/',
        title: 'Sadly, this is not the Onion.',
        last_build_date: '2022-07-11T19:19:38+00:00',
        link: 'https://rss.reddit.com/r/nottheonion/',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'The Mercury News',
        feed_url: 'https://www.mercurynews.com/tag/weird-news/feed/',
        // image: JSON.stringify({
        //   link: 'https://www.mercurynews.com',
        //   url: 'https://www.mercurynews.com/wp-content/uploads/2016/10/32x32-mercury-news-white.png?w=32',
        //   title: 'Weird News – The Mercury News',
        //   width: '32',
        //   height: '32'
        // }),
        // pagination_links: JSON.stringify([{ self: 'https://www.mercurynews.com/tag/weird-news/feed/' }]),
        title: 'Weird News – The Mercury News',
        description: '',
        link: 'https://www.mercurynews.com',
        language: 'en-US',
        last_build_date: 'Sat, 09 Jul 2022 12:13:13 +0000',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'News of The Weird',
        link: 'https://www.reddit.com/r/NewsOfTheWeird/',
        feed_url: 'https://www.reddit.com/r/NewsOfTheWeird/',
        title: 'Weird and wacky news from around the world',
        last_build_date: '2022-07-11T19:24:15+00:00',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        feed_url: 'https://theintercept.com/feed/?lang=en',
        // pagination_links: JSON.stringify([{ self: 'https://theintercept.com/feed/?lang=en' }]),
        title: 'The Intercept',
        name: 'The Intercept',
        description: '',
        link: 'https://theintercept.com',
        language: 'en-US',
        last_build_date: 'Mon, 11 Jul 2022 19:03:16 +0000',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'NPR - Strange News',
        title: 'NPR - Strange News',
        link: 'https://www.npr.org/sections/strange-news/',
        feed_url: 'https://news.google.com/rss/search?q=site:npr.org+%22strange+news%22&hl=en-US&gl=US&ceid=US:en',
        language: 'en-US',
        last_build_date: 'Mon, 11 Jul 2022 19:34:57 GMT',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rss_feeds', null, {});
  }
};
