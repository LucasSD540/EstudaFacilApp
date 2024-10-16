import banner from "../assets/images/banner.png";
import school from "../assets/images/school_person.png";
import * as S from "./styles";

export const Main = () => {
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
              <img src={school} alt="Estudante" />
            </div>
            <div className="plan-item">
              <h4>Ensino Superior</h4>
              <li>Cursos que contam como horas complementares</li>
              <button className="btn-plan">CONFIRA OS PLANOS</button>
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
            </div>
          </div>
        </S.planSection>
      </div>
    </div>
  );
};

export default Main;
