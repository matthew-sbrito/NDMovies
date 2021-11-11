import React from "react";

import { Container } from "./styles";

interface IMovieRowProps {
  movies: any[];
}

const MovieRow: React.FC<IMovieRowProps> = ({ movies }: IMovieRowProps) => {
  return (
    <Container>
      {movies.map((movie) => {
        return <div className="movie-item">{movie.title}</div>;
      })}
    </Container>
  );
};

export default MovieRow;
