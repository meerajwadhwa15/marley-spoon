import { css } from "styled-components";

export default css`
  font-size: ${(props) => props.theme.baseFontSize};
  color: ${(props) => props.theme.colors.main};
  background-color: ${(props) => props.theme.backgroundColors.default};

  main {
      max-width: ${(props) => props.theme.containerWidth};
      margin: 15px auto;
      padding: 0 ${(props) => props.theme.gutter};
  }
`;
