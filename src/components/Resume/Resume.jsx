import Accordion from 'react-bootstrap/Accordion';
import './Resume.css';

const Resume = () => {

  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <p>
        <a href="public/Resume.pdf" download>Download Resume (PDF)</a>
      </p>

      <div className="proficiencies">
          <Accordion defaultActiveKey={"0"} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Front-End</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>HTML/CSS</li>
                  <li>Bootstrap</li>
                  <li>React Bootstrap</li>
                  <li>Material UI</li>
                  <li>React Router</li>
                  <li>React On Screen</li>
                  <li>React Scroll</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Back-End</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>NoSQL</li>
                  <li>RESTful APIs</li>
                  <li>Authentication & Authorization</li>
                  <li>GraphQL</li>
                  <li>Mongoose</li>
                  <li>JSON Web Tokens</li>
                  <li>JSON</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Full-Stack Integration</Accordion.Header>
              <Accordion.Body>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>GitLab</li>
                <li>Visual Studio Code</li>
                <li>Netlify</li>
                <li>Render</li>
                <li>Jest</li> 
                <li>ESLint</li>
                <li>Prettier</li>
                <li>Insomnia</li>
                <li>Chrome DevTools</li>
              </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Soft Skills</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Communication</li>
                  <li>Collaboration</li>
                  <li>Problem Solving</li>
                  <li>Teamwork</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
      </div>
    </section>
  );
};

export default Resume;
