import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title">Achievements & Leadership</h2>
        <div className="achievements-grid">
          
          <div className="card achievement-card">
            <div className="achievement-icon">
              <BookOpen size={28} />
            </div>
            <h3 className="achievement-title">Publications</h3>
            <h4 className="achievement-subtitle">Review Paper Presenter</h4>
            <p className="achievement-meta">Springer Journal | 2026</p>
            <p className="achievement-desc">
              Authored and presented a review paper based on final year project findings in a Springer-indexed journal, contributing to the academic discourse in civil engineering.
            </p>
          </div>

          <div className="card achievement-card">
            <div className="achievement-icon">
              <Users size={28} />
            </div>
            <h3 className="achievement-title">Leadership</h3>
            <h4 className="achievement-subtitle">Student Council Member</h4>
            <p className="achievement-meta">AKTU | 2023 - Present</p>
            <ul className="achievement-list">
              <li>Elected Class Representative for 3 consecutive years.</li>
              <li>Led organizing committee for institutional tech-fests and seminars.</li>
            </ul>
          </div>

          <div className="card achievement-card">
            <div className="achievement-icon">
              <Award size={28} />
            </div>
            <h3 className="achievement-title">Professional Memberships</h3>
            <h4 className="achievement-subtitle">Active Member</h4>
            <ul className="achievement-list memberships-list">
              <li>American Concrete Institute (ACI)</li>
              <li>Institution of Engineers India (IEI)</li>
              <li>Institution of Civil Engineers (ICE)</li>
              <li>American Society of Civil Engineers (ASCE)</li>
              <li>Indian Concrete Institute (ICI)</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
