import { NavLink } from 'react-router-dom';
import { ArrowRightCircle } from "react-bootstrap-icons"; 
import profilePic from "../assets/images/profile.png";
const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div>
        <img src={ profilePic } alt="Developer" />
        <p>I&apos;m passionate about software engineering and currently enrolled in a Fullstack-Software Engineering Bootcamp at Arizona State University.</p> 
        <p>As a prior EMT and Physician Assistant student, I thrive in fast-paced environments where teamwork and problem-solving are essential. When not coding, I enjoy a good cup of coffee and rooting for the Dodgers! ⚾️
        </p>
        <NavLink to ="/contact"><button className="vvd" type="button"><span>Let&apos;s Connect! </span><ArrowRightCircle size ={25}/></button></NavLink>
      </div>
    </section>
  );
};

export default About;
