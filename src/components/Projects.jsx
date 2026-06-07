import React from 'react';
import { ExternalLink, Database, LayoutTemplate, Cpu, Cuboid } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "AI Automated BOQ Generation",
      type: "Academic Project",
      date: "2025 - Present",
      location: "Lucknow, India",
      description: "Developed an intelligent system for automated Bill of Quantities (BOQ) generation by leveraging semantic analysis of architectural layouts. Built an advanced parser capable of reading and extracting precise coordinate and entity data from DXF files. Integrated Civil Engineering workflows with AI to optimize layout processing and significantly enhance estimation accuracy.",
      tags: ["AI", "Python", "DXF Parsing", "Data Extraction", "Civil Engineering"],
      icon: <Database size={24} />,
      featured: true
    },
    {
      title: "Design of RCC Foot Over Bridge",
      type: "Academic Project",
      date: "2024",
      description: "Designed a reinforced concrete (RCC) foot over bridge ensuring safety and structural stability. Conducted complex structural analysis and design optimization utilizing STAAD.Pro software suite.",
      tags: ["STAAD.Pro", "AutoCAD", "Structural Analysis", "RCC Design"],
      icon: <Cuboid size={24} />,
      featured: false
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className={`card project-card ${project.featured ? 'featured' : ''}`} key={index}>
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-links">
                  <a href="#" aria-label="View Project"><ExternalLink size={20} /></a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-meta">
                <span className="project-type">{project.type}</span> | <span className="project-date">{project.date}</span>
              </p>
              <p className="project-description">
                {project.description}
              </p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
