import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import './Flashnews.css'; // Assuming you have a CSS file for Flashnews styles
import Footer from '../Components/Footer';
import axios from 'axios';

function Flashnews() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [pdf, setPdf] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        let pdfUrl = '';
        if (windowWidth <= 768) {
          // Fetch PDF for mobile view
          const response = await axios.get('https://dremerz-erp.com/api/MoondramkanFlashMobilePDF/');
          pdfUrl = response.data[0].pdf;
        } else {
          // Fetch PDF for desktop view
          const response = await axios.get('https://dremerz-erp.com/api/MoondramkanFlashDeskTopPDF/');
          pdfUrl = response.data[0].pdf;
        }
        setPdf(pdfUrl);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };

    fetchPdf();
  }, [windowWidth]);

  return (
    <div>
      <Navbar />
      <h2 className="heading" id="flashnews">
        Flash News
      </h2>
      <div className="container">
        {pdf && <img src={pdf} alt="Flash News" />} {/* Render PDF as a single image */}
      </div>
      <Footer />
      <div className=".a" style={{ textAlign: 'right', marginRight: '10px' }}>
      </div>
      <div className="footer-copyright">
        <p>© 2024 All Rights Reserved, Moondram Kan</p>
        <p style={{ marginBottom: '2px' }}>Designed and Developed by<br /></p>
        <a href="https://dremerz.com/" style={{ textDecoration: 'none' }}>
          DREMERZ CONSULTANCY & SERVICES
        </a>
      </div>
    </div>
  );
}

export default Flashnews;
