import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
