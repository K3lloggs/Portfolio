import React from 'react';
import './Projects.css';

// Import images
import projectImage1 from './images/falcon9Landing.png';
import projectImage2 from './images/UntitledfinalCoin.png';
import projectImage3 from './images/Desktop _1.png';// Corrected filename

const projectsData = [
  {
    id: 1,
    title: 'Falcon 9 Landing',
    description: 'Anlysis of cost variables and optimal launch conditions ',
    image: projectImage1,
  },
  {
    id: 2,
    title: 'Coin',
    description: 'Crpyto Arbitrage and tracking platform.',
    image: projectImage2,
  },
  {
    id: 3,
    title: 'Coin in prod',
    description: 'This platform in currently in devlopment.',
    image: projectImage3,
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
