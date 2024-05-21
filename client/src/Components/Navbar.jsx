import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import icon1 from '../assets/icon1.png'; 
import icon2 from '../assets/icon2.png'; 
import icon3 from '../assets/icon3.png'; 
import logo from '../assets/logo.jpg'; 
import pdf from '../assets/sample.pdf';

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  
  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdf; 
    link.setAttribute('download', 'newspaper.pdf'); 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
  };
  
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-column">
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            <img src={icon1} alt="Icon 1" className="navbar-icon" />
          </a>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            <img src={icon2} alt="Icon 2" className="navbar-icon" />
          </a>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            <img src={icon3} alt="Icon 3" className="navbar-icon" />
          </a>
        </div>
        <div className="navbar-column">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-column third-column">
          <button className="epaper-button" onClick={handleDownload}>E Paper</button>
          <p className="date-text">{formattedDate}</p>
        </div>
      </nav>
      <div className="toggle-menu" onClick={toggleNavLinks}>
          <div className={`bar1 ${showNavLinks ? 'change' : ''}`}></div>
          <div className={`bar2 ${showNavLinks ? 'change' : ''}`}></div>
          <div className={`bar3 ${showNavLinks ? 'change' : ''}`}></div>
      </div>
      <nav className={`nav-links ${showNavLinks ? 'show' : ''}`}>
      <Link to="/Home" className="nav-link">Home</Link>
      <Link to="/Home" className="nav-link">Newspaper</Link>
        <Link to="/Magazine" className="nav-link">Magazine</Link>
        <Link to="/About" className="nav-link">About Us</Link>
        <Link to="/Ourteam" className="nav-link">Our Team</Link>
      </nav>
    </div>
  );
};

export default Navbar;
