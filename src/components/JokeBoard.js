import React from "react";
// Routing
import { Navigate } from "react-router-dom";
// Components
import Button from "./Button";
import Joke from "./Joke";
// Styles
import styled from "styled-components/macro";
// API
let url = "https://v2.jokeapi.dev/joke/Any";

const Buttons = styled.div``;

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
        console.log(result);
        const { id, setup, delivery, joke, category } = result;
        const newJoke = { id, setup, delivery, joke, category };
        console.log(newJoke);
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
      <div>
        <h3>Jokeboard</h3>

        <Buttons>
          <Button
            text={isLoaded ? "Give me a joke" : "Loading"}
            callback={this.handleGetJoke.bind(this)}
          />
          {/* <Button
            text={"Log In"}
            callback={() => {
              <Navigate to="/login" />;
            }}
          /> */}
          {/* <Button
            text={"Register"}
            callback={() => {
              navigate("/register");
            }}
          /> */}
        </Buttons>
        {error && <p>Something went terribly wrong, error : {error} </p>}

        {jokes.length > 0 &&
          jokes.map((joke) => <Joke key={joke.id} data={joke} />)}
      </div>
    );
  }
}

export default JokeBoard;
