import React from "react";
import "./index.css";
import logo from "../../assets/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo-container">
        <img className="footer-logo" src={logo} />
      </div>
      <div className="footer-contact-container">
        <h1 className="footer-heading">Contact Us</h1>
        <a className="footer-para">
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </a>
        <a className="footer-para">example2020@gmail.com</a>
        <a className="footer-para">(904) 443-0343</a>
      </div>
      <div className="footer-contact-container">
        <h1 className="footer-heading">More</h1>
        <a className="footer-para">About Us</a>
        <a className="footer-para">Products</a>
        <a className="footer-para">Career</a>
        <a className="footer-para">Contact Us</a>
      </div>
      <div className="footer-social-container">
        <div className="social-order">
          <h1 className="footer-heading hide-heading">Social Links</h1>
          <div className="social-container">
            <AiOutlineInstagram />
            <AiOutlineTwitter />
            <FaFacebookF />
          </div>
        </div>
        <div className="copyright-container">
          <h1 className="footer-para">© 2022 Food Truck Example</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
