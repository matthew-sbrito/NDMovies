import { Navigate } from "react-router";

import Main from "../layout/Main";

import Home from "../views/Home";

const mainRoutes = {
  path: "/",
  element: <Main />,
  children: [
    { path: "*", element: <Navigate to="/home" /> },
    { path: "", element: <Navigate to="/home" /> },
    { path: "/home", element: <Home /> },
  ],
};

export { mainRoutes };
