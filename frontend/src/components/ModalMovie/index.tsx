import React, { useEffect, useState } from "react";

import { Container, Modal } from "./styles";

import closeSvg from "../../assets/svg/close.svg";
import { useAuth } from "../../contexts/auth";
import { Link } from "react-router-dom";
import { MovieServices } from "../../services/NDMovie";
import { Movie } from "../../entities/Movie";

interface IModalProps {
  currentItem: any;
  show: boolean;
  close(): void;
}

const ModalMovie: React.FC<IModalProps> = ({
  currentItem,
  show,
  close,
}: IModalProps) => {
  const { signed } = useAuth();
  const [item, setItem] = useState<Movie>({} as Movie);

  async function loadData(){
    const id =
      currentItem.id?.replace("/title/", "").replace("/", "") ??
      currentItem.idimdb?.replace("/title/", "").replace("/", "");

    let description =
      currentItem.description?.text ?? currentItem.description;
    if (description) {
      setItem({
        title: currentItem.title,
        idimdb: id,
        description: description,
        image: currentItem.image.url ?? currentItem.image,
      });
    } else {
      // description = await findById
      setItem({
        title: currentItem.title,
        idimdb: id,
        description: description,
        image: currentItem.image.url ?? currentItem.image,
      });

    }
  }

  useEffect(() => {
    loadData()
  }, [currentItem]);

  const [contains, setContains] = useState(false);

  function handleClick(event: any): void {
    if (
      event.target.className.includes("show") ||
      event.target.alt?.includes("close")
    ) {
      close();
    }
  }

  const verifyContains = async () => {
    console.log(item);
    if (signed) {
      const service = new MovieServices();

      const contains = await service.containsInUser(item.idimdb);

      setContains(contains);
    }
  };

  async function handleCatalog() {
    const service = new MovieServices();
    await service.addMovie(item);
    verifyContains();
  }

  useEffect(() => {
    // verifyContains();
  }, []);

  if (!item) {
    return <></>;
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
                <button className="catalogar">Item Catalogado</button>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default ModalMovie;
