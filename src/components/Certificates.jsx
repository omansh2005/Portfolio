import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, Building2, X, ZoomIn } from 'lucide-react';
import './Certificates.css';

// ── Real certificate images from assets ───────────────────────────────────────
import imgIEI        from '../assets/iei membership.jfif';
import imgACI        from '../assets/aci memebrshp.jfif';
import imgASCE       from '../assets/asce membership.jfif';
import imgSTAAD      from '../assets/staad pro.jfif';
import imgTechFest1  from '../assets/1st rank in tech fest.jfif';
import imgPicPanic   from '../assets/1st rank in picture panic.jfif';
import imgBeatWork   from '../assets/1st rank beat the work.jfif';
import imgCADMania   from '../assets/2nd rank in cad maina.jfif';
import imgAutoCAD2nd from '../assets/2nd rank in atocad speed test.jfif';
import imgGantavya   from '../assets/gantavya.jfif';
import imgGoogleAds  from '../assets/CERTIFICATE_LANDING_PAGE~D4ZL4CHW9YYX.jpeg';
import imgExcel      from '../assets/m ecxel.jpeg';
import imgDataExcel  from '../assets/data analysis using ms excel.jpeg';
import imgBusiness   from '../assets/business analysis and project mgmt.jpeg';

// ── Certificate data ──────────────────────────────────────────────────────────
const certificates = [
  {
    id: 1,
    title: 'Student Member – Institution of Engineers (India)',
    issuer: 'Institution of Engineers India (IEI), Kolkata',
    date: 'Feb 2026',
    expiry: 'Feb 2027',
    category: 'Membership',
    credentialId: 'IEIESC/226026/SRSM/CV/84423',
    verifyLink: null,
    description:
      'Student chapter membership granted to Omansh Srivastava of Shri Ram Swaroop Memorial College of Engineering & Management, Lucknow. Valid through 2027.',
    image: imgIEI,
    color: '#3b82f6',
  },
  {
    id: 2,
    title: 'ACI Membership Certificate',
    issuer: 'American Concrete Institute (ACI)',
    date: 'Dec 2025',
    expiry: 'Dec 2026',
    category: 'Membership',
    credentialId: null,
    verifyLink: null,
    description:
      'Certified as a student member of the American Concrete Institute, recognising commitment to concrete design, construction and research.',
    image: imgACI,
    color: '#f59e0b',
  },
  {id: 9,
    title: 'Student Membership – ASCE',
    issuer: 'American Society of Civil Engineers',
    date: '2025',
    expiry: null,
    category: 'Membership',
    credentialId: null,
    verifyLink: null,
    description:
      'Elected student member of the American Society of Civil Engineers (ASCE), the world\'s oldest national engineering society.',
    image: imgASCE,
    color: '#3b82f6',
  },
  {
    id: 3,
    title: 'STAAD.Pro Internship Certificate',
    issuer: 'SRDT Pvt. Ltd.',
    date: 'Nov 2025',
    expiry: null,
    category: 'Structural Engineering',
    credentialId: null,
    verifyLink: null,
    description:
      'Certificate of completion for a STAAD.Pro internship covering structural modelling, analysis of RCC and steel structures, and IS code compliance workflows.',
    image: imgSTAAD,
    color: '#00e5ff',
  },
  {
    id: 4,
    title: 'Civil Tech Fest 2025-26 – 1st Rank, Technical Quiz',
    issuer: 'Shri Ramswaroop Memorial College of Engineering & Management, Lucknow',
    date: 'Oct 2025',
    expiry: null,
    category: 'Achievement',
    credentialId: null,
    verifyLink: null,
    description:
      'Secured 1st rank in the Technical Quiz at Civil Tech Fest 2025-26 (Winter Edition), demonstrating strong theoretical knowledge in civil engineering fundamentals.',
    image: imgTechFest1,
    color: '#10b981',
  },
  {
    id: 5,
    title: 'Civil Tech Fest 2025-26 – 1st Rank, Picture Panic',
    issuer: 'Shri Ramswaroop Memorial College of Engineering & Management, Lucknow',
    date: 'Oct 2025',
    expiry: null,
    category: 'Achievement',
    credentialId: null,
    verifyLink: null,
    description:
      'Awarded 1st rank in the Picture Panic event at Civil Tech Fest 2025-26 (Winter Edition), demonstrating quick visual identification and analytical skills.',
    image: imgPicPanic,
    color: '#10b981',
  },
  {
    id: 6,
    title: 'Civil Tech Fest 2025-26 – 1st Rank, Beat the Weight',
    issuer: 'Shri Ramswaroop Memorial College of Engineering & Management, Lucknow',
    date: 'Apr 2025',
    expiry: null,
    category: 'Achievement',
    credentialId: null,
    verifyLink: null,
    description:
      'Secured 1st rank in the Beat the Weight competition at Civil Tech Fest 2025-26 (Summer Edition), applying structural load estimation skills under timed conditions.',
    image: imgBeatWork,
    color: '#10b981',
  },
  {
    id: 7,
    title: 'Civil Tech Fest 2025-26 – 2nd Rank, CAD Mania',
    issuer: 'Shri Ramswaroop Memorial College of Engineering & Management, Lucknow',
    date: 'Oct 2025',
    expiry: null,
    category: 'Achievement',
    credentialId: null,
    verifyLink: null,
    description:
      'Placed 2nd in the CAD Mania event at Civil Tech Fest 2025-26 (Winter Edition), showcasing proficiency in AutoCAD drafting and precision drawing.',
    image: imgCADMania,
    color: '#a855f7',
  },
  {
    id: 8,
    title: 'Civil Tech Fest 2025-26 – 2nd Rank, AutoCAD Speed Test',
    issuer: 'Shri Ramswaroop Memorial College of Engineering & Management, Lucknow',
    date: 'Apr 2025',
    expiry: null,
    category: 'Achievement',
    credentialId: null,
    verifyLink: null,
    description:
      'Awarded 2nd rank in the AutoCAD Speed Test at Civil Tech Fest 2025-26 (Summer Edition), demonstrating speed and accuracy in 2D drafting tasks.',
    image: imgAutoCAD2nd,
    color: '#a855f7',
  },
    {
    id: 10,
    title: 'Gantavya\'21 – 1st Prize, Survey Hunt',
    issuer: 'Shri Ramswaroop Memorial College of Engineering & Management, Lucknow',
    date: 'Dec 2025',
    expiry: null,
    category: 'Achievement',
    credentialId: null,
    verifyLink: null,
    description:
      'Awarded 1st prize in the Gantavya Survey Hunt competition, recognising excellence in field surveying techniques and teamwork during the annual civil engineering festival.',
    image: imgGantavya,
    color: '#f59e0b',
  },
  {
    id: 11,
    title: 'Google Ads for Beginners',
    issuer: 'Coursera Project Network',
    date: 'Sep 2024',
    expiry: null,
    category: 'Online Course',
    credentialId: 'D4ZL4CHW9YYX',
    verifyLink: 'https://coursera.org/verify/D4ZL4CHW9YYX',
    description:
      'Completed the Google Ads for Beginners guided project on Coursera, covering campaign setup, keyword targeting, ad copywriting, and performance measurement fundamentals.',
    image: imgGoogleAds,
    color: '#ef4444',
  },
  {
    id: 12,
    title: 'Getting Started with Microsoft Excel',
    issuer: 'Coursera Project Network',
    date: 'Aug 2024',
    expiry: null,
    category: 'Online Course',
    credentialId: 'MBR0TGZWJKFJ',
    verifyLink: 'https://coursera.org/verify/MBR0TGZWJKFJ',
    description:
      'Completed a hands-on Coursera project covering Excel fundamentals including formulas, functions, charts, and spreadsheet organisation for data-driven tasks.',
    image: imgExcel,
    color: '#10b981',
  },
  {
    id: 13,
    title: 'Introduction to Data Analysis using Microsoft Excel',
    issuer: 'Coursera Project Network',
    date: 'Aug 2024',
    expiry: null,
    category: 'Online Course',
    credentialId: 'XT4YGOOVEXGB',
    verifyLink: 'https://coursera.org/verify/XT4YGOOVEXGB',
    description:
      'Completed a Coursera guided project on data analysis using Microsoft Excel, covering pivot tables, data cleaning, statistical summaries, and visualisation dashboards.',
    image: imgDataExcel,
    color: '#10b981',
  },
  {
    id: 14,
    title: 'Business Analysis & Process Management',
    issuer: 'Coursera Project Network',
    date: 'Aug 2024',
    expiry: null,
    category: 'Online Course',
    credentialId: 'B5D5BT1N67SU',
    verifyLink: 'https://coursera.org/verify/B5D5BT1N67SU',
    description:
      'Completed a Coursera guided project covering business process modelling, requirements elicitation, stakeholder analysis, and workflow optimisation techniques.',
    image: imgBusiness,
    color: '#a855f7',
  },
];

