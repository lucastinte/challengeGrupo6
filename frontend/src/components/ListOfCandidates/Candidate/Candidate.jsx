import React from "react";

const Candidate = ({ nombre,apellido, profesion, imagen }) => {
  const apiUrl = 'http://localhost:3001/api/candidates/images/';
  const imageUrl = `${apiUrl}${imagen}`;
  return (
    
    <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
      <div className="box-avatar">
        <img src={imageUrl} alt={nombre} />
      </div>
      <div className="box-bio">
        <h2 className="bio-name">{nombre} {apellido} </h2>
        <p className="bio-position">{profesion}</p>
      </div>
      <div className="box-actions">
        <button>
          <i className="bi bi-star"></i>
        </button>
        <button>
          <i className="bi bi-chat"></i>
        </button>
        <button>
          <i className="bi bi-envelope"></i>
        </button>
      </div>
    </div>
  );
};

export default Candidate;
