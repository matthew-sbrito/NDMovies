import React from "react";
import { Outlet } from "react-router";

import { Container, Title, Content } from "./styles";

import GlobalStyle from '../../styles/globalAuth';
import { Link } from "react-router-dom";

const Auth: React.FC = () => {
    
  return (
    <Container>
        <GlobalStyle />
        <Title> NDMovies </Title>
        <Link id="goHome" to="/home">Home</Link>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Auth;
