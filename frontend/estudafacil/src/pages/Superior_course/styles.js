import styled from "styled-components";

export const supeiorDiv = styled.div`
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

  .swiper-slide {
    display: flex;
    align-items: center;
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
`;

export const cardDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-bottom: 48px;
`;

export const buttonsDiv = styled.div`
  margin: 64px 0;
  border-bottom: 1px solid #746d6d;

  button {
    background: transparent;
    border: none;
    font-size: 18px;
    color: #746d6d;
    margin: 0 16px 4px 0;
  }
`;
