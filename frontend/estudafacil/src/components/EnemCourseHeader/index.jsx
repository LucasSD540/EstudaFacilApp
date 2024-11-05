import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";
import * as S from "../Header/styles";

const EnemHeader = () => {
  return (
    <S.headerContainer>
      <Link className="logoStyle" to="/enem-course">
        <S.logoDiv>
          <img src={logo} alt="Logo" />
          <p>
            <span className="purple">Estuda</span>{" "}
            <span className="green">Fácil</span>
          </p>
        </S.logoDiv>
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link link-item" : "inactive-link link-item"
          }
          to="/enem-course"
        >
          Início
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link link-item" : "inactive-link link-item"
          }
          to="/enem-course"
        >
          Enem
        </NavLink>
      </nav>
      <Link className="logoStyle" to="/login">
        <S.loginDiv>
          <img src={profile} alt="Ícone de usuário" />
          <p>Entrar</p>
        </S.loginDiv>
      </Link>
    </S.headerContainer>
  );
};

export default EnemHeader;
