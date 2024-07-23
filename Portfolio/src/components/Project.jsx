import ProjectCard from './ProjectCard';
import projImg1 from '../assets/images/project-img1.png';
import projImg2 from '../assets/images/project-img2.png';
import projImg3 from '../assets/images/project-img3.png';
import projImg4 from '../assets/images/project-img4.png';

const Projects = () => {

  const projects = [
    {
      title: 'KanBan Board',
      description: 'jQuery',
      imgUrl: projImg1,
      link: 'https://jovanna24.github.io/task-board_3rd_party_APIs/',
      gitHubLink: 'https://github.com/jovanna24/task-board_3rd_party_APIs.git',
    },
    {
      title: 'Git Brewed!',
      description: '3rd Party API Integration',
      imgUrl: projImg2,
      link: 'https://jovanna24.github.io/Room-3-Project-1/',
      gitHubLink: 'https://github.com/jovanna24/Room-3-Project-1.git',
    },
    {
      title: 'Weather Dashboard',
      description: 'Bootstrap & APIs',
      imgUrl: projImg3,
      link: 'https://jovanna24.github.io/weather_dashboard/',
      gitHubLink: 'https://github.com/jovanna24/weather_dashboard.git',
    },
    {
      title: 'Text Editor PWA',
      description: 'PWA',
      imgUrl: projImg4,
      link: 'https://jovanna24.github.io/task-board_3rd_party_APIs/',
      gitHubLink: 'https://github.com/jovanna24/text_editorPWA.git',
    },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

export default Projects;
