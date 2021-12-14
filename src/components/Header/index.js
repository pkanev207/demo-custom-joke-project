import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid olivedrab;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  border: 2px solid pink;
  /* width: 100%;
  display: flex;
  justify-content: space-evenly; */
  text-align: center;
  flex-grow: 1;
  & > a:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const Header = ({ user }) => (
  <Wrapper>
    <Content>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      {user && <Link to="user">User</Link>}
    </Content>
  </Wrapper>
);

export default Header;
