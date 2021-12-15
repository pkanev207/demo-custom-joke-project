import React, { useContext, useState } from "react";
// Context
import { JokeContext } from "../../contexts/JokeContext";
// Routing
import { useNavigate } from "react-router-dom";
// Firebase
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config";
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
  let navigate = useNavigate();
  const [setup, setSetup] = useState("");
  const [delivery, setDelivery] = useState("");
  const [category, setCategory] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [errMessage, setErrMessage] = useState("");
  const { failedJoke } = useContext(JokeContext);
  console.log(failedJoke);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newJoke = { ...failedJoke };
    if (setup) newJoke.setup = setup;
    if (delivery) newJoke.delivery = delivery;
    if (category) newJoke.category = category;
    await updateDoc(doc(db, "jokes", failedJoke.id), newJoke);
    navigate("/collection");
  };

  return (
    <>
      {/* {loading && <Spinner />} */}
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
