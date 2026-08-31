import React from 'react';
import { Award } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card card">
              <div className="certification-icon">
                <Award size={24} />
              </div>
              <div className="certification-info">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
