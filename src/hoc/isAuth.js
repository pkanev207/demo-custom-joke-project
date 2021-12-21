import React, { useContext } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Context
import { AuthContext } from "../contexts/AuthContext";

const isAuth = (Inner) => {
  const Outer = (props) => {
    let navigate = useNavigate();
    const { loggedUser } = useContext(AuthContext);
    console.log(loggedUser);
    if (loggedUser === null) {
      navigate("/login");

      return null;
    }

    return <Inner {...props} />;
  };

  return Outer;
};

export default isAuth;
