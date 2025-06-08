// components/CandidateList.tsx
import React, { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface'; // Import the Candidate interface

const CandidateList: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]); // Use the Candidate interface for state

  useEffect(() => {
    const fetchCandidates = async () => {
      const response = await fetch('https://api.example.com/candidates'); // Replace with your API endpoint
      const data = await response.json();
      setCandidates(data as Candidate[]); // Ensure the data matches the Candidate type
    };

    fetchCandidates();
  }, []);

  return (
    <div>
      <h1>Candidate List</h1>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            <img src={candidate.avatar} alt={`${candidate.name}'s avatar`} />
            <h2>{candidate.name}</h2>
            <p>Username: {candidate.username}</p>
            <p>Location: {candidate.location}</p>
            <p>Email: {candidate.email}</p>
            <p>Company: {candidate.company}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateList;