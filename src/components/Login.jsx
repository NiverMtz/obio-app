import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import google from "../img/google.svg";
import facebook from "../img/facebook.svg";
import Button from "../components/Button"

const Login = () => {
  return (
    <div>
      <div className="container">
        <img src={logo} alt="" />
        <div className="buttons">
        <Link className="link" to="/home">
          <button>
            <img src={google} alt="" />Continua con Google
          </button>
        </Link>
        <Link className="link" to="/home">
          <button>
              <img src={facebook} alt="" />Continua con Facebook
          </button>
        </Link>
        <Button type="2"></Button>
        <Button type="1"></Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
