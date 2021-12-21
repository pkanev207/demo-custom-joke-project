import React, { useContext } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Context
import { AuthContext } from "../../contexts/AuthContext";
// Firebase
import { signOut, deleteUser } from "@firebase/auth";
import { auth } from "../../firebase-config";
// Components
import { Wrapper } from "./User.styles";
import Button from "../Button";

const User = () => {
  let navigate = useNavigate();
  const { loggedUser } = useContext(AuthContext);
  // console.log(loggedUser);
  let header = "User";
  if (loggedUser) {
    header = loggedUser.displayName;
  }

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
        navigate("/");
      })
      .catch((error) => {
        console.log("An error happened.");
      });
  };

  const closeAccount = () => {
    console.log(auth.currentUser);
    let user = auth.currentUser;

    deleteUser(user)
      .then(() => {
        // User deleted.
        console.log("User deleted!");
        navigate("/");
      })
      .catch((error) => {
        // An error ocurred
        console.log("An error happened.");
      });
  };

  return (
    <Wrapper>
      <h3>{`Welcome to your personal fun place ${header}`}</h3>
      <div>
        <i>User's interface</i>
      </div>
      <Button
        text={"Get another one"}
        callback={() => navigate("/dashboard")}
      />
      <Button text={"Create own"} callback={() => navigate("/create")} />
      <Button
        text={"View Collection"}
        callback={() => navigate("/collection")}
      />
      <Button text={"Log Out"} callback={logout} />
      <Button text={"Delete account"} callback={closeAccount} />
    </Wrapper>
  );
};

export default User;
