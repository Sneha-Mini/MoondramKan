import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, designation, image }) => {
  return (
    <div className="team-member-container">
      <img src={image} alt={name} className="team-member-image" />
      <h2 className="team-member-name">{name}</h2>
      <p className="team-member-designation">{designation}</p>
    </div>
  );
};

export default TeamMember;
