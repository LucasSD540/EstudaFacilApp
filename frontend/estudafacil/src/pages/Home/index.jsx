import woman from "../../components/assets/images/woman.png";
import banner from "../../components/assets/images/banner.png";
import enem from "../../components/assets/images/enem_image.png";
import superior from "../../components/assets/images/superior_image.png";
import concurso from "../../components/assets/images/concurso_image.png";
import * as S from "./styles";

export const Home = () => {
  return (
    <div>
      <S.bannerContainer>
        <img
          className="graduating_person-img"
          src={woman}
          alt="Mulher segurando canudo"
        />
        <div>
          <h2 className="text-title">
            VÁ ATÉ O CAMINHO DO SUCESSO E DESCUBRA SEU <span>POTENCIAL</span>
          </h2>
          <p className="text-subTitle">
            Confira nossos Planos e libere seu potencial nos seus estudos!
          </p>
        </div>
        <S.bannerImg src={banner} alt="Imagem do banner" />
      </S.bannerContainer>
      <div className="container">
        <S.planSection>
          <h3>Planos</h3>
          <div className="plans-container">
            <div className="plan-item">
              <img src={enem} alt="" className="plan-image" />
              <h4>Enem e Vestibular</h4>
              <button className="btn-plan">Conheça os Planos</button>
            </div>
            <div className="plan-item">
              <img src={superior} alt="" className="plan-image" />
              <h4>Ensino Superior</h4>
              <button className="btn-plan">Conheça os Planos</button>
            </div>
            <div className="plan-item">
              <img src={concurso} alt="" className="plan-image" />
              <h4>Concurso</h4>
              <button className="btn-plan">Conheça os Planos</button>
            </div>
          </div>
        </S.planSection>
      </div>
    </div>
  );
};

export default Home;
