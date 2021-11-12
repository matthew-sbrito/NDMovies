import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { Navigate } from "react-router";

import { Container } from "./styles";


const Header: React.FC = () => {

  const [redirect, setRedirect] = useState(false);
  const [ blackHeader, setBlackHeader ] = useState(false);
  
  const { signed, signOut } = useAuth();
  
  function handleLogout(){
    signOut();
  }

  const scrollListenner = () => {
    if (window.scrollY > 20) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  };

  useEffect(() =>{
    window.addEventListener("scroll", scrollListenner);
    // return () => {
    //   window.removeEventListener("scroll", scrollListenner);
    // };
  },[])

  if(redirect){
    return <Navigate to="/auth/login"/>
  }

  return (
    <Container className={`content-header ${blackHeader ? 'black' : ''}`}>
      <div className="title">NDMovie</div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Ínicio</Link>
          </li>
          <li>
            <Link to="/catalogs">Catalogados</Link>
          </li>
        </ul>
      </nav>
      <div className="btn-action">
        {signed ? (
          <button onClick={handleLogout}> Sair </button>
        ) : (
          <button onClick={() => setRedirect(true)}> Entrar </button>
        )}
      </div>
    </Container>
  );
};

export default Header;
