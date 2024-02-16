import React, { useState } from "react";
import { searchProfessions } from "../../../services/serviceApi";

const SearchInput = ({ handleSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const data = await searchProfessions(searchTerm);
      handleSearchResults(data.meta.profession);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="search">
      <label htmlFor="search">
        <i
          className="bi bi-search"
          style={{ fontSize: "1.5rem", color: "cornflowerblue", cursor: "pointer" }}
          onClick={handleSearch}
        ></i>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a profession..."
        />
      </label>
    </div>
  );
};

export default SearchInput;
