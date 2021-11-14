import React, { useCallback, useEffect, useState } from "react";

import { Container, Modal } from "./styles";

import closeSvg from "../../assets/svg/close.svg";
import { useAuth } from "../../contexts/auth";
import { Link } from "react-router-dom";
import { MovieServices } from "../../services/NDMovie";
import { Movie } from "../../entities/Movie";

import { SmallLoading } from "../../components/Loading";

interface IModalProps {
  idimdb: string;
  show: boolean;
  close(): void;
  remove(): void;
}

const ModalMovie: React.FC<IModalProps> = ({
  idimdb,
  show,
  close,
  remove
}: IModalProps) => {

  const { signed } = useAuth();

  const [movie, setMovie] = useState<Movie>({} as Movie);
  const [contains, setContains] = useState(false);
  const [loading, setLoading] = useState(true);

  const verifyContains = useCallback(async (movie: Movie) => {  
    if (signed && movie) {
      const service = new MovieServices();
      const contains = await service.containsInUser(movie);
      setContains(contains);
    }
  }, [signed]);

  const loadData = useCallback(async () => {
    setLoading(true);

    const item = await new MovieServices().getMovie(idimdb);
    
    setMovie(item!);
    verifyContains(item!);

    setLoading(false);
  }, [idimdb, verifyContains]);

  useEffect(() => {
    loadData()
  }, [loadData])

  function handleClick(event: any): void {
    if (
      event.target.className.includes("show") ||
      event.target.alt?.includes("close")
    ) {
      close();
    }
  }

  async function handleCatalog() { 
    const service = new MovieServices(); 
    await service.addMovie(movie);
    verifyContains(movie);
  }
  
  async function handleRemove() {   
    const service = new MovieServices();
    await service.removeMovieInUser(movie);
    verifyContains(movie);
    remove();
  }

  if (loading || !movie) {
    return (
      <Container className={show ? "show" : ""} onClick={handleClick}>
        <Modal>
          <div className="close">
            <img src={closeSvg} alt="close" />
          </div>
          <div className="loading">
            <SmallLoading />
          </div>
        </Modal>
      </Container>
    );
  }

  return (
    <Container className={show ? "show" : ""} onClick={handleClick}>
      <Modal>
        <div className="close">
          <img src={closeSvg} alt="close" />
        </div>
        <div className="item">
          <div className="img-current">
            <img src={movie.image} alt="img-current" />
          </div>
          <div className="content">
            <div className="infos">
              <div className="title">
                <h1>{movie.title}</h1>
              </div>
              <div className="description">
                {movie.description ?? "Não foi possível carregar a descrição deste filme! :("}
              </div>
            </div>
            <div className="button-catalogar">
              {!signed && <Link to="/auth/login">Logar</Link>}
              {signed && !contains ? (
                <button onClick={() => handleCatalog()} className="catalogar">
                  Catalogar
                </button>
              ) : (
                ""
              )}
              {contains && (
                <button onClick={() => handleRemove()} className="catalogar">Remover do catalogo</button>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default ModalMovie;
