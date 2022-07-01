const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');

const links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}];

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone.`,
    feed: () => links,
  },
  Mutation: {
    post: (parent, args) => {
      let nextId = links.length + 1;

      const link = {
        id: `link-${nextId}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);
      return link;
    }
  },
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
});

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is runnong on ${url}`)
  );