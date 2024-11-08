import styled from "styled-components";

export const cardDiv = styled.div`
  height: 250px;
  max-width: 300px;
  width: 100%;
  box-shadow: 1px 5px 5px 0px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
  }

  img {
    width: 100%;
  }

  .card-detail-div {
    display: flex;
    flex-direction: column;
    padding: 32px;

    h4 {
      font-size: 18px;
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
    }
  }
`;
