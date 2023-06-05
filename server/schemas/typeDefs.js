const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    }

    type Auth {
        token: ID!
        user: User
      }

      type Query {
        me: User
      }

      input PaymentInput {
        name: [String]
        card: String!
        paymentId: ID!
      }

      input RecipeInput {
        name: String! 
        calorieCount: Int! 
        recipeImage: String!
        recipeDescription: [String]!
        recipeId: ID!
      }

      type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        savePayment(paymentData: PaymentInput!): User
        saveRecipe(RecipeData: RecipeInput!): User
       
      }
    `;

    module.exports = typeDefs;