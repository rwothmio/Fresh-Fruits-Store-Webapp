import React from "react";
import "./hero.css";
import juice from "../../assets/images/fruit-products/juice.jpg";
import Product from "../fruit-products-card/Product";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__bg">
        <div className="hero__bg-overlay"></div>
      </div>
      <div className="hero__products">
        {/* <Product img={juice} />
        <Product img={juice} />
        <Product img={juice} /> */}
      </div>
    </div>
  );
}

export default Hero;
