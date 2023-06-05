const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    recipes: [Recipe]
  }

  type Recipe {
    name: String
    calories: Int
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user: User
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
