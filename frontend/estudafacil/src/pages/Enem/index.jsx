import Card from "../../components/Card";
import * as S from "./styles";

const Enem = () => {
  return (
    <S.mainDiv>
      <S.sectionDiv className="container">
        <h3>Planos Enem e Vestibular</h3>
        <div className="card-div">
          <Card />
          <Card />
        </div>
      </S.sectionDiv>
    </S.mainDiv>
  );
};

export default Enem;
