import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { Navigate } from "react-router";

import { Container } from "./styles";


const Header: React.FC = () => {

  const [redirect, setRedirect] = useState(false);
  
  const { signed, signOut } = useAuth();
  
  function handleLogout(){
    signOut();
  }

  if(redirect){
    return <Navigate to="/auth/login"/>
  }

  return (
    <Container className="content-header">
      <div className="title">NDMovie</div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Ínicio</Link>
          </li>
          <li>
            <Link to="/news">Lançamentos</Link>
          </li>
          <li>
            <Link to="/tops">Populares</Link>
          </li>
        </ul>
      </nav>
      <div className="btn-action">
        {signed ? (
          <button onClick={handleLogout}> Sair </button>
        ) : (
          <button onClick={() => setRedirect(true)}> Logar </button>
        )}
      </div>
    </Container>
  );
};

export default Header;
