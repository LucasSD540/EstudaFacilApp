import { Link } from "react-router-dom";
import * as S from "./styles";

const Login = () => {
  return (
    <div className="container">
      <S.formDiv>
        <h3>Possui cadastro?</h3>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Senha" />
        <Link className="forgot-password" to={"/"}>
          Esqueceu sua senha?
        </Link>
        <button>Entrar</button>
        <div className="or-div">
          <div className="line"></div>
          <p>ou</p>
          <div className="line"></div>
        </div>
        <h3>Cadastre-se</h3>
        <input type="text" placeholder="Nome completo" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Senha" />
        <input type="text" placeholder="Confirmar senha" />
        <div className="radio-div">
          <div>
            <input
              className="radio-input"
              type="radio"
              id="enem"
              value="enem"
              name="study-level"
            />
            <label className="radio-label" htmlFor="enem">
              Enem e Vestibular
            </label>
          </div>
          <div>
            <input
              className="radio-input"
              type="radio"
              id="superior"
              value="superior"
              name="study-level"
            />
            <label className="radio-label" htmlFor="superior">
              Ensino superior
            </label>
          </div>
          <div>
            <input
              className="radio-input"
              type="radio"
              id="concurso"
              value="concurso"
              name="study-level"
            />
            <label className="radio-label" htmlFor="concurso">
              Concurso
            </label>
          </div>
        </div>
        <button>Cadastrar</button>
      </S.formDiv>
    </div>
  );
};

export default Login;
