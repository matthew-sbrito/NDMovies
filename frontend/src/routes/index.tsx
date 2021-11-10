import { useRoutes } from "react-router";

import { useAuth } from "../contexts/auth";

import { authRoutes } from "./auth.routes";
import { mainRoutes } from "./main.routes";

const MainRoutes: React.FC = (): JSX.Element => {
  const { signed } = useAuth();
  
  const main = useRoutes([mainRoutes]);
  const auth = useRoutes([authRoutes]); 

  return <> {signed ? main : auth} </>;
};

export default MainRoutes;
