import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import './Magazine.css';
import Flipbook from '../Components/Flipbook';
import Footer from '../Components/Footer';
import pdfLarge from '../assets/Magazine_large.pdf';
import pdfSmall from '../assets/Magazine_small.pdf';

function Magazine() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pdf = windowWidth <= 768 ? pdfSmall : pdfLarge;

  return (
    <div>
      <Navbar />
      <h2 className="heading">Magazine</h2>
      <div className="container">
        <Flipbook pdf={pdf} />
      </div>
      <Footer />
      <div className="footer-copyright">
        <p>© 2024 All Rights Reserved, Moondram Kan</p><p style={{ marginBottom: '2px',}}>Designed and Developed by<br/>
        </p><a href="https://dremerz.com/" style={{ textDecoration: 'none',}}>
          DREMERZ CONSULTANCY & SERVICES
        </a>
      </div>
    </div>
  );
}

export default Magazine;
