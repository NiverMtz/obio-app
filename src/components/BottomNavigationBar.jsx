import React from 'react';
import { Link } from "react-router-dom";
import home from '../img/Icon-home.svg';
import lupa from '../img/Icon-lupa.svg';
import bolsa from '../img/Icon-bolsa.svg';

const BottomNavigationBar = () => {
    return (
        <div className="bottom-navbar">
            <Link className="navbar-link" to="/obio-app">
            <img src={home} alt=""/>
            <p>Inicio</p>
            </Link>
            <Link className="navbar-link" to="/obio-app">
            <img src={lupa} alt=""/>
            <p>Buscar</p>
            </Link>
            <Link className="navbar-link" to="/orden">
            <img src={bolsa} alt=""/>
            <p>Ordenes</p>
            </Link>
        </div>
    )
}

export default BottomNavigationBar