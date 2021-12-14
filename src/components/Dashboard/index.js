import React from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Components
import Button from "../Button";
import Spinner from "../Spinner";
import Joke from "../Joke";
import FOF from "../FOF";
// Hooks
import useFetch from "../../hooks/useFetch";
// Styles
import { Wrapper } from "./Dashboard.styles";
// API
let url = "https://v2.jokeapi.dev/joke/Any";

const Dashboard = () => {
  let navigate = useNavigate();
  const { data: joke, loading, error, refetch } = useFetch(url);

  if (error) return <FOF />;

  return (
    <Wrapper>
      <h3>Welcome to Private Comedy Club!</h3>
      <h4>Hello from the Dashboard!</h4>
      {/* <Spinner /> */}
      {loading && <Spinner />}
      <Joke data={joke} />
      <Button text={"Give me another"} callback={refetch} />
      <Button text={"Create own"} callback={() => navigate("/create")} />
    </Wrapper>
  );
};

export default Dashboard;
