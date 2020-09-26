import { FunctionComponent, ReactNode } from "react";
import Head from "next/head";
import Header from "./../components/Header";
import StyledHOC from "./../helper/styled-hoc";
import style from "./style";

type Props = {
  children: ReactNode;
  className: string;
};

const DefaultLayout: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <div className={className}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default StyledHOC(DefaultLayout, style);
