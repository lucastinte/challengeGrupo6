import React from "react";
import SearchInput from "./SearchInput.jsx/SearchInput";
import { Link } from "react-router-dom";
import { Dropdown, ButtonGroup  } from "react-bootstrap";

const SearchWrap = ({ handleSearchResults }) => {
  return (
    <section className="search-wrap">
      <Dropdown as={ButtonGroup} className="custom-dropdown d-lg-none">
      <Dropdown.Toggle id="dropdown-basic">
        <div className="navbar-toggler">
          <img src="./img/logo-dh.png" alt="Logo Digital House" className="logo-img" />
          <div className="navbar-toggler-icon">
          </div>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu className="bg-white"> 
      <ul className="list-unstyled"> {/* Lista desordenada sin estilos */}
      <li>
        <Link to="/presale">
          <i
            className="bi bi-building"
            style={{ fontSize: "1.2rem", color: "cornflowerblue", marginRight: "0.5rem" }}
          ></i>
          Empresas
        </Link>
      </li>
      <li>
        <Link to="/aspirantes">
          <i
            className="bi bi-person"
            style={{ fontSize: "1.2rem", color: "cornflowerblue", marginRight: "0.5rem" }}
          ></i>
          Aspirantes
        </Link>
      </li>
      <li>
        <Link to="/profesiones">
          <i className="bi bi-list-check" style={{ marginRight: "0.5rem" }}></i> Profesiones
        </Link>
      </li>
      <li>
        <Link to="/form">
          <i
            className="bi bi-person-vcard"
            style={{ fontSize: "1.2rem", color: "cornflowerblue", marginRight: "0.5rem" }}
          ></i>
          Postulate aquí
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <i className="bi bi-chat-left-text" style={{ marginRight: "0.5rem" }}></i> Contacto
        </Link>
      </li>
    </ul>
      </Dropdown.Menu>
    </Dropdown>
      <SearchInput handleSearchResults={handleSearchResults} />
      <div className="user-actions">
        <button>
          <a href="#">
            <i
              className="bi bi-person-add"
              style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
            ></i>
          </a>
        </button>
        <button>
          <a href="#">
            <i
              className="bi bi-person"
              style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
            ></i>
          </a>
        </button>
        <button>
          <a href="#">
            <i
              className="bi bi-box-arrow-right"
              style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
            ></i>
          </a>
        </button>
      </div>
    </section>
  );
};
export default SearchWrap;
