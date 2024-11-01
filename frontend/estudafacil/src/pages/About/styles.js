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
  display: grid;
  grid-template-columns: 1fr 1fr;

  img {
    width: 100%;
  }

  .book-image {
    max-width: 72px;
    height: 48px;
  }

  .text-div {
    padding: 48px 48px 0 32px;
  }

  .text-div-item {
    margin-bottom: 48px;
  }
`;
