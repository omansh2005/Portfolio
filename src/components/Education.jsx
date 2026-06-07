import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'B.Tech in Civil Engineering',
      institution: 'Abdul Kalam Technical University',
      location: 'Lucknow, India',
      duration: '2023 - Present',
      score: 'Current CGPA: 87%',
      details: [
        'Developing a system for automated Bill of Quantities (BOQ) generation using semantic analysis of architectural layouts.',
        'Integrating Civil Engineering workflows with AI to optimize layout processing and estimation accuracy.'
      ],
      icon: <GraduationCap size={24} />
    },
    {
      id: 2,
      degree: 'Class 12th',
      institution: 'City Montessori School',
      location: 'Lucknow, India',
      duration: '2022 - 2023',
      score: 'Score: 95.6%',
      details: [],
      icon: <Award size={24} />
    },
    {
      id: 3,
      degree: 'Class 10th',
      institution: 'City Montessori School',
      location: 'Lucknow, India',
      duration: '2020 - 2021',
      score: 'Score: 97.4%',
      details: [],
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Educational Background</h2>
        <div className="timeline">
          {educationData.map((item) => (
            <div className="timeline-item card" key={item.id}>
              <div className="timeline-icon">
                {item.icon}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-degree">{item.degree}</h3>
                  <span className="timeline-duration">{item.duration}</span>
                </div>
                <h4 className="timeline-institution">{item.institution}</h4>
                <div className="timeline-meta">
                  <span className="timeline-location">{item.location}</span>
                  <span className="timeline-score">{item.score}</span>
                </div>
                {item.details && item.details.length > 0 && (
                  <ul className="timeline-details">
                    {item.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
