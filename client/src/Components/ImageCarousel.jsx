import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [responsiveView, setResponsiveView] = useState(false);
  
    const goToNextPage = () => {
      setCurrentPage(currentPage === images.length - 1 ? 0 : currentPage + 1);
    };
    
    const goToPrevPage = () => {
      setCurrentPage(currentPage === 0 ? images.length - 1 : currentPage - 1);
    };
  
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setResponsiveView(true);
      } else {
        setResponsiveView(false);
      }
    };
  
    // Listen for window resize events
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      // Initial check on mount
      handleResize();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <div className="book-container">
        <div className="buttons-container">
          {currentPage !== 0 && (
            <button className='button' onClick={goToPrevPage}>Previous</button>
          )}
          <div className="spacer"></div>
          {currentPage !== images.length - 1 && (
            <button className='button' onClick={goToNextPage}>Next</button>
          )}
        </div>
        <div className="image-container">
          <img src={responsiveView ? images[currentPage][1] : images[currentPage][0]} alt={`Page ${currentPage + 1}`} />
        </div>
        <div className="buttons-container">
          {currentPage !== 0 && (
            <button className='button' onClick={goToPrevPage}>Previous</button>
          )}
          <div className="spacer"></div>
          {currentPage !== images.length - 1 && (
            <button className='button' onClick={goToNextPage}>Next</button>
          )}
        </div>
      </div>
    );
};

export default ImageCarousel;
