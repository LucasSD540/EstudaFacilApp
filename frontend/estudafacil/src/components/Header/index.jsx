import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";
import * as S from "./styles";

const Header = () => {
  return (
    <div className="container">
      <S.headerContainer>
        <Link className="logoStyle" to="/">
          <S.logoDiv>
            <img src={logo} alt="Logo" />
            <p>
              <span className="purple">Estuda</span>{" "}
              <span className="green">Facil</span>
            </p>
          </S.logoDiv>
        </Link>
        <nav>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link link-item" : "inactive-link link-item"
            }
            to="/"
          >
            Início
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link link-item" : "inactive-link link-item"
            }
            to="/about"
          >
            Sobre nós
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link link-item" : "inactive-link link-item"
            }
            to="/services"
          >
            Serviços
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link link-item" : "inactive-link link-item"
            }
            to="/social"
          >
            Redes Sociais
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link link-item" : "inactive-link link-item"
            }
            to="/plans"
          >
            Planos
          </NavLink>
        </nav>
        <Link className="logoStyle" to="/login">
          <S.loginDiv>
            <img src={profile} alt="Ícone de usuário" />
            <p>Entrar</p>
          </S.loginDiv>
        </Link>
      </S.headerContainer>
    </div>
  );
};

export default Header;
