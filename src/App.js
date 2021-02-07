import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Templates/Home";
import Search from "./components/Templates/Search";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Search" component={Search} />
      </Switch>
    </Router>
  );
};

export default App;
