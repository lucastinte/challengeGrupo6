import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SearchWrap from "./components/SearchWrap/SearchWrap";
import Menu from "./components/Menu/Menu";
import Presale from "./views/Presale";
import ListOfCandidates from "./views/ListOfCandidates"
import ListOfProfesions from "./views/ListOfProfesions";
import Index from "./views";
import ResultSearch from "./components/ResultSearch/ResultSearch";
import ApplicantForm from "./components/ApplicantForm/ApplicantForm";
import CardCandidate from "./components/CardCandidate/CardCandidate";
import Contact from "./components/Contact/Contact";
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearchResults = (results) => {
    setSearchResults(results);
    // Navegar a la vista de resultados al obtener resultados de búsqueda
    navigate("/resultados");
  };

  return (
    <div className="dashboard">
         <SearchWrap handleSearchResults={handleSearchResults} />
        <Menu />
      <main className="content-wrap">
      <Routes>
      <Route path="/"  element={<Index/>} />
        <Route path="/presale"  element={<Presale/>} />
        <Route path="/aspirantes" element={<ListOfCandidates/>} />
        <Route path="/profesiones" element={<ListOfProfesions/>} />
        <Route path="/form" element={<ApplicantForm/>} />
        <Route path="/resultados" element={<ResultSearch searchResults={searchResults} />} />
        <Route path="/candidate/:id" element={<CardCandidate />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
      </main>
    </div>
  );
}

export default App;
