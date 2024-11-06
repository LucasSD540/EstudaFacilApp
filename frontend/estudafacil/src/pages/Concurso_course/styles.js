import styled from "styled-components";

export const concursoDiv = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
  }

  .swiper-pagination-bullet {
    background-color: #7638a5;
  }

  .swiper-pagination-bullet-active {
    background-color: #af81d1;
  }

  .concurso-title-div {
    margin-top: 48px;
    color: #27dd4e;
    display: flex;
    align-items: center;

    span {
      margin-right: 8px;
      font-size: 40px;
      font-weight: bold;
    }

    p {
      font-size: 18px;
      font-weight: bold;
    }
  }
`;

export const cardDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-bottom: 48px;
`;
