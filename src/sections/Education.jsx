import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/portfolioData';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.id} className="education-card card">
              <div className="education-icon-wrapper">
                {edu.id === 1 ? (
                  <GraduationCap size={28} />
                ) : (
                  <Award size={28} />
                )}
              </div>
              
              <div className="education-info">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <div className="education-meta">
                  <span className="education-duration">{edu.duration}</span>
                  <span className="education-grade">{edu.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
