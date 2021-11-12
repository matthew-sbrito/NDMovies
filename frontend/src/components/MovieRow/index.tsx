import React, { useEffect, useState } from "react";
import { Movie } from "../../entities/Movie";

import { Container } from "./styles";

interface IMovieRowProps {
  movies: any[];
  action(item: any): any;
}

const MovieRow: React.FC<IMovieRowProps> = ({ movies, action }: IMovieRowProps) => {
  const [currentMovies, setCurrentMovies] = useState([] as Movie[]);

  useEffect(() => {
    const moviesM = movies.map((movie): Movie => {
      return {
        idimdb: movie.id ?? movie.idimdb,
        title: movie.l ?? movie.title,
        description: "",
        image: movie.i.imageUrl ?? movie.image,
      };
    });
    setCurrentMovies(moviesM);
  }, [movies]);

  return (
    <Container>
      {currentMovies.map((movie) => {
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
