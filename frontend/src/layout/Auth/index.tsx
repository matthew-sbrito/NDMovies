import React from "react";
import { Outlet } from "react-router";

import { Container, ImageContainer, Title, Content } from "./styles";

const Auth: React.FC = () => {
    
  return (
    <Container>
      <ImageContainer>
        <Title> NDMovies </Title>
        <img src={`image`} alt="" />
      </ImageContainer>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Auth;
