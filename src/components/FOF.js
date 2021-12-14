// import React from "react";
// import { useNavigate, Navigate } from "react-router-dom";
// import styled from "styled-components/macro";

// const Button = styled.button``;

// const FOF = () => {
//   let navigate = useNavigate();

//   return (
//     <>
//       <h3>Make the 404 pages great again!</h3>
//       <Button
//         onClick={() => {
//           navigate("/");
//         }}
//       >
//         Go home, dude!
//       </Button>
//     </>
//   );
// };

// export default FOF;

// import React from 'react';
// import { Redirect } from 'react-router-dom';

// class FOF extends React.Component {
//     state = {
//         redirect: false,
//     };

//     componentDidMount() {
//         setTimeout(() => this.setState({ redirect: true }), 3000);
//     }

//     render() {
//         return this.state.redirect
//             ? (<Redirect to='/' />)
//             : (<div>Make 404 pages great again!</div>);
//     }
// }

// export default FOF;

import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const FOF = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let t = setTimeout(() => setRedirect(true), 3000);

    return () => clearTimeout(t);
  }, [redirect, setRedirect]);

  return redirect ? (
    <Navigate to="/" />
  ) : (
    <h3 style={{ textAlign: "center" }}>Make the 404 pages great again!</h3>
  );
};

export default FOF;
