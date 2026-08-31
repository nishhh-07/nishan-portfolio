import React from 'react';
import {
  Code, Layout, Server, Database, Cpu, Cloud, GitBranch,
  Terminal, Send, Zap, Settings, BarChart, Palette,
  Smartphone, Layers, Lock, Box, GitMerge, Network
} from 'lucide-react';
import { skills } from '../data/portfolioData';
import './Skills.css';

const iconMap = {
  code: Code,
  layout: Layout,
  server: Server,
  database: Database,
  cpu: Cpu,
  cloud: Cloud,
  'git-branch': GitBranch,
  github: Code, // Using Code icon as placeholder
  terminal: Terminal,
  send: Send,
  zap: Zap,
  settings: Settings,
  'bar-chart': BarChart,
  palette: Palette,
  smartphone: Smartphone,
  layers: Layers,
  lock: Lock,
  box: Box,
  'git-merge': GitMerge,
  network: Network,
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container-wide">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skill-list">
                {skillList.map((skill, index) => {
                  const Icon = iconMap[skill.icon] || Code;
                  return (
                    <div key={index} className="skill-item">
                      <Icon size={20} className="skill-icon" />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
