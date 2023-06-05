import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id 
        email
        password
        recipes
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const ADD_RECIPE = gql`
mutation addRecipe($recipeData: RecipeInput!) {
    addRecipe(recipeData: $recipeData) {
      _id
      username
      email
      savedRecipe {
        name
        calorieCount
        recipeImage
        recipeDescription
      }

    }
}

`;

export const REMOVE_RECIPE = gql`
mutation removeRecipe($recipeData: RecipeInput!) {
    removeRecipe(recipeData: $recipeData) {
      _id
      username
      email
      savedRecipe {
        name
        calorieCount
        recipeImage
        recipeDescription
      }

    }
}

`;