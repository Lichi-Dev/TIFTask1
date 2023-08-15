import React from "react";
import "./index.css";
import about from "../../assets/about.png";

const AboutUs = () => {
  return (
    <div className="about-container">
      <img className="about-image" src={about} />
      <div className="about-description-container">
        <h1 className="about-heading">About Us</h1>
        <p className="about-para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button className="about-button">Read More</button>
      </div>
    </div>
  );
};

export default AboutUs;
