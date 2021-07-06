import React from "react";
import logo from "../img/logo.png";
import user from "../img/user-solid.svg";
import bag from "../img/shopping-bag-solid.svg";
import { Link, useHistory } from "react-router-dom";

const Navigation = () => {
  return (
      <div className="navigation">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <form action="">  
            <input type="text" name="" id="" placeholder="Buscar productos..." />
            <button type="submit" name="" id="" />
          </form>
          <div className="navigation-action">
              <img src={bag} alt="" />
              <Link to="/login">
                <img src={user} alt="" />
            </Link>
          </div>
      </div>
  );
};

export default Navigation;
