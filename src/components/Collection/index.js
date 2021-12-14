import React, { useContext, useEffect, useState } from "react";
// Context
import { JokeContext } from "../../contexts/JokeContext";
// Routing
import { useNavigate } from "react-router-dom";
// Firebase
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebase-config";
// Components
import Joke from "../Joke";
import Button from "../Button";
import Spinner from "../Spinner";
// import { v4 as uuidv4 } from "uuid";

const Collection = () => {
  let navigate = useNavigate();
  const { setFailedJoke } = useContext(JokeContext);
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const jokesCollectionRef = collection(db, "jokes");

  useEffect(() => {
    const getJokes = async () => {
      setLoading(true);
      const data = await getDocs(jokesCollectionRef);
      // console.log(data.docs);
      const mappedData = data.docs.map((doc) => doc.data());
      await setJokes(mappedData);
      setLoading(false);
    };

    getJokes();
  }, []);
  // console.log(jokes);
  // console.log(jokes[0]);
  // console.log(jokes[0]?.jokeId);

  const editJoke = (data) => {
    // console.log("Form the editJoke!:", data);
    setFailedJoke(data);
    navigate("/edit");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <h3>Here goes the data from Firebase!</h3>
      {loading && <Spinner />}
      {jokes.map((joke) => {
        return (
          <>
            <Joke key={joke?.jokeId} data={joke} />
            {/* <Joke key={uuidv4()} data={joke} /> */}
            <Button text={"Edit"} callback={() => editJoke(joke)} />
          </>
        );
      })}
      <Button text={"Go, home"} callback={() => navigate("/user")} />
    </div>
  );
};

export default Collection;
