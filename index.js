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
    authorId: 'ihugeriluhe',
   },
  {
    title: 'バオー',
    authorId: 'ihugeriluhe',
  },
  {
    title: 'ドラゴンボール',
    authorId: 'kndvn'
  }
]

const authors = [
  {
    id: 'ihugeriluhe',
    name: '荒木飛呂彦',
  },
  {
    id: 'kndvn',
    name: '鳥山明',
  },
]

const resolvers = {
  Query: {
    books: () => books.map(book => ({
      title: book.title,
      author: authors.find((author) => author.id === book.authorId),
    }))
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
});
