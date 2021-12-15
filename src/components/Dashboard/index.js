import React from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Firebase
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config";
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

  const addJoke = async (joke) => {
    console.log("U sure?");
    console.log(joke);
    console.log(joke.id);
    await addDoc(collection(db, "jokes"), joke);
    // window.location.reload();
    navigate("/collection");
  };

  return (
    <Wrapper>
      <h3>Welcome to Private Comedy Club!</h3>
      <h4>Hello from the Dashboard!</h4>
      {loading && <Spinner />}
      <Joke data={joke} />
      <div style={{ width: "90%", display: "flex", gap: "10px" }}>
        <Button text={"Give me another"} callback={refetch} />
        <Button text={"Add to collection"} callback={() => addJoke(joke)} />
      </div>
      <Button text={"Create own"} callback={() => navigate("/create")} />
    </Wrapper>
  );
};

export default Dashboard;
