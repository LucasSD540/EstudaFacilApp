import styled from "styled-components";

export const formDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 720px;
  max-width: 360px;
  width: 100%;
  box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin: 64px auto;
  padding: 32px;

  h3 {
    text-align: center;
    color: #8976fd;
  }

  button {
    margin-top: 16px;
    background: linear-gradient(45deg, #8976fd, #b805ff);
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
  }

  button:hover {
    background: linear-gradient(45deg, #b805ff, #8976fd);
  }

  .or-div {
    display: flex;
    align-items: center;
    margin: 24px 0;

    p {
      margin: 0 8px;
      color: #8976fd;
    }
  }

  .line {
    max-width: 130px;
    width: 100%;
    border-bottom: 1px solid #8976fd;
  }

  .forgot-password {
    font-size: 12px;
    text-decoration: none;
    color: #8976fd;
  }

  .forgot-password:hover {
    text-decoration: underline;
  }

  .radio-input {
    height: 12px;
  }

  .radio-label {
    font-size: 12px;
    margin-left: 12px;
  }

  .error-message {
    position: absolute;
    color: red;
    font-size: 12px;
  }

  .radio-input-div {
    margin-top: 24px;
  }

  .inputError {
    border: 1px solid red;
  }
`;

export const inputStyle = styled.input`
  width: 100%;
  padding-left: 16px;
  margin: 16px 0 8px 0;
  height: 30px;
  border-radius: 30px;
  border: 1px solid #8976fd;
  outline: none;
`;
