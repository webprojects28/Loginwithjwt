import React from "react";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  const navigate = useNavigate();
  let auth = { token: false };

  return <Route {...rest}>{!auth.token ? navigate(`/login`) : children}</Route>;
}

export default PrivateRoute;
