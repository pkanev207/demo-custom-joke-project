import React from "react";
// Components
import Button from "./Button";
import Joke from "./Joke";
// Styles
import styled from "styled-components/macro";
// API
let url = "https://v2.jokeapi.dev/joke/Any";

const Wrapper = styled.div`
  width: 90%;
  /* background-color: var(--lightGrey); */
`;

const Content = styled.div`
  margin: 2rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 700px) {
    flex-direction: column;
    margin: 0;
  }
`;

const Header = styled.h3`
  flex-grow: 1.5;
  text-align: center;
  padding: 2rem;
  border-radius: 0.375rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
`;

const Jokes = styled.div`
  width: 100%;
  text-align: center;
  margin-left: 3rem;
`;

class JokeBoard extends React.Component {
  state = {
    jokes: [],
    isLoaded: true,
    error: null,
  };

  handleGetJoke = () => {
    this.setState({ isLoaded: false });

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          throw new Error(response.status + " - a nasty one");
        }
      })
      .then((result) => {
        const { id, setup, delivery, joke, category } = result;
        const newJoke = { id, setup, delivery, joke, category };
        // loaded, making error be null since in this .then everything is ok
        this.setState({
          jokes: [newJoke, ...this.state.jokes],
          isLoaded: true,
          error: null,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error: error.message,
        });
      });
  };

  render() {
    const { jokes, isLoaded, error } = this.state;

    return (
      <Wrapper>
        <Content>
          <Header>Welcome to Quick Jokeboard!</Header>
          <Button
            text={isLoaded ? "Give me a joke" : "Loading"}
            callback={this.handleGetJoke.bind(this)}
          />
        </Content>

        {/* <Buttons>
          <Button
            text={isLoaded ? "Give me a joke" : "Loading"}
            callback={this.handleGetJoke.bind(this)}
          />
          <Button
            text={"Log In"}
            callback={() => {
              <Navigate to="/login" />;
            }}
          />
          <Button
            text={"Register"}
            callback={() => {
              navigate("/register");
            }}
          />
        </Buttons> */}
        <Jokes>
          {error && <p>Something went terribly wrong, error : {error} </p>}

          {jokes.length > 0 &&
            jokes.map((joke) => <Joke key={joke.id} data={joke} />)}
        </Jokes>
      </Wrapper>
    );
  }
}

export default JokeBoard;
