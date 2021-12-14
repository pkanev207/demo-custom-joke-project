import React from "react";
// Firebase
import { auth } from "../firebase-config";

const About = () => {
  const user = auth.currentUser;
  console.log(user);

  return <div>What is this all about?</div>;
};

export default About;
