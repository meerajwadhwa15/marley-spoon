import { FunctionComponent, ElementType } from "react";
import styled from "styled-components";

interface Props {
  component: ElementType<any>;
  styles: string;
}

const StyleHOCComponent = (Component, styles) => {
  return styled(Component)`
    ${styles}
  `;
};

export default StyleHOCComponent;
