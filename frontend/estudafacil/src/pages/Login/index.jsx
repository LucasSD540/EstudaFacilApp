import { Link } from "react-router-dom";
import axios from "axios";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as S from "./styles";

const Login = () => {
  const handleLogin = () => {
    console.log("Enviado");
  };

  const handleSubmit = async (values) => {
    const { fullName, email, password, studyLevel } = values;

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/user/create/",
        {
          fullName,
          email,
          password,
          studyLevel,
        }
      );

      console.log("Resposta", response.data);
    } catch (error) {
      console.log(`Deu erro ${error}`);
    }
  };

  const validationSchemaLogin = Yup.object({
    email: Yup.string()
      .email("Digite um email válido")
      .required("Campo obrigatório"),
    password: Yup.string().required("Digite sua senha"),
  });

  const validationSchemaRegister = Yup.object({
    fullName: Yup.string().required("Campo obrigatório"),
    email: Yup.string()
      .email("Digite um email válido")
      .required("Campo obrigatório"),
    password: Yup.string().required("Senha obrigatória"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "As senhas não coincidem")
      .required("Confirmação de senha é obrigatória"),
  });

  return (
    <div className="container">
      <S.formDiv>
        <h3>Possui cadastro?</h3>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleLogin}
          validationSchema={validationSchemaLogin}
        >
          <Form>
            <div>
              <Field
                type="email"
                name="email"
                placeholder="E-mail"
                as={S.inputStyle}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div style={{ position: "relative", paddingBottom: "16px" }}>
              <Field
                type="password"
                name="password"
                placeholder="Senha"
                as={S.inputStyle}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <Link className="forgot-password" to={"/"}>
              Esqueceu sua senha?
            </Link>
            <button type="submit">Entrar</button>
          </Form>
        </Formik>
        <div className="or-div">
          <div className="line"></div>
          <p>ou</p>
          <div className="line"></div>
        </div>
        <h3>Cadastre-se</h3>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            studyLevel: "enem",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchemaRegister}
        >
          <Form>
            <div>
              <Field
                type="text"
                name="fullName"
                placeholder="Nome completo"
                as={S.inputStyle}
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <Field
                type="email"
                name="email"
                placeholder="E-mail"
                as={S.inputStyle}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <Field
                type="password"
                name="password"
                placeholder="Senha"
                as={S.inputStyle}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirmar senha"
                as={S.inputStyle}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error-message"
              />
            </div>
            <div className="radio-input-div">
              <div>
                <Field
                  className="radio-input"
                  type="radio"
                  value="enem"
                  name="studyLevel"
                />
                <label className="radio-label" htmlFor="enem">
                  Enem e Vestibular
                </label>
              </div>
              <div>
                <Field
                  className="radio-input"
                  type="radio"
                  value="superior"
                  name="studyLevel"
                />
                <label className="radio-label" htmlFor="superior">
                  Ensino superior
                </label>
              </div>
              <div>
                <Field
                  className="radio-input"
                  type="radio"
                  value="concurso"
                  name="studyLevel"
                />
                <label className="radio-label" htmlFor="concurso">
                  Concurso
                </label>
              </div>
            </div>
            <button type="submit">Cadastrar</button>
          </Form>
        </Formik>
      </S.formDiv>
    </div>
  );
};

export default Login;
