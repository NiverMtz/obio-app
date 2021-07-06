import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio.jsx";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/" component={Inicio}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </React.Fragment>
  );
}

export default App;
