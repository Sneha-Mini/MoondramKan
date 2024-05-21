import React from 'react';
import './About.css'; 
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import logo from '../assets/logo.jpg';

const About = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className="about-section">
            <h2 className="about-heading">About Us</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                    Welcome to Moondram Kan, where journalism meets integrity and insight. We are your premier source for news, dedicated to providing timely, accurate, and thought-provoking content across a spectrum of topics.<br/><br/> Our mission is simple: to keep you informed, engaged, and empowered in an ever-evolving world.At Moondram Kan, we understand the importance of staying informed in today's fast-paced society. That's why our team of experienced journalists and writers work tirelessly to bring you the latest news and analysis, covering everything from local events to global affairs. We delve deep into the heart of every story, seeking truth and context to provide you with a comprehensive understanding of the issues that matter most.

But we're more than just a news outlet – we're a community. We believe in the power of storytelling to connect people, spark conversations, and inspire change. Whether it's a feature on a local hero, an in-depth investigation into social issues, or a captivating piece on arts and culture, our goal is to illuminate the world around us and foster a sense of empathy and understanding among our readers.</p>
                </div>
                <div className="about-image">
                    <img src={logo} alt="About Us" />
                </div>
            </div>
        </div>
        <Footer></Footer>
        <div class="footer-copyright">
          <p>© 2024 All Rights Reserved, Moondram Kan</p>
        </div>
        </div>
    );
};

export default About;
