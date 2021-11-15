import React, { useCallback, useEffect, useRef, useState } from "react";

import { findMovieRandom, findMovieSearch } from "../../services/IMDb";
import { Movie } from "../../entities/Movie";

import searchSvg from "../../assets/svg/search.svg";
import infoSvg from "../../assets/svg/info.svg";

import Loading from "../../components/Loading";
import ModalMovie from "../../components/ModalMovie";

import ImageMovie from "../../components/ImageMovie";
import MovieRow from "../../components/MovieRow";

import { Container } from "./styles";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [modal, setModal] = useState(false);

  const [randomMovie, setRandomMovie] = useState<Movie>({} as Movie);
  const [currentMovie, setCurrentMovie] = useState<Movie>({} as Movie);
  const [movies, setMovies] = useState<Movie[]>([]);

  const searchRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: any): Promise<void> {
    event.preventDefault();
    if(searchRef.current && searchRef.current.value){     
      const responseMovies = await findMovieSearch(searchRef.current.value);
      setMovies(responseMovies!);
    }
  }

  const openMovie = useCallback((movie: Movie)=>{
    setCurrentMovie({} as Movie);
    setCurrentMovie(movie);
    setModal(true);
 },[])

  const loadAll = useCallback(async () => {
    setLoading(false);
    const randomMovie = await findMovieRandom();
    setRandomMovie(randomMovie!);
  }, []);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <div className="more-info" onClick={() => openMovie(randomMovie)}>
        <img src={infoSvg} alt="info" />
      </div>
      <ImageMovie image={randomMovie && randomMovie.image} />
      <div className={`input-box ${movies.length && 'search'}`}>
        <form onSubmit={handleSubmit}>
          <input ref={searchRef} type="text" placeholder="Buscar filme..." />
          <img src={searchSvg} onClick={handleSubmit} alt="search" />
        </form>
      </div>
      {movies && <MovieRow movies={movies} action={openMovie} />}
      {currentMovie && (
        <ModalMovie
          remove={() => {}}
          idimdb={currentMovie.idimdb}
          show={modal}
          close={() => setModal(false)}
        />
      )}
    </Container>
  );
};

export default Home;
