import physics from "../assets/images/physics.png";
import test from "../assets/images/test.png";
import classroom from "../assets/images/classroom.png";
import * as S from "./styles";

const EnemCard = () => {
  return (
    <S.cardDiv>
      <img className="card-img" src={physics} alt="" />
      <div className="card-detail-div">
        <h4 className="title">Física</h4>
        <div className="detail-div">
          <img src={classroom} alt="" />
          <p>32 Aulas</p>
        </div>
        <div className="detail-div">
          <img src={test} alt="" />
          <p>20 Exercícios</p>
        </div>
        <button className="card-btn">Assistir às aulas</button>
      </div>
    </S.cardDiv>
  );
};

export default EnemCard;
