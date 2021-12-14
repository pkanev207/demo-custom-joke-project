import styled from "styled-components/macro";

export const Wrapper = styled.div`
  background-image: linear-gradient(to right, #7ea1b9, #0a648b);
  background-position: left right;
  padding: 1rem 0;
`;

export const Content = styled.div`
  /* background-image: url("https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"); */
  margin: 0 auto;
  height: 100%;
  max-width: 30rem;
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
  border-radius: 0.375rem;
  box-shadow: 0 0 1em 0.1em rgba(0, 0, 0, 0.6);
`;

export const Title = styled.h3`
  text-align: center;
  color: var(--white);
  margin-top: 0.3rem;
  padding-top: 0.9rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 17rem;
  margin: 0 auto;
  padding: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: var(--fontSuperSmall);
  color: var(--white);
  margin-bottom: 0.5rem;
`;

const sharedInputStyles = `
  font-size: var(--fontSuperSmall);
  margin-bottom: 1.5rem;
  border: 1px solid var(--black);
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  opacity: 0.7;
`;

export const Input = styled.input`
  ${sharedInputStyles};
  outline: none;
`;

export const Select = styled.select`
  ${sharedInputStyles};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  color: var(--lightDark);
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  border: 1px solid var(--black);
  background-color: var(--white);
  font-weight: 500;
  opacity: 0.7;

  &:hover {
    cursor: pointer;
    filter: brightness(120%);
    color: darkcyan;
  }
`;

export const ErrorMessage = styled.div`
  color: tomato;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;
