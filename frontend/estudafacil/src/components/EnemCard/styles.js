import styled from "styled-components";

export const cardDiv = styled.div`
  margin-top: 48px;
  max-width: 300px;
  width: 100%;
  height: 420px;
  box-shadow: 1px 5px 5px 0px rgba(0, 0, 0, 0.3);
  border-radius: 42px;

  .card-detail-div {
    display: flex;
    flex-direction: column;
    padding: 32px;
  }

  .detail-div {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    img {
      height: 30px;
    }

    p {
      font-size: 16px;
    }
  }

  .title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 24px;
  }

  .card-img {
    width: 100%;
  }

  .card-btn {
    margin: 0 auto;
    width: 100%;
    margin-top: 8px;
    background-color: #6dcbff;
    color: #fff;
    border: none;
    border-radius: 25px;
    padding: 8px;
    font-weight: bold;
    cursor: pointer;
  }
`;
