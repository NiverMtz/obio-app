import React from "react";
import Header from "../components/Header.jsx";
import BottomNavigationBar from "../components/BottomNavigationBar";

const Home = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
      <Header></Header>
      <input 
      className="location-bar"
      placeholder="Sta María la Ribera, CDMX 06400">
         {/* <img src={iconloc} alt="" />
        <p>Sta María la Ribera, CDMX 06400</p> */}
      </input>
      <div className="bloquecito"></div>
      <div className="bloquecito"></div>
      <div className="bloquecito"></div>
      <div className="bloquecito"></div>
      <div className="bloquecito"></div>
      <div className="bloquecito"></div>
      <div className="bloquecito"></div>
      <div className="bloquecito"></div>
      <div className="bloquecito"></div>
      <div className="bloquecito"></div>
      <div className="bloquecito"></div>
      <div className="bloquecito"></div>
      <div className="bloquecito"></div>
      </div>
      <BottomNavigationBar></BottomNavigationBar>
    </React.Fragment>
  );
};

export default Home;