import React, { useState, useEffect, useContext } from "react";
// Context
import { AuthContext } from "../contexts/AuthContext";
// Routing
import { useNavigate } from "react-router-dom";
// Firebase
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase-config";
// Components
import Button from "./Button";
// Styles
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.div`
  width: 100%;
  margin: 30px auto;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
`;

const Image = styled.div`
  width: 550px;
  height: 300px;
  background: url("https://images.unsplash.com/photo-1543791187-df796fa11835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80")
    no-repeat center center;
  background-size: cover;
  border-radius: 10%;
  margin-top: 2rem;
`;

const Home = () => {
  let navigate = useNavigate();
  const { loggedUser } = useContext(AuthContext);
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // console.log(currentUser);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
        setUser(currentUser);
      } else {
        // User is signed out
        // ...
        console.log("No user");
        // setUser(null);
      }
    });
  }, []);

  return (
    <>
      <Wrapper>
        <h3
          style={{
            backgroundColor: "tomato",
            color: "white",
            textAlign: "center",
            border: "1px solid olivedrab",
          }}
        >
          {user.displayName
            ? `Welcome ${user.displayName}`
            : "Home is where everything begins."}
        </h3>
        <Image />
        {user.email ? (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <Button
              text={"Check out some jokes"}
              callback={() => navigate("/jokeboard")}
            />
            <Button
              text={"Go to personal space"}
              callback={() => navigate("/user")}
            />
          </div>
        ) : (
          <Buttons>
            <Button
              text={"Check out some jokes"}
              callback={() => navigate("/jokeboard")}
            />
            <Button
              text={"Log In"}
              callback={() => {
                navigate("/login");
              }}
            />
            <Button
              text={"Register"}
              callback={() => {
                navigate("/register");
              }}
            />
          </Buttons>
        )}
      </Wrapper>
    </>
  );
};

export default Home;
