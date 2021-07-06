import React from "react";
import bag from "../img/logo.png";
import { Link, useHistory } from "react-router-dom";
var btntxt = "Me lo llevo";

const Products = () => {
  return (
    <div className="yaaa">
      <div className="products-card">
        <div className="products-image">
          <img src={bag} alt="" />
        </div>
        <div className="products-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            laboriosam dolor molestias facilis obcaecati ipsum saepe veniam
            itaque, cupiditate praesentium tenetur accusamus hic distinctio
            quod, in ea. Debitis, atque minus.
          </p>
          <Link to="">
            <button type="submit" name="" id="">{btntxt}</button>
          </Link>
        </div>
      </div>
      <div className="products-card">
        <div className="products-image">
          <img src={bag} alt="" />
        </div>
        <div className="products-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            laboriosam dolor molestias facilis obcaecati ipsum saepe veniam
            itaque, cupiditate praesentium tenetur accusamus hic distinctio
            quod, in ea. Debitis, atque minus.
          </p>
          <Link to="">
          <button type="submit" name="" id="">{btntxt}</button>
          </Link>
        </div>
      </div>
      <div className="products-card">
        <div className="products-image">
          <img src={bag} alt="" />
        </div>
        <div className="products-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            laboriosam dolor molestias facilis obcaecati ipsum saepe veniam
            itaque, cupiditate praesentium tenetur accusamus hic distinctio
            quod, in ea. Debitis, atque minus.
          </p>
          <Link to="">
          <button type="submit" name="" id="">{btntxt}</button>
          </Link>
        </div>
      </div>
      <div className="products-card">
        <div className="products-image">
          <img src={bag} alt="" />
        </div>
        <div className="products-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            laboriosam dolor molestias facilis obcaecati ipsum saepe veniam
            itaque, cupiditate praesentium tenetur accusamus hic distinctio
            quod, in ea. Debitis, atque minus.
          </p>
          <Link to="">
            <button type="submit" name="" id="">{btntxt}</button>
          </Link>
        </div>
      </div>
      <div className="products-card">
        <div className="products-image">
          <img src={bag} alt="" />
        </div>
        <div className="products-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            laboriosam dolor molestias facilis obcaecati ipsum saepe veniam
            itaque, cupiditate praesentium tenetur accusamus hic distinctio
            quod, in ea. Debitis, atque minus.
          </p>
          <Link to="">
          <button type="submit" name="" id="">{btntxt}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
