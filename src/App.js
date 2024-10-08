
// App.js
import React, { useState, useEffect } from 'react';

import './App.css';
import profileImage from './profilePic-removebg-preview.jpg'; // Adjust the import path as needed
import SocialLinks from './socialLinks';
import Projects from './projects'; // Ensure the path is correct
import TextScramble from './TextScramble';
import Resume from './Resume';

const App = () => {


  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatClick = () => {
    setIsChatOpen(!isChatOpen);
    // Add logic to open/close the chat using the attribute on df-messenger
    const chatBox = document.querySelector('df-messenger');
    if (chatBox) {
      if (isChatOpen) {
        chatBox.removeAttribute('opened');
      } else {
        chatBox.setAttribute('opened', 'true');
      }
    }
  };

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

    //
    const hiddenElements = document.querySelectorAll('.section');
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
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
          <button className="chat-button" onClick={handleChatClick}>
            Chat
          </button>
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
        {/* //////////////////////// /////////////////////// END LANDING //////////////////////// ////////////////// */}





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
            <a href="https://medium.com/@_bike" target="_blank" rel="noopener noreferrer">
              Check out my Medium articles
            </a>
          </div>
        </section>


        {/* Resume Section */}
        <section id="resume" className="section">
          <div className="container">
            <h1>Resume</h1>
            <div>
              <Resume />
            </div>
          </div>
        </section>




      </main>

      {isChatOpen && (
        <df-messenger
          intent="WELCOME"
          chat-title="portfolio"
          agent-id="63ec45b1-6984-467c-b6bc-75dbe08ba764"
          language-code="en"
        ></df-messenger>
      )}




      {/* Footer Padding */}
      <div className="footer-padding"></div>
    </div>
  );
};

export default App;
