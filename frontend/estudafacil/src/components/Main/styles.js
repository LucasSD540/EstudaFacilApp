import styled from "styled-components";

export const bannerImg = styled.img`
  width: 100%;
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
    font-size: 10px;
    max-width: 120px;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
  }

  .right-img {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 240px;
    max-width: 100px;
    width: 100%;
  }

  .left-img {
    position: absolute;
    bottom: 0;
    left: 8px;
    height: 240px;
    max-width: 80px;
    width: 100%;
  }
`;
