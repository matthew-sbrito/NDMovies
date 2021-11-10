import React from "react";

import { Container } from "./styles";

interface IProps {
  title: string;
  subtitle: string;
}

const TitleAuth: React.FC<IProps> = ({ title, subtitle }: IProps) => {
  return (
    <Container>
      <span className="title">{title}</span>
      <span className="subtitle">{subtitle}</span>
    </Container>
  );
};

export default TitleAuth;
