import React from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Hooks
// import { useState } from "react";
import { useForm } from "react-hook-form";
// Firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase-config";
// Validators
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// Styles
import "./Register.css";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be provided please."),
  lastName: yup.string().required("Last Name should be provided please."),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(6).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  let navigate = useNavigate();

  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  //   console.log(currentUser);
  // });

  const submitFormHandler = (data) => {
    // console.log(typeof data, data);
    // here goes the fetch request

    let { firstName, lastName, email, age, password, confirmPassword } = data;
    console.log(firstName, lastName, email, age, password, confirmPassword);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        const user = userCredential.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: `${firstName} ${lastName}`,
          photoURL: "",
        })
          .then(() => {
            // Profile updated!
            navigate("/");
          }).catch((err) => {
            // An error occurred
            console.log(err);
          });
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
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitFormHandler)}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name..."
            {...register("firstName")}
          // ref={register}
          // ref={register("firstName")}
          />
          <p>{errors.firstName?.message}</p>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name..."
            {...register("lastName")}
          />
          <p>{errors.lastName?.message}</p>
          <input
            type="text"
            name="email"
            placeholder="Email..."
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <input
            type="text"
            name="age"
            placeholder="Age, please..."
            {...register("age")}
          />
          <p>{errors.age?.message}</p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword && "Passwords Should Match!"}</p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Register;

// First
// Second
// first@abv.bg
// "asdasd"
