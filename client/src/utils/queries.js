import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
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