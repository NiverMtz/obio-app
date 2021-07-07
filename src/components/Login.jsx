import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import google from "../img/google.svg";
import facebook from "../img/facebook.svg";

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
        <Link className="link" to="/home">
          <button className="is-secondary">Registrate gratis</button>
        </Link>
        <Link className="link" to="/home">
          <button>Iniciar sesión</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
