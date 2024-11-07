import styled from "styled-components";

export const logoDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;

  .purple {
    color: #8976fd;
  }

  .green {
    color: #25ef4a;
  }
`;

export const headerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .link-item {
    text-decoration: none;
    margin: 0 16px;
    color: #332c5c;
    position: relative;
    display: inline-block;
  }

  .link-item::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #8976fd;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  .link-item:hover::after {
    transform: scaleX(1);
  }

  .active-link {
    color: #8976fd;
  }

  .logoStyle {
    text-decoration: none;
  }
`;

export const userDiv = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 24px;
    margin-left: 16px;
    color: #8976fd;
  }

  .user-info-div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .user-popup {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    position: absolute;
    top: 100px;
    height: 100px;
    max-width: 130px;
    width: 100%;
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.3);
    border-radius: 19px;
    z-index: 10;
    padding: 24px 8px;

    .btn-link {
      text-align: center;
      text-decoration: none;
      width: 100%;
      border-radius: 15px;
      border: 1px solid #8976fd;
      color: #8976fd;
      background-color: #fff;
      font-size: 13px;
      cursor: pointer;
    }

    .btn-link:hover {
      border: 1px solid #42e164;
      color: #42e164;
    }
  }
`;
