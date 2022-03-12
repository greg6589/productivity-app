import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import Navigation from "../layouts/Navigation";
import Page from "../layouts/Page";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Router>
          <nav>{<Navigation />}</nav>
          <section className="page">{<Page />}</section>
        </Router>
      </div>
    );
  }
}

export default App;
