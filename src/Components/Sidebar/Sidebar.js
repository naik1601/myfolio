import React from 'react';
import linkedinImg from '../../Assets/linkedin.png'; 
import githubIcon from '../../Assets/Githublogo.png';   
import instagramImg from '../../Assets/instagram.png';  
import mailImg from '../../Assets/mail.png'; 
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="social-sidebar">
      <a href="https://www.linkedin.com/in/shreyesh-naik-9686a318b/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinImg} alt="LinkedIn" title="LinkedIn" className="social-icon" />
      </a>
      <a href="https://github.com/naik1601" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" title="GitHub" className="social-icon" />
      </a>
      <a href="https://www.instagram.com/shreyeshnaik?igsh=MTI2ZWg2aGdvam9zcg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
        <img src={instagramImg} alt="Instagram" title="Instagram" className="social-icon" />
      </a>
    </div>
  );
};

export default Sidebar;
