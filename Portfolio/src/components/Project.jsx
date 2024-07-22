import ProjectCard from './ProjectCard';

const Projects = () => {

  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2' },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
