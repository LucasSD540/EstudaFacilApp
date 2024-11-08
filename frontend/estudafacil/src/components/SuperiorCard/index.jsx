import POO from "../../components/assets/images/POO.png";
import * as S from "./styles";

const SuperiorCard = () => {
  return (
    <S.cardDiv>
      <img className="card-img" src={POO} alt="" />
      <div className="card-detail-div">
        <h4 className="title">Programação Orientada a Objetos</h4>
        <div className="detail-div">
          <p>2024/2</p>
        </div>
      </div>
    </S.cardDiv>
  );
};

export default SuperiorCard;
