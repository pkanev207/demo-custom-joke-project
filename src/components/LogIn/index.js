import React from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
// Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// Styles
import "./LogIn.css";

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(6).max(15).required(),
  // confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  let navigate = useNavigate();

  const submitFormHandler = (data) => {
    console.log(data);
    // here goes the fetch

    let { email, password, confirmPassword } = data;
    console.log(email, password, confirmPassword);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="Form">
      <div className="title">Log In</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitFormHandler)}>
          <input
            type="text"
            name="email"
            placeholder="Email..."
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          {/* <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword && "Passwords Should Match!"}</p> */}
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
};

export default LogIn;
