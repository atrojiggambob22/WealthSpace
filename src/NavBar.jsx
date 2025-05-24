import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div>
    <div style={{margin:'10px 50px', position:'relative',left:'1px',top:'20px',fontSize:'20px'}}>
      Wealth-<span style={{color:'green', fontWeight:'700'}}>Space</span> 
    </div>
      <div>
        <button className="menu-toggle" onClick={() => setIsOpen(true)}>
        ☰
      </button>

      <div className={`mobile-overlay ${isOpen ? "show" : ""}`} onClick={() => setIsOpen(false)}></div>

      <nav className={`mobile-navbar ${isOpen ? "open" : ""}`}>
        <div className="navbar-header">
          <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
          {/* <img src="/logo.png" alt="Logo" className="logo" /> */}
          <button className="search-btn">🔍</button>
        </div>

        <ul className="nav-links">
          <li>Find a Home</li>
          <li>Buying with DWH ▸</li>
          <li>Schemes & Offers ▸</li>
          <li>The Buying Process ▸</li>
          <li>Advice & Inspiration ▸</li>
        </ul>

        <div className="owners-hub">
          👤 <span>Owners Hub</span>
        </div>
      </nav>
      </div>
    </div>
      
    </>
  );
};

export default NavBar;
