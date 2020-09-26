import { css } from "styled-components";

export default css`
  .author {
    display: flex;
    justify-content: flex-end;
    margin-bottom: ${(props) => props.theme.gutter};
    color: ${(props) => props.theme.colors.red};
  }

  .image-wrapper {
    text-align: center;
    img {
      max-width: 100%;
      max-height: 300px;
    }
  }
`;
