import styled from "styled-components";

export const concursoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120px;
  border-radius: 15px;
  box-shadow: -1px 2px 5px 4px rgba(0, 0, 0, 0.3);
  padding: 24px;
  margin: 32px 0;

  .concurso-btn {
    font-size: 13px;
    font-weight: bold;
    background-color: #6e59eb;
    color: #fff;
    border: none;
    border-radius: 40px;
    height: 24px;
    max-width: 100px;
    width: 100%;
  }

  .companyName {
    font-size: 18px;
    font-weight: bold;
    margin: 0 16px;
  }

  .concursoLevel {
    font-size: 18px;
    color: #acacac;
  }

  .first-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d9d9d9;
    width: 100%;
    padding-bottom: 16px;

    img {
      height: 30px;
    }
  }

  .concursoInfo {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .second-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 8px;
  }

  .course-statistics {
    display: flex;
    align-items: center;
    color: #acacac;

    img {
      height: 15px;
      margin-right: 4px;
    }
  }

  .course-statistics-item {
    display: flex;
    align-items: center;
    margin-right: 8px;
  }

  .course-buttons {
    display: flex;

    button {
      padding: 6px;
      color: #fff;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      font-size: 13px;
      cursor: pointer;
    }
  }

  .btn-1 {
    background-color: #27dd4e;
    margin-right: 16px;
  }

  .btn-2 {
    background-color: #6e59eb;
  }

  @media (max-width: 768px) {
    .concurso-btn {
      font-size: 8px;
      max-width: 50px;
    }

    .companyName {
      font-size: 9px;
      margin: 0 8px;
    }

    .concursoLevel {
      font-size: 9px;
    }

    .first-div {
      padding-bottom: 8px;

      img {
        height: 24px;
      }
    }

    .course-statistics {
      font-size: 12px;

      img {
        height: 12px;
      }
    }

    .course-buttons {
      button {
        padding: 4px;
        border-radius: 5px;
        font-size: 12px;
      }
    }

    .btn-1 {
      margin-right: 8px;
    }
  }
`;
