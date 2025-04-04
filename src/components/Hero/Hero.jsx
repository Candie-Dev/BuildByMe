import React from "react";
import { Link } from "react-router-dom"; 
import "./Hero.css";
import photo from "../../assets/photo.jpg";
import resume from "../../assets/Temur Bolkvadze.pdf"; 

const Hero = () => {
  return (
    <div className="hero">
      <img className="photo" src={photo} alt="Temur" />
      <h1>
        <span>I'm Temur Bolkvadze,</span> frontend developer based in Georgia
      </h1>
      <p>
        Passionate about creating intuitive and dynamic user interfaces. I specialize in React, HTML, CSS, and JavaScript, and I strive to deliver clean, responsive, and high-performance websites. My goal is to transform ideas into seamless digital experiences.
      </p>
      <div className="hero-action">
        <Link to="/contact" className="hero-connect">Connect with me</Link>
        <a href={resume} download="Temur Bolkvadze.pdf" className="hero-resume">
          My resume
        </a>
        <a href="https://www.linkedin.com/in/temur-bolkvadze-548474304/" className="linkedin">
          LinkedIn
        </a>
        <a href="https://github.com/Candie-Dev" className="github">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Hero;
