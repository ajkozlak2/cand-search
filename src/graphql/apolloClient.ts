// src/graphql/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Create an HTTP link to your GraphQL server
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URI
});

// Initialize Apollo Client
const client = new ApolloClient({
  link: httpLink, // Use the HTTP link
  cache: new InMemoryCache(), // Set up an in-memory cache
});

// Export the Apollo Client instance
export default client;