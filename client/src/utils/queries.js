import { gql } from "@apollo/client";

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

// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const SEARCH_GOOGLE_BOOKS = gql`
  query searchGoogleBooks($query: String!) {
    books(query: $query) {
      bookId
      description
      image
      title
      authors
    }
  }
`;
