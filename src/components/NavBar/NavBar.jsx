import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.svg';
import navIcon1 from '../../assets/images/nav-icon1.svg';
import navIcon2 from '../../assets/images/nav-icon2.svg';
import navIcon3 from '../../assets/images/nav-icon3.svg';
import './Navbar.css';

const NavBar = () => {
  // State variable to keep track of whether the user has scrolled past the navbar
  const [scrolled, setScrolled] = useState(false);

  // UseEffect hook is used to run the code inside the callback function whenever the component mounts or updates
  useEffect(() => {
    // Define a function to handle the scroll event
    const handleScroll = () => {
      // Check if the user has scrolled past the navbar (50 pixels from the top of the page)
      if (window.scrollY > 50) {
        // Set the state to true if the user has scrolled past the navbar
        setScrolled(true);
      } else {
        // Set the state to false if the user has not scrolled past the navbar
        setScrolled(false);
      }
    };
    // Add the scroll event listener to the window object
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when the component unmounts or updates
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  


  return (
    <Navbar expand="lg" className={ scrolled ? 'scrolled' : ''} fixed="top">
      <Container>
      <Navbar.Brand>
          <NavLink to="/" activeclassname="active-link">
            <img src={logo} alt="Logo"/>
          </NavLink>
        </Navbar.Brand >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
          <NavLink to="/" activeclassname="active-link">About Me</NavLink>
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
                <NavLink to ="/contact"><button className="vvd" type="button"><span>Let&apos;s Connect!</span></button></NavLink>
            </span>
      </Container>
    </Navbar>
  );
};

export default NavBar;