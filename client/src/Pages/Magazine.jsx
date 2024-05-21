import React from 'react'
import Navbar from '../Components/Navbar'
import './Magazine.css'
import Flipbook from '../Components/Flipbook';
import Footer from '../Components/Footer';
import pdf from '../assets/Magazine.pdf';

function Magazine() {
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="heading">Magazine</h2>
      <div className='container'><Flipbook pdf={pdf}></Flipbook></div>
      <Footer></Footer>
      <div class="footer-copyright">
          <p>© 2024 All Rights Reserved, Moondram Kan</p>
      </div>

    </div>
  )
}

export default Magazine
