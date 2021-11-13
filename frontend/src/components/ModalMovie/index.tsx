import React, { useCallback, useEffect, useState } from "react";

import { Container, Modal } from "./styles";

import closeSvg from "../../assets/svg/close.svg";
import { useAuth } from "../../contexts/auth";
import { Link } from "react-router-dom";
import { MovieServices } from "../../services/NDMovie";
import { Movie } from "../../entities/Movie";

import { SmallLoading } from "../../components/Loading";

interface IModalProps {
  currentItem: any;
  show: boolean;
  close(): void;
  remove(): void;
}

const ModalMovie: React.FC<IModalProps> = ({
  currentItem,
  show,
  close,
  remove
}: IModalProps) => {
  const { signed } = useAuth();
  const [item, setItem] = useState<Movie>({} as Movie);
  const [contains, setContains] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    setLoading(true);
    const id = currentItem.id ?? currentItem.idimdb;

    const item = await new MovieServices().getMovie(id);
    setItem(item);
    setLoading(false);
    verifyContains(item);
  }, [currentItem]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  function handleClick(event: any): void {
    if (
      event.target.className.includes("show") ||
      event.target.alt?.includes("close")
    ) {
      close();
    }
  }

  const verifyContains = async (item: any) => {
    
    if (signed && item) {
      const service = new MovieServices();
      const contains = await service.containsInUser(item.idimdb);
      console.log(item);
      setContains(contains);
    }
  };

  async function handleCatalog() {
    console.log(item.idimdb);    
    const service = new MovieServices();
    await service.addMovie(item);
    verifyContains(item);
  }
  
  async function handleRemove() {
    console.log(item.idimdb);    
    const service = new MovieServices();
    await service.removeMovieInUser(item);
    verifyContains(item);
    remove();
  }

  if (loading) {
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
            <img src={item.image} alt="img-current" />
          </div>
          <div className="content">
            <div className="infos">
              <div className="title">
                <h1>{item.title}</h1>
              </div>
              <div className="description">
                {item.description
                  ? item.description
                  : "Não foi possível carregar a descrição deste filme! :("}
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
