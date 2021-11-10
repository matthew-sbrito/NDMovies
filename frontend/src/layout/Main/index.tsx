import React from 'react';
import { Outlet } from 'react-router';
import { Container } from './style';

// import { Container } from './styles';

const Main: React.FC = () => {
  return (
  <Container>
    <Outlet/>
  </Container>
  );
}

export default Main;