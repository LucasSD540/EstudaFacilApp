import { Link, NavLink } from "react-router-dom";
import Axios from "axios";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/profile.png";
import notification from "../assets/images/notification_icon.png";
import * as S from "../Header/styles";
import { useState, useEffect } from "react";

const ConcursoHeader = () => {
  const [data, setData] = useState("");

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

  return (
    <S.headerContainer>
      <Link className="logoStyle" to="/concurso-course">
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
          to="/concurso-course"
        >
          Início
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link link-item" : "inactive-link link-item"
          }
          to="/concurso-course-anyLink"
        >
          Meus concursos
        </NavLink>
      </nav>
      <Link className="logoStyle" to="/login">
        <S.loginDiv>
          <img
            style={{ marginRight: "24px", height: "36px" }}
            src={notification}
            alt="Ícone de notificação"
          />
          <img src={profile} alt="Ícone de usuário" />
          <p>{data.fullName ? getFirstTwoNames(data.fullName) : ""}</p>
        </S.loginDiv>
      </Link>
    </S.headerContainer>
  );
};

export default ConcursoHeader;
