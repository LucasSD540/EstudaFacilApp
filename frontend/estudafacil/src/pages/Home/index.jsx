import woman from "../../components/assets/images/woman.png";
import banner from "../../components/assets/images/banner.png";
import school from "../../components/assets/images/school_person.png";
import university from "../../components/assets/images/university_person.png";
import business from "../../components/assets/images/business_person.png";
import correct from "../../components/assets/images/correct_icon.png";
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
              <h4>Enem e Vestibular</h4>
              <li>
                <img
                  className="correct-icon"
                  src={correct}
                  alt="Ícone de certo"
                />
                Acesso a correção de redação com corretores reais e com
                Inteligência artificial
              </li>
              <li>
                {" "}
                <img
                  className="correct-icon"
                  src={correct}
                  alt="Ícone de certo"
                />
                Acesso ilimitado às aulas gravadas e ao vivo
              </li>
              <li>
                <img
                  className="correct-icon"
                  src={correct}
                  alt="Ícone de certo"
                />
                Acesso aos simulados inteligentes
              </li>
              <button className="btn-plan">Conheça o Plano</button>
              <img className="first-img" src={school} alt="Estudante" />
            </div>
            <div className="plan-item">
              <h4>Ensino Superior</h4>
              <li>
                <img
                  className="correct-icon"
                  src={correct}
                  alt="Ícone de certo"
                />
                Cursos que contam como horas complementares
              </li>
              <button className="btn-plan">Conheça o Plano</button>
              <img className="second-img" src={university} alt="Estudante" />
            </div>
            <div className="plan-item">
              <h4>Concurso</h4>
              <li>
                <img
                  className="correct-icon"
                  src={correct}
                  alt="Ícone de certo"
                />
                Acesso a correção de redação com corretores reais e com
                Inteligência artificial
              </li>
              <li>
                <img
                  className="correct-icon"
                  src={correct}
                  alt="Ícone de certo"
                />
                Acesso ilimitado às aulas gravadas e ao vivo
              </li>
              <li>
                <img
                  className="correct-icon"
                  src={correct}
                  alt="Ícone de certo"
                />
                Acesso aos simulados inteligentes
              </li>
              <button className="btn-plan">Conheça o Plano</button>
              <img className="third-img" src={business} alt="Estudante" />
            </div>
          </div>
        </S.planSection>
      </div>
    </div>
  );
};

export default Home;
