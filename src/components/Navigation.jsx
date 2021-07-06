import React from "react";
import logo from "../img/logo.png";
import user from "../img/user-solid.svg";
import bag from "../img/shopping-bag-solid.svg";

const Navigation = () => {
  return (
      <div className="navigation">
          <img src={logo} alt="" />
          <form action="">  
            <input type="text" name="" id="" placeholder="Buscar productos..." />
            <button type="submit" name="" id="" />
          </form>
          <div className="navigation-action">
              <img src={bag} alt="" />
              <img src={user} alt="" />
          </div>
      </div>
  );
};

export default Navigation;
