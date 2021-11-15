import React, { useCallback, useEffect, useState } from "react";

import { Movie } from "../../entities/Movie";
import { MovieServices } from "../../services/NDMovie";

import { useAuth } from "../../contexts/auth";

import { SmallLoading } from "../../components/Loading";
import ModalMovie from "../../components/ModalMovie";
import MovieRow from "../../components/MovieRow";
import NotMovie from "../../components/NotMovie";

import { Container } from "./styles";

const Catalogs: React.FC = () => {
  const { token } = useAuth();

  const [currentMovie, setCurrentMovie] = useState<Movie>({} as Movie);
  const [movies, setMovies] = useState<Movie[]>([]);

  const [modal, setModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  function openMovie(movie: Movie) {
    setCurrentMovie({} as Movie);
    setCurrentMovie(movie);
    setModal(true);
  }

  const loadAll = useCallback(async () => {
    if (token) {
      const moviesCatalogs = await new MovieServices().findAllCatalogs();

      setMovies(moviesCatalogs);
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  return (
    <Container>
      <div className="title-content">
        <h1>Seus itens catalogados</h1>
      </div>
      {loading ? (
        <div className="loading">
          <SmallLoading />
        </div>
      ) : (
        <div className="itens">
          {movies.length ? (
            <MovieRow movies={movies} action={openMovie} />
          ) : (
            <NotMovie />
          )}
          {modal && (
            <ModalMovie
              remove={() => loadAll()}
              show={modal}
              idimdb={currentMovie.idimdb}
              close={() => setModal(false)}
            />
          )}
        </div>
      )}
    </Container>
  );
};

export default Catalogs;
