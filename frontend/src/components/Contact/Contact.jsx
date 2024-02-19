import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <div className="card-body text-center">
              <h5 className="card-title">Correo Electrónico</h5>
              <p className="card-text">digitalhouse@gmail.com</p>
              <h5 className="card-title mt-4">Ubicación</h5>
              <p className="card-text">Lavalle 231 - Buenos Aires - Argentina </p>
              <h5 className="card-title mt-4">Redes Sociales</h5>
              <div className="d-flex justify-content-center">
                <a href="https://www.facebook.com" className="btn btn-primary me-3" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://www.instagram.com" className="btn btn-primary me-3" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://twitter.com" className="btn btn-primary" target="_blank" rel="noreferrer">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
