import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 125px;
  margin-bottom: 2rem;
`;

export const Speech = styled.div`
  background-color: var(--naughtyBrown);
  padding: 1rem;
  border-radius: 1rem;
  position: relative;

  /* arrow */
  &:after {
    left: 100%;
    top: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: transparent;
    border-left-color: var(--naughtyBrown);
    border-width: 10px;
    margin-top: -10px;
  }
`;

export const Image = styled.img`
  width: 125px;
  border-radius: 50%;
`;

export const Label = styled.p`
  margin: 0;
  max-width: 25rem;
`;
