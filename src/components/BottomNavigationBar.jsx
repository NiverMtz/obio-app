import React from 'react';
import { Link } from "react-router-dom";
import icon from '../img/Icon-location.png';

const BottomNavigationBar = () => {
    return (
        <div className="bottom-navbar">
            <Link className="navbar-link" to="/obio-app">
            <img src={icon} alt=""/>
            <p>Inicio</p>
            </Link>
            <Link className="navbar-link" to="/obio-app">
            <img src={icon} alt=""/>
            <p>Inicio</p>
            </Link>
            <Link className="navbar-link" to="/obio-app">
            <img src={icon} alt=""/>
            <p>Inicio</p>
            </Link>
        </div>
    )
}

export default BottomNavigationBar