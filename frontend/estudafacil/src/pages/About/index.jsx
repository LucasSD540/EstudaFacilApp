import about from "../../components/assets/images/about_image.png";
import * as S from "./styles";

const About = () => {
  return (
    <S.aboutSection>
      <h3>Sobre Nós</h3>
      <div className="container">
        <S.contentContainer>
          <img src={about} alt="Imagem de mulher estudando" />
          <p>
            O Estuda Fácil é uma plataforma inovadora focada em oferecer uma
            experiência completa de estudo para alunos que buscam se preparar
            para o ENEM, vestibulares e concursos públicos. Nossa missão é
            integrar a tecnologia com a educação, oferecendo exercícios práticos
            e correção de redações, seja por IA ou corretores profissionais.
            Oferecemos planos de estudo gratuitos e pagos, garantindo
            acessibilidade e personalização para todos os perfis de estudantes.
            Além disso, contamos com parcerias com instituições de ensino para
            proporcionar uma educação de qualidade e acessível.
          </p>
        </S.contentContainer>
      </div>
    </S.aboutSection>
  );
};

export default About;
