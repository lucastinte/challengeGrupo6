import React from "react";
import SearchInput from "./SearchInput.jsx/SearchInput";
const SearchWrap = ({ handleSearchResults }) => {
  return (
    <section className="search-wrap">
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
