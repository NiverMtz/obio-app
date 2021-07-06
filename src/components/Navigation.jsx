import React from "react";
import logo from "../img/logo.png";
import user from "../img/user-solid.svg";
import bag from "../img/shopping-bag-solid.svg";

const Navigation = () => {
  return (
      <div className="navigation-setting navbar">
        <div className="container-fluid">
            <div>
                <img  className="logo-size" src={logo} alt="" />
            </div>
          <form className="d-grid gap-2 col-4 mx-auto mt-2">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar productos, categorías y más.."
              aria-label="Search"
            />
          </form>
          <div className="d-flex gap-4">
                <img  className="icon-size" src={bag} alt="" />
                <img  className="icon-size" src={user} alt="" />
            </div>
        </div>
      </div>
  );
};

export default Navigation;
