const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Auth {
    token: ID!
    user: User
  }

}
  type Query {
      me: User
   }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: ParameterInput): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
