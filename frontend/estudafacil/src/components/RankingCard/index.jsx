import * as S from "./styles";

const RankingCard = ({ background, image, name, place, points }) => {
  return (
    <S.rankingDiv background={background}>
      <div className="div-1">
        <img src={image} alt="" />
        <p>{name}</p>
        <img src={place} alt="" />
      </div>
      <div className="div-2">
        <p>{points}</p>
        <p>pontos</p>
      </div>
    </S.rankingDiv>
  );
};

export default RankingCard;
