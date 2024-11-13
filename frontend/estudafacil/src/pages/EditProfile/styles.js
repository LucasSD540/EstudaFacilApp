import styled from "styled-components";

export const mainDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  border-top: 1px solid #4f0f7a;
  height: 80vh;
`;

export const firstContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #4f0f7a;

  .secondary-div {
    width: 40%;
    display: flex;
    flex-direction: column;
  }

  p {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 0 16px 0;
  }

  .change-profile-photo {
    height: 40px;
    width: 100%;
    border: none;
    border-radius: 40px;
    background: linear-gradient(45deg, #af03ff, #9342c1);
    color: #fff;
    font-weight: bold;
    font-size: 13px;
    margin-bottom: 32px;
    cursor: pointer;
  }
`;

export const secondContainerDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .center-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    margin: 0 auto;
  }

  .config-options {
    top: 8px;
    left: 8px;
    position: absolute;
    display: flex;
    color: #9887fd;

    span {
      cursor: pointer;
    }

    .bold {
      font-weight: bold;
    }
  }

  h5 {
    color: #9887fd;
    font-size: 24px;
    margin-top: 24px;
  }

  .select-option {
    max-width: 300px;
    width: 100%;
    height: 40px;
    border-radius: 15px;
    border: 1px solid #9887fd;
    margin: 24px 0;
  }

  .update-btn {
    width: 40%;
    height: 35px;
    font-weight: bold;
    border-radius: 40px;
    border: none;
    background: linear-gradient(45deg, #642ac8, #8a35f2);
    color: #fff;
    cursor: pointer;
  }

  .option {
    display: flex;
    align-items: center;
  }

  .first-secondary-div {
    height: 100%;
  }

  .second-secondary-div {
    height: 100%;
    border-top: 1px solid #4f0f7a;
  }
`;
