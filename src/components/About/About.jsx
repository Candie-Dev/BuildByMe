import React from "react";
import './About.css';
import photo from '../../assets/photo.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>

      <div className="about-section">
       
        <div className="about-left">
          <img src={photo} alt="Profile" className="about-photo" />
        </div>

  
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm an experienced React developer with a strong passion for building interactive and efficient web applications. My journey in web development has been driven by curiosity, creativity, and a commitment to mastering modern technologies.
            </p>

            <p>
              With experience in JavaScript, React, and UI/UX principles, I strive to create seamless digital experiences. I enjoy solving complex problems, optimizing performance, and continuously learning to stay ahead in the ever-evolving tech world.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;

