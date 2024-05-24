import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import './Magazine.css';
import Flipbook from '../Components/Flipbook';
import Footer from '../Components/Footer';
import axios from 'axios'; // Import Axios

function Magazine() {
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
    axios.get("https://dremerz-erp.com/api/MoondramkanMagazineMobilePDF/")
      .then((res) => {
        const mobilePdfUrl = res.data[0].pdf;
        axios.get("https://dremerz-erp.com/api/MoondramkanMagazineDeskTopPDF/")
          .then((res) => {
            const desktopPdfUrl = res.data[0].pdf;
            const selectedPdf = windowWidth <= 768 ? mobilePdfUrl : desktopPdfUrl;
            setPdf(selectedPdf);
          })
          .catch((error) => {
            console.error('Error fetching desktop PDF:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching mobile PDF:', error);
      });
  }, [windowWidth]); 

  return (
    <div>
      <Navbar />
      <h2 className="heading">Magazine</h2>
      <div className="container">
        <Flipbook pdf={pdf} />
      </div>
      <Footer />
      <div className="footer-copyright">
        <p>© 2024 All Rights Reserved, Moondram Kan</p>
        <p style={{ marginBottom: '2px',}}>Designed and Developed by<br/></p>
        <a href="https://dremerz.com/" style={{ textDecoration: 'none',}}>
          DREMERZ CONSULTANCY & SERVICES
        </a>
      </div>
    </div>
  );
}

export default Magazine;
