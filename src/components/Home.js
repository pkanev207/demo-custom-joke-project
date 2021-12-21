import React, { useState, useEffect } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Firebase
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase-config";
// Components
import Button from "./Button";
// Styles
import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--naughtyBrown);

  @media (max-width: 500px) {
    background-color: var(--lightGrey);
  }
`;

export const Header = styled.h2`
  padding: 1rem 3rem;
  border: none;
  border-radius: 0.375rem;
  background-color: var(--medGrey);
  color: var(--white);
  text-align: center;
  border: 1px solid olivedrab;

  @media (max-width: 700px) {
    padding: 1rem;
    background-color: var(--naughtyBrown);
  }
`;

export const Buttons = styled.div`
  width: 100%;
  margin: 30px auto;
  display: flex;
  gap: 20px;
  justify-content: flex-end;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Image = styled.div`
  width: 550px;
  height: 300px;
  background: url("https://images.unsplash.com/photo-1543791187-df796fa11835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80")
    no-repeat center center;
  background-size: cover;
  border-radius: 10%;
  margin-top: 2rem;

  @media (max-width: 500px) {
    display: none;
  }
`;

const Home = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // console.log(currentUser);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(currentUser);
      } else {
        // User is signed out
        console.log("No user");
        // setUser(null);
      }
    });
  }, []);

  return (
    <>
      <Wrapper>
        <Header>
          {user.displayName
            ? `Welcome ${user.displayName}`
            : "Home is where everything begins"}
        </Header>
        <Image />
        {user.email ? (
          <Buttons>
            <Button
              text={"Quick jokes"}
              callback={() => navigate("/jokeboard")}
            />
            <Button
              text={"Go to personal space"}
              callback={() => navigate("/user")}
            />
          </Buttons>
        ) : (
          <Buttons>
            <Button
              text={"Quick jokes"}
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
