import React, { useContext, useState, useEffect } from "react";
// Routing
import { Navigate } from "react-router-dom";
// Context
import { AuthContext } from "../contexts/AuthContext";
// Firebase
// import { onAuthStateChanged } from "@firebase/auth";
// import { auth } from "../firebase-config";

const Private = ({ children }) => {
  const { loggedUser } = useContext(AuthContext);

  return () => {
    return loggedUser ? children : <Navigate to="/login" />;
  };
};

export default Private;

// import {
//   Routes,
//   Route,
//   BrowserRouter,
//   Link,
//   Navigate,
//   Outlet
// } from "react-router-dom";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <MyMenu />
//       <Routes>
//         <Route path="/" element={<Public />} />
//         <Route path="/private-outlet" element={<PrivateOutlet />}>
//           <Route path="" element={<Private />} />
//         </Route>
//         <Route
//           path="/private-nested"
//           element={
//             <PrivateRoute>
//               <Private />
//             </PrivateRoute>
//           }
//         />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const Public = () => <div>public</div>;
// const Private = () => <div>private</div>;
// const Login = () => <div>login</div>;

// function PrivateOutlet() {
//   const auth = useAuth();
//   return auth ? <Outlet /> : <Navigate to="/login" />;
// }

// function PrivateRoute({ children }) {
//   const auth = useAuth();
//   return auth ? children : <Navigate to="/login" />;
// }

// function useAuth() {
//   return true;
// }

// function MyMenu() {
//   return (
//     <nav>
//       <Link to="/">Public</Link>
//       {" | "}
//       <Link to="/private-nested">Private Using Nested</Link>
//       {" | "}
//       <Link to="/private-outlet">Private Using Outlet</Link>
//     </nav>
//   );
// }
