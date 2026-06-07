import React from 'react';
import { Briefcase, MapPin, Calendar, HardHat } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Civil Design Intern",
      company: "Software Training",
      date: "2023 - 2024",
      description: "Gained comprehensive technical proficiency in drafting and structural analysis utilizing industry-standard software suites including AutoCAD and STAAD.Pro.",
      icon: <Briefcase size={20} />
    },
    {
      title: "Industry Visits & Seminars",
      company: "Field Exposure",
      date: "2023 - Present",
      description: "Actively participated in comprehensive site operations and observations at Adani, L&T, UltraTech, and Excella Kutumb to build a deep understanding of project management and execution. Engaged in expert guest lectures focusing on modern sustainable construction practices.",
      icon: <HardHat size={20} />
    }
  ];

  return (
    <section id="experience" className="section bg-alt">
      <div className="container">
        <h2 className="section-title">Experience & Exposure</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot">
                {exp.icon}
              </div>
              <div className="timeline-content card">
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <div className="timeline-meta">
                  <span className="meta-item"><Calendar size={16} /> {exp.date}</span>
                </div>
                <p className="timeline-description">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
