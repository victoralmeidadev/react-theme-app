import React from "react";
import { Card } from "./styles";

interface Props {
  title: string;
  description: string;
}

const Header: React.FC<Props> = ({ title, description }) => {
  return (
    <Card>
      <h3>{title}</h3>
      <h5>{description}</h5>
    </Card>
  );
};

export default Header;
