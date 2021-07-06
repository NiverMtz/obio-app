import React from 'react';
import user from "../img/user-solid.svg";
import bag from "../img/shopping-bag-solid.svg";
import home from "../img/home-solid.svg";
import { Link, useHistory } from "react-router-dom";

const Footer = () => {
    useHistory();
    return (
        <div className="footer">
            <Link className="link-mobile" to="/">
                <img src={home} alt="" />
                <p>Inicio</p>
            </Link>
            <Link className="link-mobile" to="/products">
                <img src={bag} alt="" />
                <p>Productos</p>
            </Link>
            <Link className="link-mobile" to="/bag">
                <img src={bag} alt="" />
                <p>Bolsa</p>
            </Link>
            <Link className="link-mobile" to="/login">
                <img src={user} alt="" />
                <p>Login</p>
            </Link>
        </div>
    )
}

export default Footer