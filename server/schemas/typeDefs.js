const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    }

    type Recipe {
      name: String! 
      calorieCount: Int! 
      recipeImage: String
      recipeDescription: [String]!
    }

    type Auth {
        token: ID!
        user: User
      }

      type Query {
        me: User
      }

      input RecipeInput {
        name: String! 
        calorieCount: Int! 
        recipeImage: String
        recipeDescription: [String]!
        
      }

      type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveRecipe(RecipeData: RecipeInput!): User
       
      }
    `;

    module.exports = typeDefs;