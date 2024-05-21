import React from 'react'
import Navbar from '../Components/Navbar'
import './Home.css'
import Flipbook from '../Components/Flipbook';
import Footer from '../Components/Footer';
import pdf from '../assets/sample.pdf';

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="heading" id='newspaper'>Newspaper</h2>
      <div className='container'><Flipbook pdf={pdf}></Flipbook></div>
      <Footer></Footer>
      <div class="footer-copyright">
          <p>© 2024 All Rights Reserved, Moondram Kan</p>
      </div>

    </div>
  )
}

export default Home
