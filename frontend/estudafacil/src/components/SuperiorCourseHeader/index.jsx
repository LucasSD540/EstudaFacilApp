import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Axios from "axios";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";
import menu from "../assets/images/menu.png";
import close from "../assets/images/close.png";
import * as S from "./styles";
import { useStudyLevel } from "../../contexts/StudyLevelContext";
import notification from "../assets/images/notification_icon.png";
import mail from "../assets/images/mail.png";

const SuperiorHeader = () => {
  const { removeStudyLevel } = useStudyLevel();
  const [menuDiv, setMenuDiv] = useState(false);
  const [data, setData] = useState("");
  const [popup, setPopup] = useState(false);
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://127.0.0.1:8000/api/user/me/", {
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
  }, [token]);

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
      <Link className="logoStyle" to="/superior-course">
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
          to="/superior-course"
        >
          Início
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link link-item" : "inactive-link link-item"
          }
          to="/superior"
        >
          Superior
        </NavLink>
      </nav>
      <div className="logoStyle" to="/login">
        <S.userDiv>
          <img
            src={mail}
            style={{ marginRight: "24px", height: "36px", cursor: "pointer" }}
            alt="Ícone de e-mail"
          />
          <img
            style={{ marginRight: "24px", height: "36px", cursor: "pointer" }}
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

export default SuperiorHeader;
