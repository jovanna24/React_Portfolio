import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
        ProjectCard.propTypes = {
            project: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            imgUrl: PropTypes.string,
            link: PropTypes.string,
            gitHubLink: PropTypes.string,
        }).isRequired,
        };

    return (
      <div className="project-card">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <img src={project.imgUrl} alt={project.title} />
        <div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
          <br></br>
          <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
      </div>
    );
  }

  
  export default ProjectCard;
  
