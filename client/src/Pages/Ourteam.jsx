import React, { useState, useEffect } from 'react';
import TeamMember from '../Components/TeamMember';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import axios from 'axios';
import './Ourteam.css';

function Ourteam() {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const response = await axios.get('https://dremerz-erp.com/api/MoondramkanTeam/');
                setTeamMembers(response.data);
            } catch (error) {
                console.error('Error fetching team members:', error);
            }
        };

        fetchTeamMembers();
    }, []);

    return (
        <div id='ourteam'>
            <Navbar />
            <h2 className="heading">Our Team</h2>
            <div className='ourteam'>
                <div className="our-team-container">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} name={member.name} designation={member.position} image={member.image} />
                    ))}
                </div>
            </div>
            <Footer />
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

export default Ourteam;
