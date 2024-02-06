//aqui importamos componentes
import Presale from "../components/Presale/Presale";
import ListOfCandidates from "../components/ListOfCandidates/ListOfCandidates";
import ListOfProfesions from "../components/ListOfProfesions/ListOfProfesions";

function Index() {
  return (
    <div>
      <Presale />
      <ListOfCandidates />
      <ListOfProfesions />
      </div>
  );
}

export default Index;