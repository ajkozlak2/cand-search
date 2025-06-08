// interfaces/Candidate.interface.ts

// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    id: string;          // Unique identifier for the candidate
    name: string;        // Full name of the candidate
    username: string;    // GitHub username or similar
    location: string;    // Location of the candidate
    avatar: string;      // URL to the candidate's avatar image
    email: string;       // Email address of the candidate
    company: string;     // Company where the candidate works
  }
