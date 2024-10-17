import banner from "../../components/assets/images/banner.png";
import school from "../../components/assets/images/school_person.png";
import university from "../../components/assets/images/university_person.png";
import business from "../../components/assets/images/business_person.png";
import * as S from "./styles";

export const Home = () => {
  return (
    <div>
      <S.bannerImg src={banner} alt="Imagem do banner" />
      <div className="container">
        <S.planSection>
          <h3>Planos</h3>
          <div className="plans-container">
            <div className="plan-item">
              <h4>Enem e Vestibular</h4>
              <li>
                Acesso a correção de redação com corretores reais e com
                Inteligência artificial
              </li>
              <li>Acesso ilimitado às aulas gravadas e ao vivo</li>
              <li>Acesso aos simulados inteligentes</li>
              <button className="btn-plan">CONFIRA OS PLANOS</button>
              <img className="first-img" src={school} alt="Estudante" />
            </div>
            <div className="plan-item">
              <h4>Ensino Superior</h4>
              <li>Cursos que contam como horas complementares</li>
              <button className="btn-plan">CONFIRA OS PLANOS</button>
              <img className="second-img" src={university} alt="Estudante" />
            </div>
            <div className="plan-item">
              <h4>Concurso</h4>
              <li>
                Acesso a correção de redação com corretores reais e com
                Inteligência artificial
              </li>
              <li>Acesso ilimitado às aulas gravadas e ao vivo</li>
              <li>Acesso aos simulados inteligentes</li>
              <button className="btn-plan">CONFIRA OS PLANOS</button>
              <img className="third-img" src={business} alt="Estudante" />
            </div>
          </div>
        </S.planSection>
      </div>
    </div>
  );
};

export default Home;
