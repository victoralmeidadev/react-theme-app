import React from "react";
import { Content } from "./styles";

interface Props {
  title: string;
  description: string;
}

const Header: React.FC<Props> = () => {
  return <Content />;
};

export default Header;
