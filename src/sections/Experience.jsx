import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';
import { experience } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>

        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon">
                  <Briefcase size={20} />
                </div>
                {index < experience.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="experience-card card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">{exp.title}</h3>
                      <p className="experience-company">
                        {exp.company}
                        {exp.association && (
                          <span className="experience-association"> {exp.association}</span>
                        )}
                      </p>
                    </div>
                    <span className="experience-duration">{exp.duration}</span>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  {exp.highlights.length > 0 && (
                    <ul className="experience-highlights">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx}>
                          <CheckCircle size={16} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
