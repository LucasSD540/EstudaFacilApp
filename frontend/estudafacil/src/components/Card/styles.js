import styled from "styled-components";

export const planDiv = styled.div`
  position: relative;
  background-color: #fff;
  max-width: 280px;
  width: 100%;
  height: 640px;
  box-shadow: ${(props) =>
    props.shadowColor || "0px 0px 15px 10px rgba(0, 0, 0, 0.1)"};
  padding: 64px 32px 0 32px;
  margin-top: ${(props) => props.marginStyle || "0"};

  .plan-name {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: ${(props) => props.backgroundColor || "#bdc3c7"};
    max-width: 180px;
    width: 100%;
    height: 40px;

    p {
      color: #fff;
      font-weight: bold;
      font-size: 18px;
    }
  }

  .first {
    top: 0;
    left: 0;
  }

  .second {
    bottom: 0;
    right: 0;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }

  .list-item {
    display: flex;
    align-items: center;
    margin-top: 48px;
    list-style: none;

    img {
      margin-right: 16px;
    }
  }

  .free {
    display: ${(props) => (props.plan === "free" ? "block" : "none")};
  }

  .premium {
    display: ${(props) => (props.plan === "premium" ? "block" : "none")};
  }

  .plus {
    display: ${(props) => (props.plan === "plus" ? "block" : "none")};
  }
`;
