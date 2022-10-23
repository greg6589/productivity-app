import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import Navigation from "../layouts/Navigation";
import Page from "../layouts/Page";
import User from "../components/User";
import UserContext from "../components/SettingsContext";

const App = () => {
  const [userLogged, setUserLogged] = useState(false);
  const [userName, setUserName] = useState("");

  function checkIsUser() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user !== null) {
      setUserLogged(true);
      setUserName(user);
    } else {
      setUserLogged(false);
    }
  }

  useEffect(() => {
    checkIsUser();
  }, []);

  return (
    <div className="App">
      <Router>
        <nav>{<Navigation />}</nav>
        <UserContext.Provider
          value={{
            setUserLogged,
            setUserName,
            userLogged,
            userName,
          }}
        >
          {userLogged === false ? (
            <User />
          ) : (
            <section className="page">{<Page userName={userName} />}</section>
          )}
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
