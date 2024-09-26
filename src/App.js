
import React, { useEffect } from 'react';
import './App.css';
import profileImage from './profilePic-removebg-preview.jpg';
import socialLinks from './socialLinks'; // Adjust the import path as needed
import SocialLinks from './socialLinks';

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


    // Select all sections with the 'hidden' class
    const hiddenElements = document.querySelectorAll('.section', '.ConnorClose');
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
          <a href="#about"><span>About</span></a>
          <a href="#projects"><span>Projects</span></a>
          <a href="#resume"><span>Resume</span></a>
          <a href="#blog"><span>Blog</span></a>
          <a href="#chat"><span>Chat</span></a>
          <a href="#contact"><span>Contact</span></a>
        </nav>
      </header>



      {/* Main Content */}
      <main>

        <div
          className="Desktop1"
          style={{
            width: 1440,
            height: 1024,
            position: 'relative',
            background: '#EEEEEE',
          }}
        >
          <div
            className="ConnorClose"
            style={{
              width: 864.54,
              left: 100,
              top: 150,  // Moved upwards (previously 234px)
              position: 'absolute',
              color: 'black',
              fontSize: 120,
              fontFamily: 'Helvetica',
              fontWeight: 400,
              lineHeight: '120px',
              wordWrap: 'break-word',
            }}
          >
            Connor Close{'{ }'}
          </div>
          <div
            className="EngDevAnlYstDsnGer"
            style={{
              width: 273,
              height: 449,
              left: 200,  // Changed from 'left' to 'right' for right alignment
              top: 300,    // Adjust vertical positioning
              position: 'absolute',

            }}
          >
            <span
              style={{
                color: 'black',
                fontSize: 40,
                fontFamily: 'Helvetica',
                fontWeight: 400,
                lineHeight: '40px',
                wordWrap: 'break-word',
              }}
            >
              ENG
              <br />
            </span>
            <span
              style={{
                color: 'black',
                fontSize: 38,
                fontFamily: 'Helvetica',
                fontWeight: 400,
                lineHeight: '38px',
                wordWrap: 'break-word',
              }}
            >
              DEV
              <br />
            </span>
            <span
              style={{
                color: 'black',
                fontSize: 40,
                fontFamily: 'Helvetica',
                fontWeight: 400,
                lineHeight: '40px',
                wordWrap: 'break-word',
              }}
            >
              ANL
              <br />
            </span>
            <span
              style={{
                color: 'black',
                fontSize: 41.11,
                fontFamily: 'Helvetica',
                fontWeight: 400,
                lineHeight: '41.11px',
                wordWrap: 'break-word',
              }}
            >
              YST
              <br />
            </span>
            <span
              style={{
                color: 'black',
                fontSize: 40,
                fontFamily: 'Helvetica',
                fontWeight: 400,
                lineHeight: '40px',
                wordWrap: 'break-word',
              }}
            >
              DSN
              <br />
              GER.
              <br />
            </span>
          </div>

          <div
            className="SoftwareDevelopmentDesign"
            style={{
              width: 515,
              height: 462,
              right: 50,  // Aligned to the right
              top: 300,   // Adjust vertical positioning
              position: 'absolute',
              right: 807,
              textAlign: 'right',  // Text alignment
              color: 'black',  // Text color
              fontSize: '20px',  // Font size
              fontFamily: 'Helvetica',  // Font family
              fontWeight: 400,  // Font weight
              lineHeight: '20px',  // Line height
              wordWrap: 'break-word',  // Enable word wrapping
            }}
          >
            <span>
              Software
              <br />
              Development <span style={{ color: 'red' }}>&</span> Design
              <br />
              <br />
              Finance & Blockchain
              <br />
            </span>
          </div>
        </div>
      </main>


      {/* About Section */}
      <section id="about" className="section">
        <img src={profileImage} className="about-image" />
        <h1>About</h1>

        <p>I like to build to software to ehance predictions and decision making.
          <br />
          Im eager to apply my skills in an innovative team environment.
          <br />
          When I am not working, I find something new to learn, which is usually work related, or clean.

        </p>
      </section>
      {/* Projects Section */}
      <section id="projects" className="section">
        <h1>Projects</h1>
        <p>Details about the projects...</p>
      </section>

      {/* Resume Section */}
      <section id="resume" className="section">
        <h1>Resume</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel libero at dui sodales auctor.</p>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section">
        <h1>Blog</h1>
        <p> to view cognitive waste bin -Click here-</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">

        <h1>Contact</h1>
        <SocialLinks />

      </section>


      {/* Footer Padding */}
      <div className="footer-padding"></div>
    </div >

  );
};

export default App;