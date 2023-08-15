import React from "react";
import "./index.css";
import logo from "../../assets/logo.png";
import pizzabg from "../../assets/pizzabg.png";
import pizzabgsm from "../../assets/pizzabgsm.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-description-container">
        <img className="logo" src={logo} />
        <h1 className="hero-heading">
          Discover the <span className="hero-span">Best</span> Food and Drinks
        </h1>
        <p className="hero-para">
          Naturally made Healthcare Products for the better care & support of
          your body.
        </p>
        <button className="hero-button">Explore Now</button>
      </div>
      <div className="hero-image-container">
        <img className="hero-image" src={pizzabg} />
        <img className="hero-image-sm" src={pizzabgsm} />
        <button className="hero-image-button">Get in Touch</button>
      </div>
    </div>
  );
};

export default Hero;
