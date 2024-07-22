import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.svg';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
/**
     * Function that handles the scroll event and updates the state based on the scroll position
     */
    const onScroll = () => {
      // Check if the scroll position is greater than 50 pixels
      if (window.scrollY > 50) {
        // Update the state to indicate that the user has scrolled
        setScrolled(true);
      } else {
        // Reset the state to indicate that the user is at the top of the page
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <Navbar expand="lg" className={`navbar ${scrolled ? 'scrolled' : ''}`} fixed="top">
      <Container>
      <Navbar.Brand>
          <NavLink to="/about" activeclassname="active-link">
            <img src={logo} alt="Logo"/>
          </NavLink>
        </Navbar.Brand >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
          <NavLink to="/about" activeclassname="active-link">About Me</NavLink>
            </li>
            <li className="nav-item">
          <NavLink to="/portfolio" activeclassname="active-link">Portfolio</NavLink>
            </li>
            <li className="nav-item"> 
          <NavLink to="/contact" activeclassname="active-link">Contact</NavLink>
            </li>
            <li className="nav-item">
          <NavLink to="/resume" activeclassname="active-link">Resume</NavLink>
            </li> 
          </ul>
        </Navbar.Collapse>
          <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/jovanna-jimenez-profile24/"><img src={navIcon1} alt="LinkedIn"/></a>
                    <a href="https://github.com/jovanna24"><img src={navIcon2} alt="Facebook"/></a>
                    <a href="https://www.instagram.com/jovanna_g24/"><img src={navIcon3} alt="Instagram"/></a>
                </div> 
                <a href="#contact"><button className="vvd" type="button"><span>Let&apos;s Connect!</span></button></a>
            </span>
      </Container>
    </Navbar>
  );
};

export default NavBar;