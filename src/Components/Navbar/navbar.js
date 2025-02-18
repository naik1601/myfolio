import React, { useState } from 'react';
import './navbar.css';
import logo from '../../Assets/Logo.png';
import contactimg from '../../Assets/contact.png';
import downloadimg from '../../Assets/downloadimage.png'
import { Link } from 'react-scroll';
import menu from '../../Assets/menu.png'

const Navbar = () => {
  const[showMenu,setShowMenu]=useState(false);
  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href='intro'>
        <img src={logo} alt="Logo" className="logo" />
         {/* <span className="logo-text">ShreyeshNaik</span> */}
        </a>
      </div>
      <div className="desktopMenu">
        <Link className="desktopMenuListItem" activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500}>
          Home
        </Link>
        <Link className="desktopMenuListItem" to="skills" activeClass='active' spy={true} smooth={true} offset={-50} duration={500}>
          About
        </Link>
        <Link className="desktopMenuListItem" to="project-container"activeClass='active' spy={true} smooth={true} offset={-50} duration={500}>
          Projects
        </Link>
        <Link className="desktopMenuListItem" to="contact" activeClass='active' spy={true} smooth={true} offset={-50} duration={500}>
          Contact
        </Link>
      </div>

      {/* Contact Me Button */}
      <a href="/Shreyesh_Naik_Resume.pdf" download="Shreyesh_Naik_Resume.pdf">
      <button className="desktopmenubtn">
       
        Resume
      </button>
      </a>
      
        <img src={menu} alt="Menu" className="Mobmenu" onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
        <Link className="listItem" activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>
          Home
        </Link>
        <Link className="listItem" to="skills" activeClass='active' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(false)}>
          About
        </Link>
        <Link className="listItem" to="project-container"activeClass='active' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(false)}>
          Projects
        </Link>
        <Link className="listItem" to="contact" activeClass='active' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
