const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default ProjectCard;
