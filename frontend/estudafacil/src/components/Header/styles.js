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
  }

  .inactive-link {
    color: #332c5c;
  }

  .active-link {
    color: #8976fd;
  }

  .logoStyle {
    text-decoration: none;
  }
`;

export const loginDiv = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 24px;
    margin-left: 16px;
    color: #8976fd;
  }
`;
