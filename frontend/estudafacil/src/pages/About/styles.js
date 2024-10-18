import styled from "styled-components";

export const aboutSection = styled.div`
  margin: 64px 0;

  h3 {
    text-align: center;
    color: #b805ff;
    font-size: 32px;
    margin-bottom: 24px;
  }
`;

export const contentContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    max-width: 440px;
    width: 100%;
    height: 400px;
  }

  p {
    max-width: 400px;
    width: 100%;
    font-size: 18px;
    line-height: 24px;
  }
`;
