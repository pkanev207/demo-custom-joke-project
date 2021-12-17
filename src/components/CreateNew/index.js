import React, { useContext } from "react";
// Context
import { AuthContext } from "../../contexts/AuthContext";
// Routing
import { useNavigate } from "react-router-dom";
// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
// Hooks
import { useForm } from "react-hook-form";
// Validation
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
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
  ErrorMessage,
} from "./CreateNew.styles";

const schema = yup.object().shape({
  setup: yup.string().required("The joke must have setup!"),
  delivery: yup.string(),
  category: yup.string().ensure(),
  // delivery: yup.string().oneOf([yup.ref("setup"), null]),
});

const CreateNew = () => {
  let navigate = useNavigate();
  const { loggedUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFormHandler = async (data) => {
    // console.log(data);
    // here goes the fetch
    const { setup, delivery, category } = data;
    // console.log(setup, delivery, category);
    const { uid, email, displayName } = loggedUser;
    console.log(uid, email, displayName);
    const jokeId = uuidv4();
    // console.log(jokeId);

    // try {
    //   const jokesCollectionRef = await collection(db, "jokes");
    //   await addDoc(jokesCollectionRef, { ...joke, uid, email });
    //   console.log(jokesCollectionRef);
    //   console.log("Document written with ID: ", jokesCollectionRef.id);
    //   navigate("/collection");
    // } catch (err) {
    //   console.error("Error adding document: ", err);
    // }

    if (setup === "" && !setup) {
      // NOT WORKING!!!
      alert("There is no setup for the joke!");
      navigate("/home");
    } else {
      try {
        const jokeData = await addDoc(collection(db, "jokes"), {
          setup,
          delivery,
          category,
          uid,
          email,
          jokeId,
          displayName
        });
        console.log(jokeData);
        console.log("Document written with ID: ", jokeData.id);
        navigate("/collection");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  // const jokesCollectionRef = collection(db, "jokes");
  // const createJoke = async (joke) => {
  //   const { uid: creatorId, email } = loggedUser;
  //   console.log(creatorId, email);
  //   await addDoc(jokesCollectionRef, { ...joke, creatorId, email });
  //   navigate("/collection");
  // };

  return (
    <Wrapper>
      <Content>
        <Title>New Joke!</Title>
        <Form onSubmit={handleSubmit(submitFormHandler)}>
          <Label>Tell your wits:</Label>
          <Input
            type="text"
            name="setup"
            required
            placeholder="Setup(required)..."
            {...register("setup")}
          />
          <ErrorMessage>{errors.setup?.message}</ErrorMessage>
          <Label>Punchline:</Label>
          <Input
            type="text"
            name="delivery"
            placeholder="Delivery(optional)..."
            {...register("delivery")}
          />
          <p>{errors.delivery?.message}</p>
          <Label>Category:</Label>
          <Select id="category" name="category" {...register("category")}>
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
  );
};

export default CreateNew;
