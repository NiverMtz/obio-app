import React from 'react';
import user from "../img/user-solid.svg";
import bag from "../img/shopping-bag-solid.svg";
import home from "../img/home-solid.svg";
import { useHistory } from "react-router";

const Footer = () => {
    useHistory();
    return (
        <div className="footer">
            <img  src={home} alt="" />
            <img  src={user} alt="" />
            <img  src={bag} alt="" />
        </div>
    )
}

export default Footer