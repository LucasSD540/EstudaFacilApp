import { Link } from "react-router-dom";
import * as S from "./styles";

const Card = ({
  planName,
  backgroundColor,
  marginStyle,
  shadowColor,
  studyLevelLink,
  studyLevel,
}) => {
  const getStudyLevel = () => {
    localStorage.setItem("studyLevel", studyLevel);
  };

  return (
    <S.planDiv
      backgroundColor={backgroundColor}
      marginStyle={marginStyle}
      shadowColor={shadowColor}
    >
      <div className="plan-name first">
        <p>{planName}</p>
      </div>
      <div className="plan-name second">
        <Link to={studyLevelLink} onClick={() => getStudyLevel()}>
          INSCREVA-SE
        </Link>
      </div>
    </S.planDiv>
  );
};

export default Card;
