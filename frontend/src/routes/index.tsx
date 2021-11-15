import { useRoutes } from "react-router";

import { useAuth } from "../contexts/auth";

import { authRoutes } from "./auth.routes";
import { mainRoutes } from "./main.routes";

import Catalogs from "../views/Catalogs";

const MainRoutes: React.FC = () => {
  const { signed } = useAuth();

  if(signed){
    const catalog = { path: "/catalogs", element: <Catalogs /> };
    mainRoutes.children.push(catalog);
  }
  
  const main = useRoutes([mainRoutes]);
  const auth = useRoutes([mainRoutes, authRoutes]); 

  return <> { signed ? main : auth} </>;
};

export default MainRoutes;
