import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        user {
            _id
            username
            email
            recipes
        }
    }
`;
