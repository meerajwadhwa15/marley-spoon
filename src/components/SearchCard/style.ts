import { css } from "styled-components";

export default css`
  width: 50%;
  margin-bottom: 15px;
  a {
    > div {
      border: 1px solid ${(props) => props.theme.colors.secondary};
      display: flex;
      justify-content: space-between;

      img {
        width: 40%;
      }

      h5 {
        padding-left: ${(props) => props.theme.gutter};
        width: 60%;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
