import React, { useContext, useEffect, useState } from "react";
// Context
import { AuthContext } from "../../contexts/AuthContext";
import { JokeContext } from "../../contexts/JokeContext";
// Firebase
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../../firebase-config";
// Components
import Spinner from "../Spinner";
// Styles
import {
  Wrapper,
  Content,
  Title,
  Form,
  Label,
  Input,
  Select,
  Button,
} from "./Edit.styles.js";

const Edit = () => {
  const [allJokes, setAllJokes] = useState([]);
  const [setup, setSetup] = useState("");
  const [delivery, setDelivery] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  // const [errMessage, setErrMessage] = useState("");
  const { loggedUser } = useContext(AuthContext);
  console.log(loggedUser);
  const { failedJoke } = useContext(JokeContext);
  console.log(failedJoke);
  const jokesCollectionRef = collection(db, "jokes");

  useEffect(() => {
    const getJokes = async () => {
      const data = await getDocs(jokesCollectionRef);
      console.log(data);
      setAllJokes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getJokes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(allJokes);
    const uid = loggedUser.uid;
    console.log(uid);
    const jokeInQuestion = allJokes.filter(
      (joke) => joke.jokeId === failedJoke.jokeId
    )[0];
    console.log(jokeInQuestion);
    const newJoke = { ...jokeInQuestion };
    if (setup) newJoke.setup = setup;
    if (delivery) newJoke.delivery = delivery;
    if (category) newJoke.category = category;
    console.log(newJoke);
    console.log(newJoke.jokeId);
  };

  return (
    <>
      {loading && <Spinner />}
      <div>From the Edit!</div>
      <Wrapper>
        <Content>
          <Title>Edit your joke!</Title>
          <Form onSubmit={handleSubmit}>
            <Label>Setup:</Label>
            <Input
              type="text"
              name="setup"
              required
              defaultValue={failedJoke.setup}
              onChange={(event) => {
                setSetup(event.target.value);
              }}
            />
            <Label>Delivery:</Label>
            <Input
              type="text"
              name="delivery"
              defaultValue={failedJoke.delivery}
              onChange={(event) => {
                setDelivery(event.target.value);
              }}
            />
            <Label>Category:</Label>
            <Select
              id="category"
              name="category"
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            >
              <option value="Programming">Programming</option>
              <option value="Misc">Misc</option>
              <option value="Dark">Dark</option>
              <option value="Pun">Pun</option>
              <option value="Spooky">Spooky</option>
              <option value="Christmas">Christmas</option>
            </Select>

            <Button type="submit">Submit</Button>
          </Form>
        </Content>
      </Wrapper>
    </>
  );
};

export default Edit;
