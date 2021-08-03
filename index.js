const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
  }
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'ジョジョの奇妙な冒険'
  },
  {
    title: '彼岸島'
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
