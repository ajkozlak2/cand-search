// CandidateSearch.tsx
import { useQuery } from '@apollo/client';
import { GET_CANDIDATES } from '../graphql/queries'; // Adjust the import based on your file structure
import { Candidate } from '../type'; // Adjust the import path based on your project structure

// Define the shape of the data returned by the GET_CANDIDATES query
interface CandidatesData {
  candidates: Candidate[];
}

function CandidateSearch() {
  // Use the useQuery hook to fetch candidates
  const { loading, error, data } = useQuery<CandidatesData>(GET_CANDIDATES); // Specify the type for data

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data?.candidates.map((candidate) => ( // Optional chaining to handle undefined data
        <div key={candidate.id}>
          <h3>{candidate.name}</h3>
          {/* Render other candidate details, e.g., location, email, etc. */}
          {candidate.location && <p>Location: {candidate.location}</p>}
          {candidate.email && <p>Email: {candidate.email}</p>}
          {candidate.html_url && <a href={candidate.html_url}>Profile Link</a>}
          {candidate.company && <p>Company: {candidate.company}</p>}
        </div>
      ))}
    </div>
  );
}

export default CandidateSearch;