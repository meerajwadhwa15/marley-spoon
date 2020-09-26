import { css } from "styled-components";

export default css`
  font-size: 16px;
  padding: 10px ${(props) => props.theme.gutter};
  color: ${(props) => props.theme.colors.default};
  background-color: ${(props) => props.theme.backgroundColors.main};
  h2 {
    margin: 0;
  }

  div {
    max-width: ${(props) => props.theme.containerWidth};
    margin: auto;
  }
`;
