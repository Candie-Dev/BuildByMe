import React from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/mywork">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Link to="/contact" className="nav-connect">Connect with me</Link>

    </div>
  );
};

export default Navbar;
