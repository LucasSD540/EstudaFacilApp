import about from "../../components/assets/images/about.png";
import book from "../../components/assets/images/book.png";
import brain from "../../components/assets/images/brain.png";
import heart from "../../components/assets/images/heart.png";
import * as S from "./styles";

const About = () => {
  return (
    <S.main>
      <S.aboutSection className="about">
        <S.contentContainer className="content">
          <img src={about} alt="Imagem de mulher estudando" />
          <div className="text-div">
            <div className="text-div-item">
              <img className="icon-image" src={book} alt="Livro" />
              <div>
                <h4>Conhecimento ao Alcance de Todos</h4>
                <p className="description-text">
                  Nossa plataforma oferece materiais de estudo completos,
                  elaborados por professores e estudantes talentosos. Aqui, o
                  aprendizado é acessível e feito para te ajudar a conquistar
                  seus objetivos.
                </p>
              </div>
            </div>
            <div className="text-div-item">
              <img className="icon-image" src={brain} alt="Cérebro" />
              <div>
                <h4>Tecnologia e Inovação</h4>
                <p className="description-text">
                  Utilizamos ferramentas inovadoras e interativas que tornam o
                  aprendizado mais dinâmico e eficaz. Com nossa plataforma, você
                  aprende de forma inteligente e personalizada.
                </p>
              </div>
            </div>
            <div className="text-div-item">
              <img className="icon-image" src={heart} alt="Coração" />
              <div>
                <h4>Uma Comunidade para Apoiar Você</h4>
                <p className="description-text">
                  Somos uma comunidade formada por pessoas que acreditam na
                  educação como meio de transformação. Aqui, você encontra apoio
                  e motivação para superar qualquer desafio.
                </p>
              </div>
            </div>
          </div>
        </S.contentContainer>
      </S.aboutSection>
    </S.main>
  );
};

export default About;
