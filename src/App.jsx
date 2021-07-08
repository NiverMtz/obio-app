import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Orden from "./components/Orden.jsx"

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/obio-app" component={Login}></Route> 
          <Route path="/home" component={Home}></Route>
          <Route path="/orden" component={Orden}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;