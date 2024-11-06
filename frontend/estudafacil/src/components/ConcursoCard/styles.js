import styled from "styled-components";

export const cardDiv = styled.div`
  margin-top: 48px;
  max-width: 300px;
  width: 100%;
  height: 360px;
  box-shadow: 1px 5px 5px 0px rgba(0, 0, 0, 0.3);
  border-radius: 15px;

  .card-detail-div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 12px;
  }

  .detail-div {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    img {
      height: 24px;
    }

    p {
      font-size: 14px;
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
    width: 80%;
    margin-top: 24px;
    background-color: #6dcbff;
    color: #fff;
    border: none;
    border-radius: 25px;
    padding: 8px;
    font-weight: bold;
  }
`;
