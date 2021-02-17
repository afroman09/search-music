import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Search from "./components/Pages/Search/Search";
import ArtistSearch from "./components/Pages/ArtistSearch/ArtistSearch";
import TrackIdSearch from "./components/Pages/TrackIdSearch/TrackIdSearch";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/ArtistSearch" component={ArtistSearch} />
        <Route exact path="/TrackIdSearch" component={TrackIdSearch} />
      </Switch>
    </Router>
  );
};

export default App;
