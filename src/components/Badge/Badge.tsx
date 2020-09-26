import { FunctionComponent, ReactNode } from "react";
import StyledHOC from "./../../helper/styled-hoc";
import style from "./style";

type Props = {
  children: ReactNode;
  className: string;
};

const Badge: FunctionComponent<Props> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default StyledHOC(Badge, style);
