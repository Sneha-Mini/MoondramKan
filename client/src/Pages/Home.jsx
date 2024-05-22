import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import './Home.css';
import Flipbook from '../Components/Flipbook';
import Footer from '../Components/Footer';
import pdfLarge from '../assets/Newspaper_large.pdf';
import pdfSmall from '../assets/Newspaper_small.pdf';

function Home() {
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
      <h2 className="heading" id="newspaper">
        Newspaper
      </h2>
      <div className="container">
        <Flipbook pdf={pdf} />
      </div>
      <Footer />
      <div className=".a" style={{ textAlign: 'right', marginRight: '10px' }}>
        <a href="https://dremerz.com/" style={{ fontSize: '14px', textDecoration: 'none', color: 'black' }}>
          Designed and Developed by DREMERZ CONSULTANCY & SERVICES
        </a>
      </div>
      <div className="footer-copyright">
        <p>© 2024 All Rights Reserved, Moondram Kan</p>
      </div>
    </div>
  );
}

export default Home;
