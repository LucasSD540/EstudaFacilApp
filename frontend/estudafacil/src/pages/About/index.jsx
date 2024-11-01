import about from "../../components/assets/images/about.png";
import book from "../../components/assets/images/book.png";
import brain from "../../components/assets/images/brain.png";
import heart from "../../components/assets/images/heart.png";
import * as S from "./styles";

const About = () => {
  return (
    <S.aboutSection>
      <S.contentContainer>
        <img src={about} alt="Imagem de mulher estudando" />
        <div className="text-div">
          <div className="text-div-item">
            <img className="book-image" src={book} alt="Livro" />
            <h4>Um livro bonito</h4>
            <p>
              Nós temos professores e Alunos talentosos e uma comunidade que
              sempre irao te ajudar!
            </p>
          </div>
          <div className="text-div-item">
            <img className="book-image" src={brain} alt="Cérebro" />
            <h4>Cérebro</h4>
            <p>Nós temos varias ferramentas nunca antes vistas!</p>
          </div>
          <div className="text-div-item">
            <img className="book-image" src={heart} alt="Coração" />
            <h4>Uma Empresa de feiosos :)</h4>
            <p>Uma Empresa formada por universitarios nada talentosos</p>
          </div>
        </div>
      </S.contentContainer>
    </S.aboutSection>
  );
};

export default About;
