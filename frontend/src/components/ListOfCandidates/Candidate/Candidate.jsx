import React from "react";
import { useNavigate } from "react-router-dom";

const Candidate = ({ id, name, lastName, profession, image }) => {
  const navigate = useNavigate();

  const handleCandidateClick = () => {
    navigate(`/candidate/${id}`);
  };

  const apiUrl = 'http://localhost:3001/api/candidates/images/';
  const imageUrl = `${apiUrl}${image}`;

  return (
    <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded" onClick={handleCandidateClick} style={{ maxWidth: "500px",  }}>
      <div className="box-avatar">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="box-bio">
        <h2 className="bio-name">{name} {lastName}</h2>
        <p className="bio-position">{profession}</p>
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