const categories = ['All', ...Array.from(new Set(certificates.map((c) => c.category)))];

// ── Lightbox ──────────────────────────────────────────────────────────────────
const Lightbox = ({ cert, onClose }) => {
  if (!cert) return null;
  return (
    <div className="cert-lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={cert.title}>
      <div className="cert-lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button className="cert-lightbox-close" onClick={onClose} aria-label="Close">
          <X size={22} />
        </button>
        <img src={cert.image} alt={cert.title} className="cert-lightbox-img" />
        <div className="cert-lightbox-info">
          <h3>{cert.title}</h3>
          <p className="cert-lightbox-issuer">{cert.issuer} &middot; {cert.date}{cert.expiry ? ` – ${cert.expiry}` : ''}</p>
          {cert.credentialId && <p className="cert-lightbox-id">ID: {cert.credentialId}</p>}
          {cert.verifyLink && (
            <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className="cert-lightbox-verify">
              Verify Certificate <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Card ──────────────────────────────────────────────────────────────────────
const CertificateCard = ({ cert, onOpen }) => (
  <div
    className="cert-card card"
    style={{ '--cert-color': cert.color }}
    onClick={() => onOpen(cert)}
    role="button"
    tabIndex={0}
    aria-label={`View ${cert.title} certificate`}
    onKeyDown={(e) => e.key === 'Enter' && onOpen(cert)}
  >
    {/* Thumbnail */}
    <div className="cert-thumb-wrap">
      <img src={cert.image} alt={cert.title} className="cert-thumb" loading="lazy" />
      <div className="cert-thumb-overlay">
        <ZoomIn size={28} />
        <span>View Certificate</span>
      </div>
    </div>

    {/* Body */}
    <div className="cert-body">
      <div className="cert-card-top">
        <span className="cert-category-badge">{cert.category}</span>
        {cert.verifyLink && (
          <a
            href={cert.verifyLink}
            className="cert-verify-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Verify ${cert.title}`}
          >
            <ExternalLink size={13} /> Verify
          </a>
        )}
      </div>

      <h3 className="cert-title">{cert.title}</h3>

      <div className="cert-meta-row">
        <span className="cert-meta-item"><Building2 size={12} />{cert.issuer}</span>
        <span className="cert-meta-item"><Calendar size={12} />{cert.date}{cert.expiry ? ` – ${cert.expiry}` : ''}</span>
      </div>

      <p className="cert-description">{cert.description}</p>

      {cert.credentialId && (
        <div className="cert-id">ID: {cert.credentialId}</div>
      )}
    </div>

    <div className="cert-glow-bar" />
  </div>
);

// ── Main Section ──────────────────────────────────────────────────────────────
const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxCert, setLightboxCert] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2 className="section-title">Licenses &amp; Certifications</h2>

        {/* Category filter */}
        <div className="cert-filter-bar" role="tablist" aria-label="Certificate categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`cert-filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="cert-grid">
          {filtered.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} onOpen={setLightboxCert} />
          ))}
        </div>
      </div>

      <Lightbox cert={lightboxCert} onClose={() => setLightboxCert(null)} />
    </section>
  );
};

export default Certificates;
