import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      recipes {
        name
        calories
        image
      }
    }
  }
`;

export const GET_ME = gql`
  query currentUser {
    me {
      _id
      username
      email
      recipes {
        name
        calories
        image
      }
    }
  }
`;
