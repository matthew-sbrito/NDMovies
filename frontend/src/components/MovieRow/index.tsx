import React from "react";
import { Movie } from "../../entities/Movie";

import { Container } from "./styles";

interface MovieRowProps {
  movies: Movie[];
  action(movie: Movie): any;
}

const MovieRow: React.FC<MovieRowProps> = ({ movies, action }: MovieRowProps) => {

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

export default React.memo(MovieRow);
