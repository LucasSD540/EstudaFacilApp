import { Link } from "react-router-dom";
import correct from "../../components/assets/images/correct.png";
import wrong from "../../components/assets/images/wrong.png";
import * as S from "./styles";

const Card = ({
  planName,
  backgroundColor,
  marginStyle,
  shadowColor,
  studyLevelLink,
  studyLevel,
  plan,
}) => {
  const getStudyLevel = () => {
    localStorage.setItem("studyLevel", studyLevel);
  };

  return (
    <S.planDiv
      backgroundColor={backgroundColor}
      marginStyle={marginStyle}
      shadowColor={shadowColor}
      plan={plan}
    >
      <div className="plan-name first">
        <p>{planName}</p>
      </div>
      <ul className="list free">
        <li className="list-item">
          <img src={correct} alt="" />
          <p>Quantidade limitada de questões</p>
        </li>
        <li className="list-item">
          <img src={correct} alt="" />
          <p>Anúncios</p>
        </li>
        <li className="list-item">
          <img src={wrong} alt="" />
          <p>Acesso às videoaulas</p>
        </li>
        <li className="list-item">
          <img src={wrong} alt="" />
          <p>Correção de redação por IA</p>
        </li>
        <li className="list-item">
          <img src={wrong} alt="" />
          <p>Correção de redação com professores</p>
        </li>
        <li className="list-item">
          <img src={wrong} alt="" />
          <p>Simulados</p>
        </li>
      </ul>
      <ul className="list premium">
        <li className="list-item">
          <img src={correct} alt="" />
          <p>Quantidade ilimitada de questões</p>
        </li>
        <li className="list-item">
          <img src={correct} alt="" />
          <p>Correção de redação por IA</p>
        </li>
        <li className="list-item">
          <img src={correct} alt="" />
          <p>Simulados</p>
        </li>
        <li className="list-item">
          <img src={wrong} alt="" />
          <p>Anúncios</p>
        </li>
        <li className="list-item">
          <img src={wrong} alt="" />
          <p>Acesso a VideoAulas</p>
        </li>
        <li className="list-item">
          <img src={wrong} alt="" />
          <p>Correção De Redação Com Professores</p>
        </li>
      </ul>
      <ul className="list plus">
        <li className="list-item">
          <img src={correct} alt="" />
          <p>Quantidade ilimitada de questões</p>
        </li>
        <li className="list-item">
          <img src={correct} alt="" />
          <p>Acesso a videoaulas</p>
        </li>
        <li className="list-item">
          <img src={correct} alt="" />
          <p>Correção de redação por IA</p>
        </li>
        <li className="list-item">
          <img src={correct} alt="" />
          <p>Simulados</p>
        </li>
        <li className="list-item">
          <img src={wrong} alt="" />
          <p>Anúncios</p>
        </li>
      </ul>
      <div className="plan-name second">
        <Link to={studyLevelLink} onClick={() => getStudyLevel()}>
          INSCREVA-SE
        </Link>
      </div>
    </S.planDiv>
  );
};

export default Card;
