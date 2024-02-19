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
              key={applicant.id} // Usando el id como clave
              id={applicant.id} 
                name={applicant.name}
                lastName={applicant.lastName}
                profession={result.name} // Usamos result.name ya que parece ser la profesión del candidato
                image={applicant.image}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };

export default ResultSearch;
