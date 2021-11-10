import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Register: React.FC = () => {
  return (
    <Container>
      <Link className="link-auth" to="/login">Entrar</Link>
    </Container>
  );
}

export default Register;