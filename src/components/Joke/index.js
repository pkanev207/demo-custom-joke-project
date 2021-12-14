import React from "react";

const Joke = ({ data }) => {
  // console.log(data);

  return (
    <div>
      <span>{data?.setup}</span>
      <br />
      <span>{data?.delivery}</span>
      <span>{data?.joke}</span>
    </div>
  );
};

export default Joke;
