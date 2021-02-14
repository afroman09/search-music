import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Templates/Home";
import Search from "./components/Templates/Search";
import ArtistSearch from "./components/Templates/ArtistSearch";
import TrackIdSearch from "./components/Templates/TrackIdSearch";
import ScrollTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
  return (
    <Router>
      <ScrollTop />
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
