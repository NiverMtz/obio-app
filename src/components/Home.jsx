import React from "react";
import user from "../img/user-solid.svg";
import logo from "../img/logo.png";

const Home = () => {
  return (
    <div className="header">
      <div className="header-tittle">
        <h1>Bazar</h1>
        <img src={user} alt="" />
      </div>
      <div className="header-form">
        <form action="">
          <input
            type="text"
            name=""
            id=""
            placeholder="Sta María la Ribera, CDMX 06400"
          />
        </form>
      </div>

      <h2>Categorías</h2>
      <div className="category">
        <div className="category-product">
          <img src={logo} alt="" />
          <p>Miel</p>
        </div>
        <div className="category-product">
          <img src={logo} alt="" />
          <p>Café</p>
        </div>
        <div className="category-product">
          <img src={logo} alt="" />
          <p>Artesanías</p>
        </div>
        <div className="category-product">
          <img src={logo} alt="" />
          <p>Herbolaria</p>
        </div>
        <div className="category-product">
          <img src={logo} alt="" />
          <p>Cacao</p>
        </div>
        <div className="category-product">
          <img src={logo} alt="" />
          <p>Salud</p>
        </div>
      </div>
      <div className="cards">
        <div className="card-n">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            soluta beatae explicabo id aspernatur ipsum natus similique
            voluptates mollitia sit impedit aut dolores consequuntur qui amet
            fuga, ad enim omnis.
          </p>
        </div>
        <div className="card-n">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            soluta beatae explicabo id aspernatur ipsum natus similique
            voluptates mollitia sit impedit aut dolores consequuntur qui amet
            fuga, ad enim omnis.
          </p>
        </div>
        <div className="card-n">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            soluta beatae explicabo id aspernatur ipsum natus similique
            voluptates mollitia sit impedit aut dolores consequuntur qui amet
            fuga, ad enim omnis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
