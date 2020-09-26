import { css } from "styled-components";

export default css`
  font-size: ${(props) => props.theme.baseFontSize};
  color: ${(props) => props.theme.colors.green};
  border: 1px solid ${(props) => props.theme.colors.green};
  border-radius: 5px;
  display: inline-block;
  padding: 5px;
  margin-right: ${(props) => props.theme.gutter};
  margin-bottom: ${(props) => props.theme.gutter};
`;
