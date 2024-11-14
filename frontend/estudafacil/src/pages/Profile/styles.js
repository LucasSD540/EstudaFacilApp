import styled from "styled-components";

export const profileContainerDiv = styled.div`
  border-top: 1px solid #4f0f7a;
  border-bottom: 1px solid #4f0f7a;

  .container {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    .modules {
      display: none;
    }

    .profile {
      margin: 0 auto;
    }

    .activities {
      display: none;
    }
  }
`;

export const modulesDiv = styled.div`
  margin-top: 64px;
  max-width: 250px;

  .div-title {
    font-weight: bold;
    text-align: center;
    margin-bottom: 24px;
  }

  .div-subtitle {
    text-align: center;
  }

  img {
    width: 80%;
    margin: 8px 8px 8px 0;
  }

  .score_bar-div {
    display: flex;
    align-items: center;
  }
`;

export const profileDiv = styled.div`
  img {
    height: 180px;
    margin-top: 32px;
  }

  .profile_name {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin: 32px 0 16px 0;
  }

  .edit-btn {
    height: 40px;
    width: 100%;
    border: none;
    border-radius: 40px;
    background: linear-gradient(45deg, #af03ff, #9342c1);
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 32px;
    cursor: pointer;
  }
`;

export const activitiesDiv = styled.div`
  margin-top: 64px;
  max-width: 250px;

  .div-title {
    font-weight: bold;
    text-align: center;
    margin-bottom: 24px;
  }

  .div-subtitle {
    text-align: center;
  }

  img {
    width: 80%;
    margin: 8px 8px 8px 0;
  }

  .score_bar-div {
    display: flex;
    align-items: center;
  }
`;

export const RankingContainerDiv = styled.div`
  text-align: center;
  margin: 48px 0;

  h4 {
    font-size: 28px;
  }

  h5 {
    font-size: 20px;
    color: #6b2897;
    margin: 8px 0 16px 0;
  }

  .score_ranking-div {
    padding: 32px;
    border: 1px solid #963bc8;
    border-radius: 63px;
    width: 100%;

    .score_ranking-title {
      font-size: 20px;
      color: #6b2897;
      margin-bottom: 32px;
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    .score_ranking-div {
      padding: 8px;
    }
  }
`;
