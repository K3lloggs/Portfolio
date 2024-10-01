import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume-container">
            <header>

                <h2>SWE | Technical Analyst | Manager | Intern</h2>
                <p></p>
                <div className="contact-info">
                    <span>Boston</span>
                    <span>•</span>
                    <a href="mailto:cclosework@gmail.com">cclosework@gmail.com</a>
                    <span>•</span>
                    <span>(603) 933-1290</span>
                    <span>•</span>
                    <a href="https://www.linkedin.com/in/c0nn0r-cl0se/">LinkedIn</a>
                    <span>•</span>
                    <a href="https://github.com/K3lloggs">GitHub</a>
                </div>
            </header>

            <section>
                <h3>Education</h3>
                <div className="education-item">
                    <h4>University of Massachusetts Boston</h4>
                    <p>Computer Science / DS&A / Architecture / S.W.E</p>
                    <p className="date">2022 - Present</p>
                </div>
                <div className="education-item">
                    <h4>University of Maine</h4>
                    <p>Computer Science / Python / C / Java / Cybersecurity Team</p>
                    <p className="date">2021 - 2022</p>
                </div>
            </section>

            <section>
                <h3>Professional and Leadership Experience</h3>
                <div className="job">
                    <h4>Coin - Blockchain and Crypto Finance Platform</h4>
                    <p className="job-title">Lead Developer | Self Project</p>
                    <p className="job-location">Boston, MA</p>
                    <p className="date">09/01/2024 - 09/15/2024</p>
                    <ul>
                        <li>Used Node.js, to process over 1,000 cryptocurrency data points per minute with CoinGeckoAPI enabling real-time updates on blockchain shifts.</li>
                        <li>Visualized Blockchain data, using Recharts, with adjustment to time intervals, enabling low level abstraction analysis in real time increasing interpretation speed ≈ 40%.</li>
                        <li>Built and backtested machine learning models using Python and Tensorflow with blockchain data to predict cryptocurrency price movements, optimizing trading strategies(prod).</li>
                    </ul>
                </div>
                <div className="job">
                    <h4>Aquitaine Group</h4>
                    <p className="job-title">Assistant General Manager</p>
                    <p className="job-location">Boston, MA</p>
                    <p className="date">07/01/2024 - Present</p>
                    <ul>
                        <li>Led and mentored a diverse team of 30+ members in a high-pressure environment of a French restaurant generating $120,000 monthly revenue</li>
                        <li>Fostered a culture of excellence, improving collaboration, team performance, morale, and customer satisfaction.</li>
                        <li>Spearheaded SEO development valued at $500 by a third-party assessment, significantly improving online visibility.</li>
                        <li>Increased lacking water sales by identifying trends through analyzing data and applying strategy for optimized performance to result in 12% increase in respective sales.</li>
                        <li>Collaborated with various departments to implement data-driven improvements across revenue centers.</li>
                        <li>Weekly meetings with Stakeholders to discuss business strategy, application metrics to increase performance.</li>
                    </ul>
                </div>
                <div className="job">
                    <h4>Outlier AI</h4>
                    <p className="job-title">AI Trainer, Mathematics</p>
                    <p className="job-location">Remote, Boston</p>
                    <p className="date">06/01/2024 - Present</p>
                    <ul>
                        <li>Evaluated the quality of AI-generated mathematical models and provided structured, human-readable summaries of rationale and areas for improvement.</li>
                        <li>Trained 2 mathematical models for AI systems, ensuring accuracy, efficiency, and scalability.</li>
                        <li>Contributed to the training and fine-tuning of generative AI models for enterprise.</li>
                    </ul>
                </div>
                <div className="job">
                    <h4>MarketFlow - Stock Dashboard with Pandas, Tableau</h4>
                    <p className="job-title">Head Analyst | Self Project</p>
                    <p className="job-location">Boston, MA</p>
                    <p className="date">05/01/2024 - 05/15/2024</p>
                    <ul>
                        <li>Extracted 512MB of unprocessed stock market data from 8,000 diverse sources using bs4, selenium, and pandas for transformation, and aggregation into a centralized database.</li>
                        <li>Engineered 8 key features using Python, Pandas, and SQL to build a comprehensive price and volume tables, improving analysis interpretation by 25%</li>
                        <li>Produced Dynamic Tableau visualizations to present actionable insights to key stakeholders</li>
                    </ul>
                </div>
                <div className="job">
                    <h4>NeurAI - Deep Learning for Tumor Detection with Scikit-Learn, Tensorflow</h4>
                    <p className="job-title">SWE and ML Engineer | Self Project</p>
                    <p className="job-location">Boston, MA</p>
                    <p className="date">04/01/2024 - 05/01/2024</p>
                    <ul>
                        <li>Developed a Convolutional Neural Network (CNN) achieving 98.07% validation accuracy in brain tumor variance in 3,000 MRI images of various brain tumor types with Tensorflow.</li>
                        <li>Augmented 3,000 Glioma tumor images with Google Colab to retrain models for an increase in Glioma detection by 80%.</li>
                        <li>Maintained Accurate, and Precise, appropriately weighted - and validating - Machine Learning models throughout.</li>
                    </ul>
                </div>
            </section>

            <section>
                <h3>Licenses and Certifications</h3>
                <ul className="certifications">
                    <li>Google Advanced Data Analytics <span className="date">Apr 2024</span></li>
                    <li>LinkedIn Decision Intelligence <span className="date">Apr 2024</span></li>
                    <li>IBM Data Science Professional <span className="date">Mar 2022</span></li>
                    <li>Google Data Analytics Professional <span className="date">Dec 2022</span></li>
                    <li>Cisco CCNA Routing and Switching <span className="date">May 2020</span></li>
                    <li>Cisco CCET <span className="date">Dec 2019</span></li>
                </ul>
            </section>

            <section>
                <h3>Skills</h3>
                <div className="skills">
                    {[
                        "Python", "pandas", "scikit", "tensorflow", "Java", "vm", "C++", "Solidity",
                        "blockchain", "Js", "typescript", "node", "express", "react", "docker",
                        "SQL", "Postgres", "Mongo", "Tableau", "PowerBI", "Dune", "Linux", "ubuntu",
                        "debian", "Windows", "Self starter", "Strong Learner", "Outcome Driven",
                        "Leader", "Omni-Paradigm Problem Solver and Solution Finder", "Relatively Funny"
                    ].map((skill, index) => (
                        <div key={index} className="skill-item">{skill}</div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Resume;