import { useState, useEffect } from 'react';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    // Retrieve saved candidates from localStorage
    const candidates = localStorage.getItem('savedCandidates') 
      ? JSON.parse(localStorage.getItem('savedCandidates') as string) 
      : [];
    setSavedCandidates(candidates);
  }, []);

  interface Candidate {
    id: string;
    name: string;
    username: string;
  }

  const handleRemoveCandidate = (candidateToRemove: Candidate): void => {
    const updatedCandidates = savedCandidates.filter((candidate: Candidate) => candidate.id !== candidateToRemove.id);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  return (
    <>
      <h1>Potential Candidates</h1>
      {savedCandidates.length === 0 ? (
        <p>No candidates saved yet.</p>
      ) : (
        <ul>
          {savedCandidates.map(candidate => (
            <li key={candidate.id}>
              <p>Name: {candidate.name}</p>
              <p>Username: {candidate.username}</p>
              <button onClick={() => handleRemoveCandidate(candidate)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SavedCandidates;
