import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import icon1 from '../assets/icon1.png'; 
import icon2 from '../assets/icon2.png'; 
import icon3 from '../assets/icon3.png'; 
import logo from '../assets/logo.jpg'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-column logo-column">
                <img src={logo} alt="Logo" className="footer-logo" />
            </div>
            <div className="footer-column">
                <h2 className="footer-heading">Section</h2>
                <ul className="footer-list">
                <li className="footer-item"><Link to="/Home"><a href="#home">Home</a></Link></li>
                <li className="footer-item"><Link to="/About"><a href="#about-us">About Us</a></Link></li>
                <li className="footer-item"><Link to="/Ourteam"><a href="#our-team">Our Team</a></Link></li>
                </ul>
            </div>
            <div className="footer-column">
                <h2 className="footer-heading">Services</h2>
                <ul className="footer-list">
                <li className="footer-item"><Link to="/Home"><a href="#daily-newspaper">Daily Newspaper</a></Link></li>
                <li className="footer-item"><Link to="/Magazine"><a href="#magazine">Magazine</a></Link></li>
                </ul>
            </div>
            <div className="footer-column">
                <h2 className="footer-heading">Follow Us</h2>
                <p className="footer-text">Get the latest news and updates by following our social channels:</p>
                <div className="footer-icons">
                    <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                        <img src={icon1} alt="Social Icon 1" className="footer-icon" />
                    </a>
                    <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                        <img src={icon2} alt="Social Icon 2" className="footer-icon" />
                    </a>
                    <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                        <img src={icon3} alt="Social Icon 3" className="footer-icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
