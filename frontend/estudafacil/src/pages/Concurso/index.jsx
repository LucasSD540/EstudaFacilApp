import Card from "../../components/Card";
import * as S from "./styles";

const Concurso = () => {
  return (
    <S.mainDiv>
      <S.sectionDiv className="container">
        <h3>Concurso</h3>
        <div className="card-div">
          <Card
            planName="FREE"
            marginStyle="32px"
            studyLevelLink="/login"
            studyLevel="concurso"
          />
          <Card
            planName="PREMIUM"
            backgroundColor="#E67E22"
            shadowColor="0px 0px 15px 10px rgba(255, 165, 2, 0.6)"
            studyLevelLink="/login"
            studyLevel="concurso"
          />
          <Card
            planName="PLUS"
            backgroundColor="#1ABC9C"
            marginStyle="32px"
            studyLevelLink="/login"
            studyLevel="concurso"
          />
        </div>
      </S.sectionDiv>
    </S.mainDiv>
  );
};

export default Concurso;
