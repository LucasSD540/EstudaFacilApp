import bank from "../assets/images/bank.png";
import test from "../assets/images/test.png";
import classroom from "../assets/images/classroom.png";
import * as S from "./styles";

const ConcursoCard = () => {
  return (
    <S.cardDiv>
      <img className="card-img" src={bank} alt="" />
      <div className="card-detail-div">
        <h4 className="title">Banco do Brasil</h4>
        <div className="detail-div">
          <img src={classroom} alt="" />
          <p>30 Aulas</p>
        </div>
        <div className="detail-div">
          <img src={test} alt="" />
          <p>15 Simulados</p>
        </div>
        <button className="card-btn">Mais detalhes</button>
      </div>
    </S.cardDiv>
  );
};

export default ConcursoCard;
