import React, { useState } from "react";
import { auth } from "../firebaseconfig";
import { useHistory } from 'react-router';

const Login = () => {
    const historial = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msgError, setMsgError] = useState(null);

  const RegistrarUsuario = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((r) => {
          historial.push('/')
      })
      .catch((e) => {
        if (e.code === "auth/invalid-email") {
          setMsgError("Formato de email incorrecto");
        }
        if (e.code === "auth/weak-password") {
          setMsgError("Password debe tener 6 caracteres o más");
        }   
      });
  };

  const LoginUsuario = () => {
      auth.signInWithEmailAndPassword(email, pass)
      .then((r)=>{
        historial.push('/')
      })
      .catch((err)=>{
          if(err.code === 'auth/wrong-password'){
              setMsgError('Password incorrecta')
          }
      })
  }

    return (
        <div className="yaaa">
             <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form onSubmit={RegistrarUsuario} className="form-group d-grid">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            type="email"
            placeholder="Intro email"
          />
          <input
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className="form-control mt-4"
            type="password"
            placeholder="Intro password"
          />
          <input
            className="btn btn-dark mt-4"
            type="submit"
            value="Registrar usuario"
          />
        </form>
        <div className='d-grid'>
            <button 
            onClick={LoginUsuario}
            className='btn btn-success mt-4'>Iniciar sesión</button>
            {msgError != null ? <div className='d-grid mt-4 alert alert-dark'>{msgError}</div> : <div></div>}
        </div>
      </div>
      <div className="col"></div>
    </div>
        </div>
    )
}

export default Login
