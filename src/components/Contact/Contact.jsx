import React, { useState } from "react"; // Import useState
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import photo from '../../assets/photo.jpg';

const Contact = () => {
  const [result, setResult] = useState(""); // Fix: Define state for result message

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "381864ec-1b7b-4de3-bddc-0da66df171bb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={photo} alt="Contact" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>We'd Love to Hear From You</h1>
          <p>Feel free to reach out with any questions or feedback. Our team is here to assist you.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <FaEnvelope /> <p>Bolkvadzetem@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FaPhone /> <p>+995 596 66 11 66</p>
            </div>
            <div className="contact-detail">
              <FaMapMarkerAlt /> <p>Georgia, Tbilisi</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"/>
            <label>Your Email</label>
            <input type="email" placeholder="Enter your email" name="email"/>
            <label>Write your message here</label>
            <textarea name="message" rows={8} placeholder="Enter your message"></textarea>
            <button type="submit" className="contact-submit">Submit now</button>
            <p>{result}</p> {/* Display form result message */}
        </form>
      </div>
    </div>
  );
};

export default Contact;

