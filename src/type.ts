export interface Candidate {
    id: string;          // Unique identifier for the candidate
    name: string;        // Name of the candidate
    location?: string;   // Location of the candidate (optional)
    email?: string;      // Email of the candidate (optional)
    html_url?: string;   // URL to the candidate's profile (optional)
    company?: string;    // Company of the candidate (optional)
    // Add any other fields that you need based on your GraphQL schema
  }