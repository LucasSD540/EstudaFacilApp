import styled from "styled-components";

export const doubtDiv = styled.div`
  width: 100%;
  box-shadow: 1px 5px 5px 0px rgba(0, 0, 0, 0.3);
  padding: 24px 36px;
  border-radius: 30px;
  margin: 64px 0;
  cursor: pointer;

  .doubt-title {
    font-size: 20px;
    color: #615a5a;
  }

  .down-icon {
    height: 15px;
    max-width: 24px;
    width: 100%;
  }

  .flex-div {
    display: flex;
    justify-content: space-between;
  }

  .doubt-content {
    margin-top: 32px;
  }
`;
