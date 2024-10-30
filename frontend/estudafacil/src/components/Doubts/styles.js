import styled from "styled-components";

export const mainDiv = styled.div`
  .response {
    height: 80px;
    width: 100%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: 1px 5px 5px 0px rgba(0, 0, 0, 0.3);
    padding: 24px 36px;
  }
`;

export const doubtDiv = styled.div`
  width: 100%;
  box-shadow: ${(props) =>
    props.isOpen
      ? "0px 0px 5px 0px rgba(0, 0, 0, 0.3)"
      : "1px 5px 5px 0px rgba(0, 0, 0, 0.3)"};
  padding: 24px 36px;
  border-radius: 30px;
  border-bottom-left-radius: ${(props) => (props.isOpen ? "0" : "30px")};
  border-bottom-right-radius: ${(props) => (props.isOpen ? "0" : "30px")};
  margin: ${(props) => (props.isOpen ? "0" : " 64px 0")};
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

  .title {
    display: flex;
    justify-content: space-between;
  }
`;
