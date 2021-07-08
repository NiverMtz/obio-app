import React from "react";
import { Link } from "react-router-dom";

const Orden = () => {
  return (
    <div className="wrapper">
      <div className="orden">
        <div className="orden-precios">
            <h2>Presentaciones</h2>
            <Link to="/home">
                Regresar
            </Link>
        </div>
        {/* Falta convertir en componente */}
        <form className="orden-comentarios">
              <input type="radio" id="html" name="fav_language" value="HTML"/>
              <label for="html">HTML</label><br />
              <input type="radio" id="css" name="fav_language" value="CSS"/>
              <label for="css">CSS</label><br />
              <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
              <label for="javascript">JavaScript</label>
        </form>
        <div className="orden-boton">

        </div>
      </div>
    </div>
  );
};

export default Orden;
