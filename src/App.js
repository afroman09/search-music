import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
// import SearchInput from "./components/Atoms/SearchInput";
// import StartButton from "./components/Atoms/StartButton";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <h1>好みの曲を知ろう</h1>
          <Route exact path="/Home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
