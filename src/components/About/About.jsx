import { NavLink } from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";
import profilePic from "../../assets/images/profile.jpeg";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-header">      <h2>ABOUT ME</h2>
      </div>
      <div className="about__container">
        <div className="about-image">
          <img src={profilePic} alt="Developer" />
        </div>
        <div className="about-text">
          <p>
            I&apos;m a passionate <b>Software Engineer</b> currently working as a <b>Global Technical Support Engineer</b> at PayPal. In this role, I leverage my strong analytical and problem-solving skills daily to debug complex systems and ensure seamless user experiences.
          </p>
          <p>
            My diverse background as a prior EMT and Physician Assistant student instilled in me the ability to thrive under pressure and approach challenges with a methodical, solution-oriented mindset. These qualities, combined with my technical expertise, enable me to deliver robust and efficient code. I&apos;m excited to transition my deep understanding of technical systems and user needs into developing innovative software solutions.
          </p>
        </div>
      </div>
      <NavLink to="/contact">
        <button className="vvd" type="button">
          <span className="button-text">Let&apos;s Connect!</span> 
          <ArrowRightCircle size={25} className="button-icon" /> 
        </button>
      </NavLink>

    </section>
  );
};

export default About;
