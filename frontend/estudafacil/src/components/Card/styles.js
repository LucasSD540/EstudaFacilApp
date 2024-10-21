import styled from "styled-components";

export const planDiv = styled.div`
  position: relative;
  background-color: #8b6ccb;
  max-width: 380px;
  width: 100%;
  height: 640px;
  box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 32px;
`;

export const planInfoDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #7f5dc6;
  max-width: 380px;
  width: 100%;
  height: 260px;
  border-radius: 30px;
  box-shadow: 0px 8px 18px 0px rgba(0, 0, 0, 0.75);
  padding-top: 32px;

  h4 {
    text-align: center;
    color: #fff;
    font-size: 24px;
  }

  p {
    margin-top: 36px;
    text-align: center;
    color: #fff;
    font-size: 36px;
    font-weight: bold;
  }
`;
