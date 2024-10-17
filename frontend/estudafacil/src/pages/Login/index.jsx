import * as S from "./styles";

const Login = () => {
  return (
    <div className="container">
      <S.formDiv>
        <h3>Possui cadastro?</h3>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Senha" />
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
        <button>Cadastrar</button>
      </S.formDiv>
    </div>
  );
};

export default Login;
