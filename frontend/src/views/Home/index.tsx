import React, { useState } from "react";

import searchSvg from "../../assets/svg/search.svg";
import { findMovieSearch } from "../../services/IMDb";

import { Container } from "./styles";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<any>(null);

  function handleKeyUp(event: any) {   
    if (event.code === "Enter") {
      handleSearchMovie();
    }
  }

  async function handleSearchMovie() {

    const responseMovies = await findMovieSearch(search);

    if(responseMovies){
      setMovies(responseMovies.d);
    }

    movies.d.forEach( (movie: any) => console.log(movie));  
    
  }

  return (
    <Container>
      <div
        className="image"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundImage:
            "url(https://rollingstone.uol.com.br/media/uploads/elenco_de_eternos_filme_da_marvel_foto_divulgacao_reproducao_twitter.jpg)",
        }}
      >
        <div className="shadow-vertical">
          <div className="shadow-horizontal"></div>
        </div>
      </div>
      <div className="input-box">
        <div>
          <input
            type="text"
            onKeyUp={handleKeyUp}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Buscar filme..."
          />
          <img src={searchSvg} onClick={handleSearchMovie} alt="search" />
        </div>
      </div>
    </Container>
  );
};

export default Home;
