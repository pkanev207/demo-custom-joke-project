import React from "react";
// Styles
import { Wrapper, Speech, Image, Label } from "./Joke.styles";
// API
// https://robohash.org

const Joke = ({ data }) => (
  <Wrapper>
    <Speech>
      <Label>
        <span>{data?.setup}</span>
        <br />
        <span>{data?.delivery}</span>
        <span>{data?.joke}</span>
      </Label>
    </Speech>
    <Image src={`https://robohash.org/${data?.id}`} alt={data?.value} />
  </Wrapper>
);

export default Joke;
