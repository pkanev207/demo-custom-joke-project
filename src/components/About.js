import React from "react";
// Firebase
import { auth } from "../firebase-config";
// Styles
import styled from "styled-components/macro";

const Content = styled.section`
  max-width: 30rem;
  text-align: justify;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  padding: 0 2rem 2rem;
  color: var(--medGrey);
  border-radius: 0.375rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
`;

const About = () => {
  const user = auth.currentUser;
  console.log(user);

  return (
    <Content>
      <h3>DISCLAIMER</h3>
      <div>
        This is a private project with educational purposes only. While the
        author regret any possible inconvenience this project may cause readers,
        he has absolutely no responsibility for any of the used materials, which
        are all from public APIs.
      </div>
      <br />
      <div>The images are from https://unsplash.com</div>
      <div>The jokes are from https://v2.jokeapi.dev</div>
    </Content>
  );
};

export default About;
