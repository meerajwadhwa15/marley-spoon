import { FunctionComponent } from "react";
import StyledHOC from "./../../helper/styled-hoc";
import style from "./style";

type Props = {
  className: string;
};

const Header: FunctionComponent<Props> = ({ className }) => {
  return (
    <header className={className}>
      <div>
        <h2>Recipe</h2>
      </div>
    </header>
  );
};

export default StyledHOC(Header, style);
