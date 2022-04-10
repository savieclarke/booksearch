import { gql } from '@apollo/client';

export const GET_ME = gql`
  # create a GraphQL query to be executed by Apollo Client
  query Me {
    Me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        description
        image
        title
        authors
      }
    }
  }
`;