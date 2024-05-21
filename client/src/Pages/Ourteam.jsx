import React from 'react';
import TeamMember from '../Components/TeamMember';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import teamimg1 from '../assets/teamimg1.jpg'; 
import teamimg2 from '../assets/teamimg2.jpg'; 
import teamimg3 from '../assets/teamimg3.jpg'; 
import './Ourteam.css';

function Ourteam() {
    const teamMembers = [
        { name: 'John Doe', designation: 'CEO', image: teamimg1 },
        { name: 'Jane Smith', designation: 'CTO', image: teamimg2 },
        { name: 'Alice Johnson', designation: 'Designer', image: teamimg3 },
        { name: 'John Doe', designation: 'CEO', image: teamimg1 },
        { name: 'Jane Smith', designation: 'CTO', image: teamimg2 },
        { name: 'Alice Johnson', designation: 'Designer', image: teamimg3 },
        { name: 'John Doe', designation: 'CEO', image: teamimg1 },
        { name: 'Jane Smith', designation: 'CTO', image: teamimg2 },
        { name: 'Alice Johnson', designation: 'Designer', image: teamimg3 },
        { name: 'John Doe', designation: 'CEO', image: teamimg1 },
        { name: 'Jane Smith', designation: 'CTO', image: teamimg2 },
        
        // Add more team members as needed
    ];
    
    return (

    <div id='ourteam' >
    <Navbar></Navbar>
    <h2 className="heading">Our Team</h2>
    <div className='ourteam'>
        <div className="our-team-container">
            
            {teamMembers.map((member, index) => (
                <TeamMember key={index} name={member.name} designation={member.designation} image={member.image} />
            ))}
        </div>
        
    </div>
    <Footer></Footer>
    <div class="footer-copyright">
          <p>© 2024 All Rights Reserved, Moondram Kan</p>
      </div>
    </div>
    );
}

export default Ourteam;
