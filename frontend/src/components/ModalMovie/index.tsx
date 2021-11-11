import React from 'react';

import { Container } from './styles';

interface IModalProps{
  item: any;
}

const ModalMovie: React.FC<IModalProps> = ({ item }: IModalProps) => {
  console.log(item);
  
  return (
    <Container>
    </Container>
  );
}

export default ModalMovie;