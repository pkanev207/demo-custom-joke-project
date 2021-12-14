import React, { useContext, useEffect, useState } from "react";
// Context
import { JokeContext } from "../../contexts/JokeContext";
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
  const [loading, setLoading] = useState(false);

  const { failedJoke } = useContext(JokeContext);
  console.log(failedJoke);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
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
            />
            <Label>Delivery:</Label>
            <Input
              type="text"
              name="delivery"
              defaultValue={failedJoke.delivery}
            />
            <Label>Category:</Label>
            <Select id="category" name="category">
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
