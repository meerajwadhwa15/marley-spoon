import { FunctionComponent, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ErrorMessage: FunctionComponent<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default ErrorMessage;
