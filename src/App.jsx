import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.jsx";

function App() {
  return (
    <React.Fragment>
      <Home></Home>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route> 
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;