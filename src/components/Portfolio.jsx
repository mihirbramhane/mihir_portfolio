import React from "react";
import profilePic from "../assets/profile2.jpeg";
import certificate1 from "../assets/certificate1.pdf";
import certificate2 from "../assets/certificate2.pdf";
import certificate3 from "../assets/certificate3.pdf"; 
import certificate6 from "../assets/certificate6.pdf"; 
import certificate7 from "../assets/certificate7.pdf"; 

import certificate4 from "../assets/certificate4.png";
import certificate5 from "../assets/certificate5.png";  

import backgroundImg from "../assets/background3.webp";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-container" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="profile-section">
        <img src={profilePic} alt="Mihir Bramhane" className="profile-pic" />
        <h1 className="name"> Mr. Mihir Bramhane</h1>
        <p className="subtitle">M.Tech in IoT | AI & ML Enthusiast | Data Scientist</p>
      </div>
      
      <div className="section">
        <h2>Education</h2>
        <ul>
          <li><strong>M.Tech - IoT (VJTI, Mumbai)</strong> - PURSUING </li>
          <li><strong>B.E - AI & Data Science (SPPU)</strong> - 9.34 CGPA </li>
          <li><strong>HSC (Maharashtra Board)</strong> - 76%</li>
          <li><strong>SSC (Maharashtra Board)</strong> - 89.40%</li>
        </ul>
      </div>

      <div className="section">
        <h2>Experience</h2>
        <ul>
          <li>Technoedge Learning Services - Data Analyst</li>
          <li>NSDIC - Power BI Intern</li>
          <li>CodeClause - AI Intern</li>
          <li>LetsGrowMore - Data Analysis Intern</li>
          <li>OasisInfoByte - Data Science Intern</li>
        </ul>
      </div>

      <div className="section">
        <h2>Projects</h2>
        <ul>
          <li>Mood Recognition with Computer Vision</li>
          <li>Automotive Pricing Model (Data Analysis)</li>
          <li>Hand Gesture Recognition System</li>
          <li>Lead Score Analysis</li>
        </ul>
      </div>
      
      <div className="section">
        <h2>Technical Skills</h2>
        <p>Python, SQL, Machine Learning, Data Science, Deep Learning, Computer Vision, IoT, Security</p>
        <h2>Soft Skills</h2>
        <p>Communication, Logical Thinking, Team Collaboration, Attentive, Mentoring, Leadership, Task Priortizing</p>
      </div>
      
      <div className="section">
        <h2>Publications</h2>
        <ul>
          <li>Data Analysis - IJSREM </li>
          <li>Emotion Based Music Recommendation System - TIJER </li>
        </ul>
        <h3>Certificates</h3>
        <div className="certificate-links">
        <a href={certificate4} target="_blank" rel="noopener noreferrer" className="view-btn">👀 View</a> </div>
          <div className="certificate-links">
          <a href={certificate5} target="_blank" rel="noopener noreferrer" className="view-btn">👀 View</a> </div>
      </div>
      
      <div className="section">
        <h2>Certificates</h2>
        <p>
          <a href={certificate1} target="_blank" className="certificate-btn">View Certificate 1</a>
          <a href={certificate2} target="_blank" className="certificate-btn">View Certificate 2</a>
          <a href={certificate3} target="_blank" className="certificate-btn">View Certificate 3</a> </p>
        <p><a href={certificate6} target="_blank" className="certificate-btn">View Certificate 4</a>
          <a href={certificate7} target="_blank" className="certificate-btn">View Certificate 5</a>
          </p>
      </div>
      
      <div className="links">
        <a href="https://github.com/mihirbramhane" target="_blank" className="link-btn">GitHub</a>
        <a href="https://www.linkedin.com/in/mihir-bramhane-15678921b/" target="_blank" className="link-btn">LinkedIn</a>
        <a href="https://drive.google.com/file/d/1mCDARvdVy1MH6Bsz-2fpG3aWtcCSWunc/view?usp=sharing" target="_blank" className="link-btn">Resume</a>
     

      </div>
      <div className="resume-section">
        <a href="/assets/Mihir_Bramhane_Resume.pdf" 
           download="Mihir_Bramhane_Resume.pdf" 
           className="resume-btn">
          📄 Download Resume
        </a>
      </div>
    </div>
    
  );
};

export default Portfolio;
