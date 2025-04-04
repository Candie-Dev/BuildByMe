import React from "react";
import "./Footer.css";
import { FaReact, FaEnvelope } from "react-icons/fa"; // Import React icons

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <FaReact size={50} color="#61DAFB" /> 
          <p>
            I'm a Frontend Developer from Georgia, specializing in creating
            responsive and visually appealing web applications.
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <FaEnvelope size={20} color="#fff" /> 
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
     
      <div className="footer-bottom"></div>
      <p className="footer-bottom-left">Temur Bolkvadze © 2025. All rights reserved.</p>
         <div className="footer-bottom-right">
         <p>Terms & Conditions</p>
         <p>Privacy & Data Protection</p>
         <p>Get in Touch</p>

         </div>
    </div>
  );
};

export default Footer;
