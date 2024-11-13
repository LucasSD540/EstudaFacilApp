import MyConcursoCard from "../../components/MyConcursoCard";
import * as S from "./styles";

const MyConcurso = () => {
  return (
    <S.mainDiv className="container">
      <div className="concurso-title-div">
        <span>|</span>
        <p>MEUS CURSOS</p>
      </div>
      <div className="concursoCard-div">
        <MyConcursoCard />
        <MyConcursoCard />
        <MyConcursoCard />
        <MyConcursoCard />
      </div>
    </S.mainDiv>
  );
};

export default MyConcurso;
