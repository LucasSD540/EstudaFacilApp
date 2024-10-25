import * as S from "./styles";

const Card = ({ planName, backgroundColor, marginStyle, shadowColor }) => {
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
        <p>INSCREVA-SE</p>
      </div>
    </S.planDiv>
  );
};

export default Card;
