import React from 'react';
import Candidate from '../ListOfCandidates/Candidate/Candidate';

const ResultSearch = ({ searchResults }) => {
    return (
      <div className="result-search">
        {searchResults.map((result, index) => (
          <div key={index}>
            <div>{result.name}</div>
            {result.applicants.map((applicant, index) => (
              <Candidate
                key={index}
                nombre={applicant.name}
                profesion={result.name} // Usamos result.name ya que parece ser la profesión del candidato
                imagen={applicant.image}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };

export default ResultSearch;
