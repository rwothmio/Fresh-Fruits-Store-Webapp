import React from "react";
import "./main.css";
import TopProducts from "../../components/top-products-section/TopProducts";
import SuggestedProducts from "../../components/suggested-products-section/SuggestedProducts";
import Hero from "../../components/hero/Hero";

function Main() {
  return (
    <div className="main">
      <Hero />
      <TopProducts />
      <SuggestedProducts />
    </div>
  );
}

export default Main;
