import React, { useEffect, useState } from "react";
// Routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// Context
import { AuthContext } from "./contexts/AuthContext";
import { JokeContext } from "./contexts/JokeContext";
// Firebase
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase-config";
// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import User from "./components/User";
import About from "./components/About";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import JokeBoard from "./components/JokeBoard";
import Dashboard from "./components/Dashboard";
import Collection from "./components/Collection";
import CreateNew from "./components/CreateNew";
import Edit from "./components/Edit";
import Footer from "./components/Footer";
import CustomErrorBoundary from "./components/CustomErrorBoundary";
// import Private from "./hoc/Private";
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

  function Private({ children }) {
    return loggedUser ? children : <Navigate to="/login" />;
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{ loggedUser, setLoggedUser }}>
        <JokeContext.Provider value={{ failedJoke, setFailedJoke }}>
          <Router>
            <Navbar user={loggedUser} />
            <CustomErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/user"
                  element={
                    <Private>
                      <User />
                    </Private>
                  }
                />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/jokeboard" element={<JokeBoard />} />
                <Route
                  path="/dashboard"
                  element={
                    <Private>
                      <Dashboard />
                    </Private>
                  }
                />
                <Route
                  path="/collection"
                  element={
                    <Private>
                      <Collection />
                    </Private>
                  }
                />
                <Route
                  path="/create"
                  element={
                    <Private>
                      <CreateNew />
                    </Private>
                  }
                />
                <Route
                  path="/edit"
                  element={
                    <Private>
                      <Edit />
                    </Private>
                  }
                />
                <Route path="*" element={<FOF />} />
              </Routes>
            </CustomErrorBoundary>
            <Footer />
            <GlobalStyle />
          </Router>
        </JokeContext.Provider>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
