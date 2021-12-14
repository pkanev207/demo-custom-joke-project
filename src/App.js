import React, { useEffect, useState } from "react";
// Context
import { AuthContext } from "./contexts/AuthContext";
import { JokeContext } from "./contexts/JokeContext";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Firebase
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase-config";
// Components
import Header from "./components/Header";
import Home from "./components/Home";
import User from "./components/User";
import About from "./components/About";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard";
import Collection from "./components/Collection";
import CreateNew from "./components/CreateNew";
import Edit from "./components/Edit";
import FOF from "./components/FOF";
// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [failedJoke, setFailedJoke] = useState({});

  useEffect(() => {
    let isLogged = false;

    if (!isLogged) {
      onAuthStateChanged(auth, setLoggedUser);
    }

    return () => (isLogged = true);
  }, []);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (authUser) => {
  //     if (authUser) {
  //       console.log("Logged In");
  //       setUser(authUser);
  //     } else {
  //       console.log("Logged Out");
  //       setUser(null);
  //     }
  //   });
  // }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ loggedUser, setLoggedUser }}>
        <JokeContext.Provider value={{ failedJoke, setFailedJoke }}>
          <Router>
            <Header user={loggedUser} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user" element={<User />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/create" element={<CreateNew />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="*" element={<FOF />} />
            </Routes>

            <GlobalStyle />
          </Router>
        </JokeContext.Provider>
      </AuthContext.Provider>
    </div>
  );
};

export default App;

// test@abv.bg
// asdasd
