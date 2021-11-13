import React from 'react';

import { Container } from './styles';

const NotMovie: React.FC = () => {
  return (
    <Container>
      <div className="not-content">
        <span>
          Você não possui filmes catalogados!
        </span>
      </div>
    </Container>
  );
}

export default NotMovie;