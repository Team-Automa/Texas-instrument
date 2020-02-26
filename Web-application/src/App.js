import React from "react";
import "./styles.css";
import Home from "./component/Home";
import { ControlApp, Context } from "./Context/context";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <ControlApp>
      <Router>
        <div className="App" />
        <Home />
      </Router>
    </ControlApp>
  );
};

export default App;
