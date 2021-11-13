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
    const moviesM = movies.map((movie): any => {
      
      return {
        id: movie.idimdb ?? movie.id,
        title: movie.l ?? movie.title,
        description: movie.description ?? '',
        image:{
          url: movie.i?.imageUrl ?? movie.image,
        } 
      };
    });
    setCurrentMovies(moviesM);
  }, [movies]);

  return (
    <Container>
      {currentMovies.map((movie: any) => {
        return (
          <div key={movie.id} className="movie-item" onClick={() => action(movie)}>
            <div className="image-item">
              <img src={movie.image.url} alt={movie.title} />
            </div>
            <div className="title">{movie.title}</div>
          </div>
        );
      })}
    </Container>
  );
};

export default MovieRow;
