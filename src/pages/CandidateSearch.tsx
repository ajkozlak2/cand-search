import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { SEARCH_CANDIDATES, SAVE_CANDIDATE } from '../graphql/queries'; // Ensure this path is correct
import { Candidate } from '../interfaces/Candidate.interface'; // Import the Candidate interface

const CandidateSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { loading, error, data } = useQuery(SEARCH_CANDIDATES, {
    variables: { searchTerm },
    skip: !searchTerm, // Skip the query if searchTerm is empty
  });

  const [saveCandidate] = useMutation(SAVE_CANDIDATE);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // The useQuery hook will automatically trigger with the new searchTerm
  };

  const handleSaveCandidate = async (candidate: Candidate) => {
    try {
      await saveCandidate({ variables: { candidate } });
      // Optionally handle success (e.g., show a notification)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for candidates..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.candidates.length > 0 && (
        <div>
          <h2>Candidate List</h2>
          <ul>
            {data.candidates.map((candidate: Candidate) => (
              <li key={candidate.id}>
                <p>Name: {candidate.name}</p>
                <p>Username: {candidate.username}</p>
                <button onClick={() => handleSaveCandidate(candidate)}>Save</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;