const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <p>
        <a href="/public/resume1.pdf" download>Download Resume (PDF)</a>
      </p>

      <div className="proficiencies">
        <div className="proficiency-section">
      <h3>Front-End</h3>
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
        </div>
        <div className="proficiency-section">
          <h3>Back-End</h3>
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
        </div>
        <div className="proficiency-section">
          <h3>Full-Stack Integration</h3>
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

        </div>
        <div className="proficiency-section">
          <h3>Soft Skills</h3>
          <ul>
            <li>Communication</li>
            <li>Collaboration</li>
            <li>Problem Solving</li>
            <li>Teamwork</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default Resume;
