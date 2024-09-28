import React, { useState, useRef, useEffect } from 'react';
import './Projects.css';

// Import images
import projectImage1 from './images/Desktop _1.png';
import projectImage2 from './images/UntitledfinalCoin.png';
import projectImage3 from './images/Desktop _1.png';

const Projects = () => {
    // State to keep track of the hovered project
    const [hoveredProject, setHoveredProject] = useState(null);
    const timeoutRef = useRef(null);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, []);

    // Project previews with images
    const projectPreviews = {
        project1: {
            text: 'Preview of Project 1',
            image: projectImage1,
        },
        project2: {
            text: 'Preview of Project 2',
            image: projectImage2,
        },
        project3: {
            text: 'Preview of Project 3',
            image: projectImage3,
        },
    };

    const handleMouseEnter = (project) => {
        timeoutRef.current = setTimeout(() => {
            setHoveredProject(project);
        }, 500); // 500ms delay
    };

    const handleMouseLeave = () => {
        clearTimeout(timeoutRef.current);
        setHoveredProject(null);
    };

    return (
        <section id="projects" className="section">
            <div className="projects-container">
                {/* Preview Section */}
                <div className="project-preview">
                    <div className={`project-preview-content ${hoveredProject ? 'visible' : ''}`}>
                        {hoveredProject && (
                            <>
                                <img
                                    src={projectPreviews[hoveredProject].image}
                                    alt={`${hoveredProject} preview`}
                                    className="project-image"
                                />
                                <p>{projectPreviews[hoveredProject].text}</p>
                            </>
                        )}
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="button-container">
                    {Object.keys(projectPreviews).map((projectKey) => (
                        <button
                            key={projectKey}
                            className="project-button"
                            onMouseEnter={() => handleMouseEnter(projectKey)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {projectKey.replace('project', 'Project ')}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
