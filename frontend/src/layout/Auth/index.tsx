import React from "react";
import { Outlet } from "react-router";

import { Container, Title, Content } from "./styles";

import GlobalStyle from '../../styles/globalAuth';

const Auth: React.FC = () => {
    
  return (
    <Container>
        <GlobalStyle />
        <Title> NDMovies </Title>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Auth;
