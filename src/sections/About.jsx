import React from 'react';
import { GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>{personalInfo.about.description}</p>
          </div>

          <div className="about-education">
            <div className="education-card glass-card">
              <div className="education-icon">
                <GraduationCap size={32} />
              </div>
              <h3 className="education-degree">{personalInfo.about.degree}</h3>
              <p className="education-grade">{personalInfo.about.cgpa}</p>
              <p className="education-duration">{personalInfo.about.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
