import React, { useContext, useEffect, useState } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Context
import { AuthContext } from "../../contexts/AuthContext";
import { JokeContext } from "../../contexts/JokeContext";
// Firebase
import { collection, getDocs, deleteDoc, doc } from "@firebase/firestore";
import { db } from "../../firebase-config";
// Components
import Joke from "../Joke";
import Button from "../Button";
import Spinner from "../Spinner";
// import { v4 as uuidv4 } from "uuid";

const Collection = () => {
  let navigate = useNavigate();
  const { loggedUser } = useContext(AuthContext);
  const { setFailedJoke } = useContext(JokeContext);
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  useEffect(() => {
    const getJokes = async () => {
      setLoading(true);
      const data = await getDocs(collection(db, "jokes"));
      const mappedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      await setJokes(mappedData);
      setLoading(false);
    };

    getJokes();
  }, []);

  const editJoke = (data) => {
    setFailedJoke(data);
    navigate("/edit");
  };

  const deleteJoke = async (data) => {
    console.log(data);
    if (window.confirm("You should think twice!")) {
      await deleteDoc(doc(db, "jokes", data.id));
      window.location.reload();
    }
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
      <h3>Here goes your collection!</h3>
      {loading && <Spinner />}
      {jokes
        .filter((x) => x.uid === loggedUser.uid)
        .map((joke) => {
          return (
            <>
              <Joke key={joke?.jokeId} data={joke} />
              {/* <Joke key={uuidv4()} data={joke} /> */}
              <div style={{ width: "50%", display: "flex" }}>
                <Button text={"Edit"} callback={() => editJoke(joke)} />
                <Button text={"Delete"} callback={() => deleteJoke(joke)} />
              </div>
            </>
          );
        })}
      <Button text={"Go, home"} callback={() => navigate("/user")} />
    </div>
  );
};

export default Collection;
