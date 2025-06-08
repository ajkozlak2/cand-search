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
      # Ensure to include necessary fields as per your schema
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
      # Ensure to include necessary fields as per your schema
    }
  }
`;

// Query to get all candidates
export const GET_CANDIDATES = gql`
  query GetCandidates {
    candidates {
      id
      name
      location
      email
      html_url
      company
      // Add any other fields you need from the candidate object
    }
  }
`;