import styled from "styled-components";

export const enemDiv = styled.div`
  .swiper {
    width: 100%;
    height: 600px;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
  }

  .swiper-slide img {
    max-width: 100%;
    object-fit: contain;
  }

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

  .enem-title-div {
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

  @media (max-width: 768px) {
    .swiper {
      height: 220px;
    }

    .card-div {
      grid-template-columns: 1fr;
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
