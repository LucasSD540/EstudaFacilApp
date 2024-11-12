import styled from "styled-components";

export const rankingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-radius: 32px;
  background: ${(props) =>
    props.background || "linear-gradient(45deg, #239E69, #007F48)"};
  padding: 24px;
  margin-bottom: 32px;

  div {
    display: flex;
    align-items: center;
    font-size: 18px;
  }

  .div-1 {
    img {
      height: 30px;
    }

    p {
      color: #fff;
      margin: 0 16px;
    }
  }

  .div-2 {
    p {
      margin-left: 8px;
      color: #fff;
    }
  }
`;
