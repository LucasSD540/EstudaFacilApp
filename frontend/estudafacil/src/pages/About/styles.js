import styled from "styled-components";

export const aboutSection = styled.div`
  padding-left: 48px;
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

  .icon-image {
    max-width: 72px;
    height: 64px;
    margin-right: 16px;
  }

  .text-div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 48px 48px 0 32px;
  }

  .description-text {
    text-align: justify;
  }

  .text-div-item {
    display: flex;
    margin-bottom: 48px;
  }
`;
