import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import insta from "../assets/images/insta_icon.png";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.footerDiv>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Ícone da logo" />
        </Link>
        <div className="links-div">
          <Link className="link-item" to="/sobre">
            Sobre
          </Link>
          <Link className="link-item" to="/contato">
            Contate-nos
          </Link>
          <Link className="link-item" to="/trabalhe">
            Trabalhe conosco
          </Link>
          <Link className="link-item" to="/termos">
            Termos de uso
          </Link>
        </div>
        <Link to="https://www.instagram.com/estuda.facilapp/" target="_blank">
          <img src={insta} alt="Ícone do instagram" />
        </Link>
      </div>
    </S.footerDiv>
  );
};

export default Footer;
