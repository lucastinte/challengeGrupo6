import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfesions, createApplicant } from '../../services/serviceApi';
const ApplicantForm = ({ handleSubmit }) => {
  const navigate = useNavigate();
  const [dni, setDni] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedinProfile, setLinkedinProfile] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [image, setImage] = useState("");
  const [professionId, setProfessionId] = useState('');
  const [genderId, setGenderId] = useState('');
  const [professions, setProfessions] = useState([]);
  useEffect(() => {
    fetchProfessions();
  }, []);

  const fetchProfessions = async () => {
    try {
      const data = await getProfesions();
      setProfessions(data.data.professions);
    } catch (error) {
      console.error('Error fetching professions:', error);
    }
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log('Imagen seleccionada:', image);
    const applicantData = {
      dni,
      name,
      lastName,
      email,
      phone,
      linkedinProfile,
      birthDate,
      image,
      professionId,
      genderId
    };
  
    try {
       await createApplicant(applicantData); 
       navigate('/');
    } catch (error) {
      console.error('Error creating applicant:', error.message);
    }
  };
  return (
    <div className="container mt-4" style={{ maxWidth: '250px' }}>
      <h2>Postularse</h2>
      <form onSubmit={handleSubmitForm} encType="multipart/form-data">
      <div className="mb-3">
          <label htmlFor="dni" className="form-label">DNI</label>
          <input type="text" className="form-control" id="dni" value={dni} onChange={(e) => setDni(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Apellido</label>
          <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono</label>
          <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="linkedinProfile" className="form-label">Perfil de LinkedIn</label>
          <input type="text" className="form-control" id="linkedinProfile" value={linkedinProfile} onChange={(e) => setLinkedinProfile(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="birthDate" className="form-label">Fecha de Nacimiento</label>
          <input type="date" className="form-control" id="birthDate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
        </div>
        
        <div className="mb-3">
          <label htmlFor="professionId" className="form-label">Profesión</label>
          <select
            className="form-select"
            id="professionId"
            value={professionId}
            onChange={(e) => setProfessionId(e.target.value)}
          >
            <option value="">Selecciona una profesión</option>
            {professions.map((profession) => (
              <option key={profession.id} value={profession.id}>{profession.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="genderId" className="form-label">Género</label>
          <select
            className="form-select"
            id="genderId"
            value={genderId}
            onChange={(e) => setGenderId(e.target.value)}
          >
            <option value="">Selecciona un género</option>
            <option value="1">Masculino</option>
            <option value="2">Femenino</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Imagen</label>
          <input type="file" className="form-control" id="image" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button type="submit" className="btn btn-primary">Crear aspirante</button>
      </form>
    </div>
  );
};

export default ApplicantForm;