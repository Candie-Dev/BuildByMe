import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

