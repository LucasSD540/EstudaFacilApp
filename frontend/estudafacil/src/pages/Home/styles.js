import styled from "styled-components";

export const bannerContainer = styled.div`
  position: relative;
  display: flex;

  .graduating_person-img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    max-width: 600px;
    width: 100%;
    height: 480px;
  }

  div {
    width: 50%;
    height: 540px;
    background-color: #b805ff;
    color: #fff;

    .text-title {
      font-size: 36px;
      text-align: center;
      margin: 48px 0 24px 0;

      span {
        color: #dcdc28;
      }
    }

    .text-subTitle {
      font-size: 18px;
      text-align: center;
    }
  }
`;

export const bannerImg = styled.img`
  width: 50%;
  height: 540px;
`;

export const planSection = styled.div`
  margin: 64px 0;

  h3 {
    text-align: center;
    color: #b805ff;
    font-size: 32px;
    margin-bottom: 24px;
  }

  .plan-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 480px;
    max-width: 300px;
    width: 100%;
    box-shadow: 0px 0px 15px 10px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    padding: 32px;
  }

  .plans-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  h4 {
    color: #b805ff;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 24px;
  }

  li {
    list-style: none;
    text-align: justify;
    margin-bottom: 12px;
  }

  .btn-plan {
    position: absolute;
    bottom: 32px;
    background-color: #b805ff;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    max-width: 120px;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
  }

  .btn-plan:hover {
    background-color: #bf1cff;
  }

  .first-img {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 200px;
    max-width: 77.34px;
    width: 100%;
  }

  .second-img {
    position: absolute;
    bottom: 0;
    left: 8px;
    height: 200px;
    max-width: 77.34px;
    width: 100%;
  }

  .third-img {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 200px;
    max-width: 112.86px;
    width: 100%;
  }

  .correct-icon {
    max-width: 18px;
    width: 100%;
    height: 18px;
  }
`;
