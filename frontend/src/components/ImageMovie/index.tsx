import React from 'react';

import { Container } from './styles';

interface ImageMovieProps{
  image: string;
}

const ImageMovie: React.FC<ImageMovieProps> = ({ image }: ImageMovieProps) => {
  return (
    <Container
    style={{
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      backgroundImage: `url(${image})`,
    }}
  >
    <div className="shadow-vertical">
      <div className="shadow-horizontal"></div>
    </div>
  </Container>
  );
}

export default React.memo(ImageMovie);