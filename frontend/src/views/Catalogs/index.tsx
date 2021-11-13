import React, { useEffect, useState } from "react";
import { SmallLoading } from "../../components/Loading";
import ModalMovie from "../../components/ModalMovie";
import MovieRow from "../../components/MovieRow";
import NotMovie from "../../components/NotMovie";
import { MovieServices } from "../../services/NDMovie";

import { Container } from "./styles";

const Catalogs: React.FC = () => {
  const [currentMovie, setCurrentMovie] = useState<any | null>(null);
  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);

  function openMovie(item: any) {
    
    setCurrentMovie(null);
    setCurrentMovie({
      id: item.id ?? item.idimdb,
      title: item.title ?? "",
      image: item.image.url ?? item.image,
      description: item.description.text ?? item.description,
    });
    setModal(true);
  }

  async function loadAll() {
    const moviesCatalogs = await new MovieServices().findAllCatalogs();
    console.log(moviesCatalogs);
    
    if (moviesCatalogs) {
      setMovies(moviesCatalogs);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadAll();
  }, []);

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
          {movies ? (
            <MovieRow movies={movies} action={openMovie} />
          ) : (
            <NotMovie />
          )}
          {modal && (
            <ModalMovie
              remove={()=> loadAll()}
              show={modal}
              currentItem={currentMovie}
              close={() => setModal(false)}
            />
          )}
        </div>
      )}
    </Container>
  );
};

export default Catalogs;
