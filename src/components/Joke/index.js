import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper, Speech, Image, Label } from "./Joke.styles";
// API
// https://robohash.org

const Joke = ({ data }) => (
  <Wrapper>
    <Speech>
      <Label>
        <span id="setup">{data?.setup}</span>
        <br />
        <span id="delivery">{data?.delivery}</span>
        <span data-testid="joke">{data?.joke}</span>
      </Label>
    </Speech>
    <Image src={`https://robohash.org/${data?.id}`} alt={data?.value} />
  </Wrapper>
);

Joke.propTypes = {
  data: PropTypes.object,
};

export default Joke;
