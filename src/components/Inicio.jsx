import React from 'react';
import { Fragment } from 'react-is';
import user from "../img/user-solid.svg";
import { Link, useHistory } from "react-router-dom";

const Inicio = () => {
    return (
        <div className="yaaa">
            <div className="block">
            <Link id="prod" className="link-mobile" to="/login">
                <img src={user} alt="" />
                <p>Soy Productor</p>
            </Link>
            </div>
            <div className="block">
            <Link id="categ" className="grid-prod" to="/login">
                <div className="row-a">
                    <div className="row1">
                        <img src={user} alt="" />
                        <p>Café</p>
                    </div>
                    <div className="row2">
                        <img src={user} alt="" />
                        <p>Catego</p>
                    </div>
                </div>
                <div className="row-b">
                    <div className="row3">
                        <img src={user} alt="" />
                        <p>Catego</p>
                    </div>
                    <div className="row3">
                        <img src={user} alt="" />
                        <p>Catego</p>
                    </div>
                </div>
            </Link>
            </div>
            <div className="block">
            <Link id="categ" className="link-mobile" to="/login">
            <div className="row-a">
                    <div className="row1">
                        <img src={user} alt="" />
                        <p>Catego</p>
                    </div>
                    <div className="row2">
                        <img src={user} alt="" />
                        <p>Catego</p>
                    </div>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Inicio
