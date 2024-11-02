import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import * as S from "./styles";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [isInputError, setIsInputError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);

  const handleLogin = async (values, { resetForm }) => {
    const { email, password } = values;

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/user/token/",
        {
          email,
          password,
        }
      );

      const token = response.data.access;

      if (token) {
        localStorage.setItem("jwtToken", token);

        const userResponse = await axios.get(
          "http://127.0.0.1:8000/api/user/me/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { study_level } = userResponse.data;

        if (study_level === "enem") {
          navigate("/enem-course");
        } else if (study_level === "superior") {
          navigate("/superior-course");
        } else if (study_level === "concurso") {
          navigate("/concurso-course");
        } else {
          Swal.fire({
            icon: "warning",
            title: "Aviso",
            text: "Nível de estudo desconhecido",
          });
        }
      }

      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setIsInputError(true);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `E-mail ou senha incorretos`,
        });
        resetForm();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Erro ao fazer login: ${error.message}`,
        });
        resetForm();
      }
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    const { fullName, email, password, study_level } = values;

    try {
      await axios.post("http://127.0.0.1:8000/api/user/create/", {
        fullName,
        email,
        password,
        study_level,
      });

      Swal.fire({
        title: "Sucesso!",
        text: "Usuário cadastrado com sucesso.",
        icon: "success",
        confirmButtonText: "OK",
      });
      resetForm();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        if (error.response.data.email) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Já existe um usuário cadastrado com esse e-mail!",
          });
          setIsEmailError(true);
          resetForm();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Erro ao fazer cadastro: ${error.message}`,
          });
          resetForm();
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Erro ao fazer cadastro: ${error.message}`,
        });
        resetForm();
      }
    }
  };

  const validationSchemaLogin = Yup.object({
    email: Yup.string()
      .email("Digite um email válido")
      .required("Campo obrigatório"),
    password: Yup.string().required("Digite sua senha"),
  });

  const validationSchemaRegister = Yup.object({
    fullName: Yup.string()
      .required("Campo obrigatório")
      .test("is-full-name", "O nome completo deve estar completo", (value) => {
        return value && value.split(" ").length >= 2;
      }),
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
                className={isInputError ? "inputError" : ""}
                autoComplete="off"
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
                className={isInputError ? "inputError" : ""}
                autoComplete="new-password"
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
                autoComplete="off"
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
                autoComplete="off"
                className={isEmailError ? "inputError" : ""}
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
                autoComplete="new-password"
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
                autoComplete="new-password"
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
                  name="study_level"
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
                  name="study_level"
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
                  name="study_level"
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
