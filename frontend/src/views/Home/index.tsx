import React, { useCallback, useEffect, useState } from "react";

import { findMovieRandom, findMovieSearch } from "../../services/IMDb";

import searchSvg from "../../assets/svg/search.svg";
import infoSvg from "../../assets/svg/info.svg";

import Loading from "../../components/Loading";
import ModalMovie from "../../components/ModalMovie";

import { Container } from "./styles";
import ImageMovie from "../../components/ImageMovie";
import MovieRow from "../../components/MovieRow";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  
  const [randomMovie, setRandomMovie] = useState<any>({});
  const [search, setSearch] = useState<string>("");
  const [movies, setMovies] = useState<any>(null);
  const [currentMovie, setCurrentMovie] = useState<any>();
  
  const [modal, setModal] = useState(false);
  

  function handleKeyUp(event: any): void {
    if (event.code === "Enter") {
      handleSearchMovie();
    }
  }

  async function handleSearchMovie(): Promise<void> {
    const responseMovies = await findMovieSearch(search);
    if (responseMovies) {
      setMovies(responseMovies.d);
    }
  }

  function openMovie(item: any){
    setCurrentMovie(item);
    setModal(true);
  }

  const loadAll = useCallback( async () => {
    const randomMovie = await findMovieRandom();
    setRandomMovie(randomMovie);
    setLoading(false);
  }, [])

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  if(loading){
    return <Loading />
  }

  return (
    <Container>
      <div className="more-info" onClick={()=> openMovie(randomMovie)}>
        <img src={infoSvg} alt="info" />
      </div>
      <ImageMovie image={ randomMovie && randomMovie.image.url}/>
      <div className="input-box">
        <div>
          <input
            type="text"
            onKeyUp={handleKeyUp}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Buscar filme..."
          />
          { search ? (
            <img src={searchSvg} onClick={handleSearchMovie} alt="search" />
            ) : (
            <img src={searchSvg} onClick={() => setSearch("")} alt="search" />
          )}
        </div>
      </div>
      {movies && <MovieRow movies={movies} action={openMovie}/>}
     {currentMovie && <ModalMovie  currentItem={currentMovie} show={modal} close={() => setModal(false)}/> }
    </Container>
  );
};

export default Home;
