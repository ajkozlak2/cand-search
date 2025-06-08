import { gql } from '@apollo/client';

// Query to get user data
export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

// Query to search for candidates
export const SEARCH_CANDIDATES = gql`
  query SearchCandidates($searchTerm: String!) {
    candidates(searchTerm: $searchTerm) {
      name
      username
      // Add any other fields you need
    }
  }
`;

// Mutation to save a candidate
export const SAVE_CANDIDATE = gql`
  mutation SaveCandidate($candidate: CandidateInput!) {
    saveCandidate(candidate: $candidate) {
      _id
      name
      username
      // Add any other fields you need to return after saving
    }
  }
`;