import styled from "styled-components/macro";

export const Wrapper = styled.button`
  display: block;
  background: var(--darkGrey);
  width: 30%;
  min-width: 100px;
  height: 50px;
  border-radius: 30px;
  color: var(--white);
  border: 0;
  font-size: var(--fontMed);
  margin: 20px auto;
  padding: 6px;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
