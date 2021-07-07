import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Inicio.jsx";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </React.Fragment>
  );
}

export default App;