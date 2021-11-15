import React from 'react';

import { Container } from './styles';

const NotMovie: React.FC = () => { 
  return (
    <Container>
        <span>
          Você não possui filmes catalogados!
        </span>
    </Container>
  );
}

export default NotMovie;