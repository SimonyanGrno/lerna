import { FC, ReactNode } from "react";

interface IProps {
  textColor: string;
  children: ReactNode;
}

const Button: FC<IProps> = ({ textColor, children }) => {
  return <button style={{ color: textColor }}>{children}</button>;
};

export default Button;
