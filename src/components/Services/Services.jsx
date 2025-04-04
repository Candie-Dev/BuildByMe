
import React from "react";
import "./Services.css";
import services from "../../assets/Services"; 

const Services = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>

      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;



