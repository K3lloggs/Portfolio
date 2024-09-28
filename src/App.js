
// App.js
import React, { useEffect } from 'react';
import './App.css';
import profileImage from './profilePic-removebg-preview.jpg'; // Adjust the import path as needed
import SocialLinks from './socialLinks';
import Projects from './projects'; // Ensure the path is correct
import TextScramble from './TextScramble';

const App = () => {
  // Intersection Observer logic
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });


    // Select all sections with the 'section' class
    const hiddenElements = document.querySelectorAll('.section');
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  return (
    <div>
      {/* Header */}
      <header className="header">


        <nav className="nav">
          <a href="#home" onClick={scrollToTop}>Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#blog">Blog</a>
          <a href="#chat" className="chat-button">Chat</a>
        </nav>
        <section id="contact" className="section">
          <div className="container">
            <SocialLinks />
          </div>
        </section>
      </header>

      {/* Main Content */}
      <main>
        {/* Home Section */}
        <div className="home-container">
          <h1 className="main-title">
            <TextScramble phrases={['{ Connor Close }']} />
          </h1>

          <div className="tagline">
            <p>
              Software Development <span className="ampersand">&</span> Design
              <br />
              Finance & Blockchain
            </p>
          </div>

          <div className="subtitle">

            <p>
              <span>ENG</span>
              <span>DEV</span>
              <span>ANL</span>
              <span>YST</span>
              <span>DSN</span>
              <span>GER.</span>
            </p>
          </div>


        </div>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <h1>About</h1>
            <div className="about-content">
              <div className="text-content">
                <div className="column">
                  9 years of enthusiastic<br />
                  experience from metal to<br />
                  systems, networking, <br />
                  software engineering,<br />
                  computer science,<br />
                  deeplearning and Ai.<br />
                  Extending the tech paradigm<br />
                  offering a diverse set of<br />
                  skills and intuition.<br />
                </div>
                <div className="column">
                  Currently researching<br />
                  quantitative trading<br />
                  across blockchain and<br />
                  financial markets<br />
                </div>
              </div>
              <img src={profileImage} className="about-image" alt="Profile" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="container">
            <h1>Projects</h1>
            <Projects />
          </div>
        </section>


        {/* Blog Section */}
        <section id="blog" className="section">
          <div className="container">
            <h1>Blog</h1>
            <p>-Click here -</p>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="section">
          <div className="container">
            <h1>Resume</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel libero at dui sodales auctor.</p>
          </div>
        </section>


      </main>

      {/* Footer Padding */}
      <div className="footer-padding"></div>
    </div>
  );
};

export default App;
