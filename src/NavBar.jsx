import React, { useState } from "react";
import './NavBar.css' 

const NavBar = () => {
 
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo"> <span style={{fontWeight:'700'}}>Wealth-</span><span style={{color:"green"}}>Space</span> </div>
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

export default NavBar;
