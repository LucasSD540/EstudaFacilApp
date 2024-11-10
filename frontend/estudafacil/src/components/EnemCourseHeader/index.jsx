import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Axios from "axios";
import { useStudyLevel } from "../../contexts/StudyLevelContext";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";
import notification from "../assets/images/notification_icon.png";
import * as S from "./styles";

const EnemHeader = () => {
  const { removeStudyLevel } = useStudyLevel();
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
    </S.headerContainer>
  );
};

export default EnemHeader;