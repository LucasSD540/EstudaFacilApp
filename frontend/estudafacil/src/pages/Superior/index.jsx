import Card from "../../components/Card";
import * as S from "./styles";

const Superior = () => {
  return (
    <S.mainDiv>
      <S.sectionDiv className="container">
        <h3>Planos Ensino Superior</h3>
        <div className="card-div">
          <Card
            planName="FREE"
            marginStyle="32px"
            studyLevelLink="/login"
            studyLevel="superior"
            plan="free"
          />
          <Card
            planName="PREMIUM"
            backgroundColor="#E67E22"
            shadowColor="0px 0px 15px 10px rgba(255, 165, 2, 0.6)"
            studyLevelLink="/login"
            studyLevel="superior"
            plan="premium"
          />
          <Card
            planName="PLUS"
            backgroundColor="#1ABC9C"
            marginStyle="32px"
            studyLevelLink="/login"
            studyLevel="superior"
            plan="plus"
          />
        </div>
      </S.sectionDiv>
    </S.mainDiv>
  );
};

export default Superior;
