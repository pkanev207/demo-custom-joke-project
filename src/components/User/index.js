import React from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Firebase
import { signOut, deleteUser } from "@firebase/auth";
import { auth } from "../../firebase-config";
// Components
import { Wrapper } from "./User.styles";
import Button from "../Button";

const User = () => {
  let navigate = useNavigate();
  // const goToCollection = () => navigate("/collection");
  // const goToDashboard = () => navigate("/dashboard");

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
      <h3>User's interface</h3>
      <div>This is the user!</div>
      <Button
        text={"View Collection"}
        callback={() => navigate("/collection")}
      />
      <Button
        text={"Get another one"}
        callback={() => navigate("/dashboard")}
      />
      <Button text={"Log Out"} callback={logout} />
      <Button text={"Delete account"} callback={closeAccount} />
    </Wrapper>
  );
};

export default User;
