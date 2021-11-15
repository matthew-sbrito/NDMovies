import React from 'react';

import { Container } from './styles';

interface IImageMovieProps{
  image: string;
}

const ImageMovie: React.FC<IImageMovieProps> = ({ image }: IImageMovieProps) => {
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