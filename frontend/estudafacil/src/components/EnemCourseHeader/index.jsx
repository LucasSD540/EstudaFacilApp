import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Axios from "axios";
import { useStudyLevel } from "../../contexts/StudyLevelContext";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";
import menu from "../assets/images/menu.png";
import close from "../assets/images/close.png";
import notification from "../assets/images/notification_icon.png";
import * as S from "./styles";

const EnemHeader = () => {
  const { removeStudyLevel } = useStudyLevel();
  const [menuDiv, setMenuDiv] = useState(false);
  const [data, setData] = useState("");
  const [popup, setPopup] = useState(false);
  const token = localStorage.getItem("jwtToken");
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`${apiUrl}/api/user/me/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token, apiUrl]);

  const getFirstTwoNames = (fullName) => {
    const nameParts = fullName.split(" ");
    const firstTwoNames = nameParts.slice(0, 2).join(" ");
    return firstTwoNames;
  };

  const openPopup = () => {
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    removeStudyLevel();
  };

  const handleMenu = () => {
    setMenuDiv(!menuDiv);
  };

  return (
    <S.headerContainer>
      <Link className="logoStyle" to="/enem-course">
        <S.logoDiv>
          <img src={logo} alt="Logo" />
          <p className="logo-text">
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
          to="/enem"
        >
          Enem
        </NavLink>
      </nav>
      <div className="logoStyle" to="/login">
        <S.userDiv>
          <img
            style={{ marginRight: "24px", height: "36px" }}
            src={notification}
            alt="Ícone de notificação"
          />
          <div className="user-info-div">
            <img src={profile} alt="Ícone de usuário" />
            <p>{data.fullName ? getFirstTwoNames(data.fullName) : ""}</p>
            {popup && (
              <div
                className="user-popup"
                onMouseEnter={openPopup}
                onMouseLeave={closePopup}
              >
                <Link className="btn-link" to="/profile">
                  Editar perfil
                </Link>
                <Link
                  className="btn-link"
                  onClick={() => handleLogout()}
                  to="/"
                >
                  Encerrar sessão
                </Link>
              </div>
            )}
            <div
              className="user-info-container"
              onMouseEnter={openPopup}
              onMouseLeave={closePopup}
            />
          </div>
        </S.userDiv>
      </div>
      <img className="menu" onClick={() => handleMenu()} src={menu} alt="" />
      {menuDiv && (
        <div className="responsive-menu">
          <img
            className="close-img"
            onClick={() => handleMenu()}
            src={close}
            alt=""
          />
          <NavLink
            onClick={() => handleMenu()}
            className={({ isActive }) =>
              isActive ? "active-link link-item" : "inactive-link link-item"
            }
            to="/enem-course"
          >
            Início
          </NavLink>
          <NavLink
            onClick={() => handleMenu()}
            className={({ isActive }) =>
              isActive ? "active-link link-item" : "inactive-link link-item"
            }
            to="/enem-course/course"
          >
            Meus cursos
          </NavLink>
          <NavLink
            onClick={() => handleMenu()}
            className={({ isActive }) =>
              isActive ? "active-link link-item" : "inactive-link link-item"
            }
            to="/profile"
          >
            Editar perfil
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link link-item" : "inactive-link link-item"
            }
            onClick={() => handleLogout()}
            to="/"
          >
            Encerrar sessão
          </NavLink>
        </div>
      )}
    </S.headerContainer>
  );
};

export default EnemHeader;
