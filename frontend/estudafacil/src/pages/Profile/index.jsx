import score from "../../components/assets/images/score_bar.png";
import profile_big from "../../components/assets/images/profile_big.png";
import profile from "../../components/assets/images/profile_big.png";
import first_place from "../../components/assets/images/first_place.png";
import second_place from "../../components/assets/images/second_place.png";
import third_place from "../../components/assets/images/third_place.png";
import * as S from "./styles";
import RankingCard from "../../components/RankingCard";

const Profile = () => {
  return (
    <>
      <S.profileContainerDiv>
        <div className="container">
          <S.modulesDiv>
            <p className="div-title">Módulos concluídos</p>
            <div className="score_bar-div">
              <img src={score} alt="" />
              <p>56%</p>
            </div>
            <p className="div-subtitle">12 de 20 módulos</p>
          </S.modulesDiv>
          <S.profileDiv>
            <img src={profile_big} alt="" />
            <p className="profile_name">Luis Guilherme</p>
            <button className="edit-btn">Editar Perfil</button>
          </S.profileDiv>
          <S.activitiesDiv>
            <p className="div-title">Atividades concluídas</p>
            <div className="score_bar-div">
              <img src={score} alt="" />
              <p>56%</p>
            </div>
            <p className="div-subtitle">12 de 20 módulos</p>
          </S.activitiesDiv>
        </div>
      </S.profileContainerDiv>
      <S.RankingContainerDiv>
        <div className="container">
          <h4>Ranking</h4>
          <h5>Seu ultimo Ranking na Semana</h5>
          <div className="score_ranking-div">
            <p className="score_ranking-title">Ranking Semanal</p>
            <RankingCard
              name="Luís Guilherme"
              background="linear-gradient(45deg, #DBA81A, #F5BA18)"
              image={profile}
              place={first_place}
              points="267743"
            />
            <RankingCard
              name="Zé da Silva"
              background="linear-gradient(45deg, #9EADD1, #D3D9EA)"
              image={profile}
              place={second_place}
              points="248307"
            />
            <RankingCard
              name="Lucas Pereira"
              background="linear-gradient(45deg, #CC8E34, #FF5B15)"
              image={profile}
              place={third_place}
              points="234249"
            />
            <RankingCard
              name="Pedro Henrique"
              image={profile}
              points="196407"
            />
            <RankingCard
              name="Marcos da Silva"
              image={profile}
              points="189568"
            />
          </div>
        </div>
      </S.RankingContainerDiv>
    </>
  );
};

export default Profile;
