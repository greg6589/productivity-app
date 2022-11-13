import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./layouts/Navigation";
import Page from "./layouts/Pages";
import User from "./components/User/User";

import { useAuthContext } from "./Context/useAuthContext";
import style from "./App.module.css";

const App = () => {
  const { user } = useAuthContext();

  return (
    <div className={style.App}>
      <Router>
        <Navigation />
        {user ? <Page /> : <User />}
      </Router>
    </div>
  );
};
export default App;
