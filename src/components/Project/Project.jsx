import ProjectCard from '../ProjectCard/ProjectCard';
import projImg1 from '../../assets/images/project-img1.png';
import projImg2 from '../../assets/images/project-img2.png';
import projImg3 from '../../assets/images/project-img3.png';
import projImg4 from '../../assets/images/project-img4.png';
import projImg5 from '../../assets/images/project-img5.png';
import projImg6 from '../../assets/images/project-img6.png';
import projImg7 from '../../assets/images/project-img7.png';
import projImg8 from '../../assets/images/project-img8.png';
import './Project.css';


const Projects = () => {

  const projects = [
    {
      title: 'Interactive RPG',
      description: 'MERN Stack & GraphQL',
      imgUrl: projImg8,
      link: 'https://project3-rpg-3t2r.onrender.com',
      gitHubLink: 'https://github.com/jovanna24/Project3-RPG.git',
    },
    {
      title: 'Food Delivery App',
      description: 'MERN Stack',
      imgUrl: projImg1,
      link: 'https://fooddelmern.onrender.com',
      gitHubLink: 'https://github.com/jovanna24/foodDelMERN.git',
    },
    {
      title: 'Google Books Search Engine',
      description: 'RESTful API to MERN Stack',
      imgUrl: projImg7,
      link: 'https://book-searchengine.onrender.com',
      gitHubLink: 'https://github.com/jovanna24/book_searchEngine.git',
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
    {
      title: 'The Tech Blog',
      description: 'MVC & APIs',
      imgUrl: projImg5,
      link: 'https://tech-blog-mvc-4.onrender.com/login ',
      gitHubLink: 'https://github.com/jovanna24/tech_blog_MVC.git',
    },
    {
      title: 'Reserve a Room',
      description: 'PostgreSQL & APIs',
      imgUrl: projImg6,
      link: 'https://room-reservation-application-jv7w.onrender.com',
      gitHubLink: 'https://github.com/jovanna24/room_reservation_application.git',
    },
  ];

  return (
    <div className="project-info">
      {projects.map((project, index) => (
        <ProjectCard  project={project} key={index} />
      ))}
    </div>
  );
}

export default Projects;
