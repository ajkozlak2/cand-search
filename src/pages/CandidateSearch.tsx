import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { SEARCH_CANDIDATES, SAVE_CANDIDATE } from '../graphql/queries'; // Ensure this path is correct

const CandidateSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // Removed unused candidates state
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);

  const { loading, error, data } = useQuery(SEARCH_CANDIDATES, {
    variables: { searchTerm },
    skip: !searchTerm, // Skip the query if searchTerm is empty
  });

  const [saveCandidate] = useMutation(SAVE_CANDIDATE);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setCurrentCandidateIndex(0); // Reset index when searching
    // The useQuery hook will automatically trigger with the new searchTerm
  };

  const handleSaveCandidate = async (candidate: { name: string; username: string }) => {
    try {
      await saveCandidate({ variables: { candidate } });
      // Optionally handle success (e.g., show a notification)
    } catch (err) {
      console.error(err);
    }
  };

  const handleNextCandidate = () => {
    if (currentCandidateIndex < data.candidates.length - 1) {
      setCurrentCandidateIndex(currentCandidateIndex + 1);
    } else {
      // Handle no more candidates
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
          <h2>Candidate Details</h2>
          <p>Name: {data.candidates[currentCandidateIndex].name}</p>
          <p>Username: {data.candidates[currentCandidateIndex].username}</p>
          <button onClick={() => handleSaveCandidate(data.candidates[currentCandidateIndex])}>Save</button>
          <button onClick={handleNextCandidate}>Next</button>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;