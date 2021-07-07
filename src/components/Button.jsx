import React from "react";
import { Link } from "react-router-dom";
var type = "";

const Button = (props) => {
  if(props.type === "2") {
    type = "is-secondary";
  } else if (props.type === "1") {
    type = "";
  }
    return (
        <Link className="link" to="/home">
          <button className={type}>Iniciar sesión</button>
        </Link>
    );
};

export default Button;
