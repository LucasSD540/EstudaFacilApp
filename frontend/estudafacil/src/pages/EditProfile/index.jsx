import { useEffect, useState } from "react";
import axios from "axios";
import profile from "../../components/assets/images/profile_big.png";
import * as S from "./styles";

const EditProfile = () => {
  const [option, setOption] = useState(false);
  const [data, setData] = useState("");
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lucassd770.pythonanywhere.com/api/user/me/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (token) {
      fetchData();
    }
  }, [token]);

  const handleOptionTrue = () => {
    setOption(true);
  };

  const handleOptionFalse = () => {
    setOption(false);
  };

  return (
    <S.mainDiv>
      <S.firstContainerDiv>
        <div className="secondary-div">
          <img src={profile} alt="" />
          <p>{data.fullName}</p>
          <button className="change-profile-photo">
            Alterar foto de perfil
          </button>
        </div>
      </S.firstContainerDiv>
      <S.secondContainerDiv>
        {option ? (
          <>
            <div className="first-secondary-div option">
              <div className="config-options">
                <span
                  className={option ? "" : "bold"}
                  onClick={() => handleOptionFalse()}
                >
                  Cursos e Pagamentos
                </span>
                <p>/</p>
                <span
                  className={option ? "bold" : ""}
                  onClick={() => handleOptionTrue()}
                >
                  Opções Gerais
                </span>
              </div>
              <div className="center-div">
                <h5>Alterar E-mail</h5>
                <select className="select-option" type="text" />
                <button className="update-btn">Atualizar E-mail</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="first-secondary-div">
              <div className="config-options">
                <span
                  className={option ? "" : "bold"}
                  onClick={() => handleOptionFalse()}
                >
                  Cursos e Pagamentos
                </span>
                <p>/</p>
                <span
                  className={option ? "bold" : ""}
                  onClick={() => handleOptionTrue()}
                >
                  Opções Gerais
                </span>
              </div>
              <div className="center-div">
                <h5>Alterar Curso</h5>
                <select className="select-option" type="text" />
                <button className="update-btn">Atualizar Curso</button>
              </div>
            </div>
            <div className="second-secondary-div">
              <div className="center-div">
                <h5>Alterar Forma de Pagamento</h5>
                <select className="select-option" type="text" />
                <button className="update-btn">Atualizar Pagamento</button>
              </div>
            </div>
          </>
        )}
      </S.secondContainerDiv>
    </S.mainDiv>
  );
};

export default EditProfile;
