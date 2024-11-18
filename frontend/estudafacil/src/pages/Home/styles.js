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
    height: 240px;
  }

  .banner-img {
    width: 50%;
    height: 540px;
  }

  div {
    width: 50%;
    height: 540px;
    background-color: #b805ff;
    color: #fff;
  }

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

  @media (max-width: 768px) {
    div {
      height: 320px;
      width: 60%;
      padding: 0 12px;
    }

    .banner-img {
      height: 320px;
      width: 40%;
    }

    .text-title {
      font-size: 13px;
    }

    .text-subTitle {
      font-size: 10px;
      text-align: justify;
    }
  }
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
    border-radius: 39px;
    padding: 32px;
  }

  .plans-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-top: 192px;
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
    font-size: 13px;
    max-width: 140px;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
  }

  .btn-plan:hover {
    background-color: #bf1cff;
  }

  .plan-image {
    position: absolute;
    top: 0;
    max-width: 300px;
    width: 100%;
    height: 200px;
  }

  @media (max-width: 768px) {
    .plans-container {
      grid-template-columns: 1fr;
    }
  }
`;

export const doubtsContainer = styled.div`
  .doubt-section-title {
    font-size: 32px;
  }
`;
