import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <header className="menu-wrap">
      <figure className="user">
      <Link to="/" >
        <div className="user-avatar">
          <img src="./img/logo-dh.png" alt="Logo Digital House" />
        </div>
      </Link>
        <figcaption>Digital House</figcaption>
      </figure>
      <nav>
        <section className="menu">
          <h3>Opciones</h3>
          <ul>
            <li>
              <Link to="/presale">
                <i
                  className="bi bi-building"
                  style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                ></i>
                - Empresas
              </Link>
            </li>
            <li>
              <Link to="/aspirantes">
                <i
                  className="bi bi-person"
                  style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                ></i>
                - Aspirantes
              </Link>
            </li>
            <li>
              <Link to="/profesiones">
                <i className="bi bi-list-check"></i>- Profesiones
              </Link>
            </li>
            <li>
              <a href="#">
                <i
                  className="bi bi-person-vcard"
                  style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                ></i>
                - Postulate aquí
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-chat-left-text"></i>- Contacto
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Menu;
