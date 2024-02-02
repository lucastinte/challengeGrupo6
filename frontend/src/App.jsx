import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SearchWrap from "./components/SearchWrap/SearchWrap";
import Menu from "./components/Menu/Menu";
import Presale from "./components/Presale/Presale";
import ListOfCandidates from "./components/ListOfCandidates/ListOfCandidates";
import ListOfProfesions from "./components/ListOfProfesions/ListOfProfesions";
function App() {
  return (
    <div className="dashboard">
      <SearchWrap />
      <Menu />
      <main className="content-wrap">
        <Presale />
        <ListOfCandidates />
        <ListOfProfesions />
      </main>
    </div>
  );
}

export default App;
