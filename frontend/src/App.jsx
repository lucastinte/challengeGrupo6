import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SearchWrap from "./components/SearchWrap/SearchWrap";
import Menu from "./components/Menu/Menu";
import Presale from "./views/Presale";
import ListOfCandidates from "./views/ListOfCandidates"
import ListOfProfesions from "./views/ListOfProfesions";
import Index from "./views";
function App() {
  return (
    <div className="dashboard">
      <SearchWrap />
      <Menu />
      <main className="content-wrap">
      <Routes>
      <Route path="/"  element={<Index/>} />
        <Route path="/presale"  element={<Presale/>} />
        <Route path="/aspirantes" element={<ListOfCandidates/>} />
        <Route path="/profesiones" element={<ListOfProfesions/>} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
      </main>
    </div>
  );
}

export default App;
