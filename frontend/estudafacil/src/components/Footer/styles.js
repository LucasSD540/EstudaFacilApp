import styled from "styled-components";

export const footerDiv = styled.div`
  width: 100%;
  border-top: 1px solid #000;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    height: 40px;
  }

  .links-div {
    .link-item {
      color: #000;
      text-decoration: none;
      margin-right: 32px;
    }

    .link-item:hover {
      text-decoration: underline;
    }
  }
`;
