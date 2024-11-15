import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import menu from "../assets/images/menu.png";
import profile from "../assets/images/profile.png";
import close from "../assets/images/close.png";
import * as S from "./styles";
import { useStudyLevel } from "../../contexts/StudyLevelContext";
import EnemHeader from "../EnemCourseHeader";
import SuperiorHeader from "../SuperiorCourseHeader";
import ConcursoHeader from "../ConcursoCourseHeader";
import { useState } from "react";

const Header = () => {
  const { studyLevel } = useStudyLevel();
  const [menuDiv, setMenuDiv] = useState(false);

  const handleMenu = () => {
    setMenuDiv(!menuDiv);
  };

  return (
    <div className="container">
      {studyLevel === "enem" && <EnemHeader />}
      {studyLevel === "superior" && <SuperiorHeader />}
      {studyLevel === "concurso" && <ConcursoHeader />}
      {!studyLevel && (
        <S.headerContainer>
          <Link className="logoStyle" to="/">
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
              to="/"
            >
              Início
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link link-item" : "inactive-link link-item"
              }
              to="/enem"
            >
              Enem e Vestibular
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link link-item" : "inactive-link link-item"
              }
              to="/superior"
            >
              Ensino Superior
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link link-item" : "inactive-link link-item"
              }
              to="/concurso"
            >
              Concurso
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link link-item" : "inactive-link link-item"
              }
              to="/sobre"
            >
              Sobre
            </NavLink>
          </nav>
          <Link className="logoStyle" to="/login">
            <S.loginDiv className="login">
              <img src={profile} alt="Ícone de usuário" />
              <p>Entrar</p>
            </S.loginDiv>
          </Link>
          <img
            className="menu"
            onClick={() => handleMenu()}
            src={menu}
            alt=""
          />
          {menuDiv && (
            <div className="responsive-menu">
              <img
                onClick={() => handleMenu()}
                className="close-img"
                src={close}
                alt=""
              />
              <NavLink
                onClick={() => handleMenu()}
                className={({ isActive }) =>
                  isActive ? "active-link link-item" : "inactive-link link-item"
                }
                to="/"
              >
                Início
              </NavLink>
              <NavLink
                onClick={() => handleMenu()}
                className={({ isActive }) =>
                  isActive ? "active-link link-item" : "inactive-link link-item"
                }
                to="/enem"
              >
                Enem e Vestibular
              </NavLink>
              <NavLink
                onClick={() => handleMenu()}
                className={({ isActive }) =>
                  isActive ? "active-link link-item" : "inactive-link link-item"
                }
                to="/superior"
              >
                Ensino Superior
              </NavLink>
              <NavLink
                onClick={() => handleMenu()}
                className={({ isActive }) =>
                  isActive ? "active-link link-item" : "inactive-link link-item"
                }
                to="/concurso"
              >
                Concurso
              </NavLink>
              <NavLink
                onClick={() => handleMenu()}
                className={({ isActive }) =>
                  isActive ? "active-link link-item" : "inactive-link link-item"
                }
                to="/sobre"
              >
                Sobre
              </NavLink>
              <Link
                onClick={() => handleMenu()}
                className="logoStyle"
                to="/login"
              >
                <S.loginDiv className="loginResponsive">
                  <img src={profile} alt="Ícone de usuário" />
                  <p>Entrar</p>
                </S.loginDiv>
              </Link>
            </div>
          )}
        </S.headerContainer>
      )}
    </div>
  );
};

export default Header;
