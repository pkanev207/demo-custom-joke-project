import React, { useContext } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Context
import { AuthContext } from "../../contexts/AuthContext";
// Firebase
import { collection, addDoc } from "firebase/firestore";
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
// ID
import { v4 as uuidv4 } from "uuid";
// API
let url = "https://v2.jokeapi.dev/joke/Any";

const Dashboard = () => {
  let navigate = useNavigate();
  const { loggedUser } = useContext(AuthContext);
  const { data: joke, loading, error, refetch } = useFetch(url);

  if (error) return <FOF />;

  const addJoke = async (joke) => {
    joke.jokeId = uuidv4();
    joke.displayName = loggedUser.displayName;
    joke.uid = loggedUser.uid;
    joke.email = loggedUser.email;
    console.log(joke);
    await addDoc(collection(db, "jokes"), joke);
    // window.location.reload();
    navigate("/collection");
  };

  return (
    <Wrapper>
      <h3>Welcome to Private Comedy Club!</h3>
      <h4>Here is the Jokeboard!</h4>
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
