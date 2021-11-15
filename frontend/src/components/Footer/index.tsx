import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container className="content-footer">
      <span>
        Feito por Matheus Brito ©
      </span>
      <span>
        Informações utilizadas da  API RAPID IMDb.
      </span>
    </Container>
  );
}

export default Footer;