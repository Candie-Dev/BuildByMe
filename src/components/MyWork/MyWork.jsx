import React from "react";
import "./MyWork.css";
import myWorkData from "../../assets/MyWork";

const MyWork = () => {
  return (
    <div className="mywork" id="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {myWorkData.map((work, index) => (
          <div key={index} className="mywork-item">
            <img src={work.image} alt={work.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;

