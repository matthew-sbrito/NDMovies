import React, { useEffect, useState } from "react";
import { Movie } from "../../entities/Movie";

import { Container } from "./styles";

interface IMovieRowProps {
  movies: Movie[];
  action(movie: Movie): any;
}

const MovieRow: React.FC<IMovieRowProps> = ({ movies, action }: IMovieRowProps) => {

  return (
    <Container>
      {movies.map((movie: Movie) => {
        return (
          <div key={movie.idimdb} className="movie-item" onClick={() => action(movie)}>
            <div className="image-item">
              <img src={movie.image} alt={movie.title} />
            </div>
            <div className="title">{movie.title}</div>
          </div>
        );
      })}
    </Container>
  );
};

export default MovieRow;
