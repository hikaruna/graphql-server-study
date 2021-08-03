const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String!
    author: Author
  }
  type Author {
    name: String!
    books: [Book!]!
  }
  type Query {
    books: [Book]
    authors: [Author]
  }
`;

const books = [
  {
    title: 'ジョジョの奇妙な冒険',
    author: {
      name: '荒木飛呂彦'
    }
  },
  {
    title: 'ドラゴンボール',
    author: {
      name: '鳥山明'
    }
  }
]

const resolvers = {
  Query: {
    books: () => books
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
});
