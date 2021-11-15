import React from "react";

import { Container } from "./styles";

interface TiteAuthProps {
  title: string;
  subtitle: string;
}

const TitleAuth: React.FC<TiteAuthProps> = ({ title, subtitle }: TiteAuthProps) => {
  return (
    <Container>
      <span className="title">{title}</span>
      <span className="subtitle">{subtitle}</span>
    </Container>
  );
};

export default TitleAuth;
