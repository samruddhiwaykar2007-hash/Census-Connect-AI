import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Mail, Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  const { navigateTo } = useLanguage();

  const quickLinks = [
    { id: 'landing',  label: '✨ Welcome & Setup' },
    { id: 'login',    label: '🔐 Citizen Login' },
    { id: 'home',     label: '🏠 Main Dashboard' },
    { id: 'phases',   label: 'Census Phases' },
    { id: 'schedule', label: 'State Schedule' },
    { id: 'ai-guide', label: 'Aadya AI Guide' },
    { id: 'prepare',  label: 'How to Prepare' },
    { id: 'safety',   label: 'Privacy & Safety' },
    { id: 'misinfo',  label: 'Fact Checker' },
    { id: 'insights', label: 'Data Insights' },
  ];

  const handleBackToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="site-footer">
      {/* ── MAIN FOOTER COLUMNS ── */}
      <div className="footer-main">
        <div className="container footer-cols">

          {/* Col 1 — Brand */}
          <div className="footer-col footer-col-brand">
            <div className="footer-logo-row">
              <span className="footer-flag">🇮🇳</span>
              <div>
                <span className="footer-brand-name">
                  Census<span className="f-connect">Connect</span> <span className="f-ai">AI</span>
                </span>
                <p className="footer-brand-tagline">India's Friendly Census Companion</p>
              </div>
            </div>
            <p className="footer-brand-desc">
              A GenAI-powered web application helping every Indian citizen understand
              and complete Census 2027 — in their own language, at their own pace.
            </p>
            <div className="footer-badge-row">
              <span className="footer-badge">🏆 Google for Developers</span>
              <span className="footer-badge">PromptWars × ADYPU 2027</span>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-link-list">
              {quickLinks.map(link => (
                <li key={link.id}>
                  <button
                    className="footer-link-btn"
                    onClick={() => navigateTo(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact / Info */}
          <div className="footer-col">
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-contact-list">
              <li>
                <a
                  href="https://censusindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-ext-link"
                >
                  <ExternalLink size={14} />
                  censusindia.gov.in
                </a>
              </li>
              <li>
                <a
                  href="https://digitalindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-ext-link"
                >
                  <ExternalLink size={14} />
                  digitalindia.gov.in
                </a>
              </li>
              <li className="footer-contact-item">
                <Phone size={14} />
                <span>Census Helpline: 1800-111-580</span>
              </li>
              <li className="footer-contact-item">
                <MapPin size={14} />
                <span>Office of RGI, New Delhi</span>
              </li>
            </ul>

            <h4 className="footer-col-title" style={{ marginTop: '24px' }}>Languages</h4>
            <p className="footer-lang-note">
              English • हिंदी • मराठी • ગુજરાતી<br />
              தமிழ் • తెలుగు • বাংলা • ಕನ್ನಡ
            </p>
          </div>
        </div>
      </div>

      {/* ── DISCLAIMER STRIP ── */}
      <div className="footer-disclaimer">
        <div className="container footer-disclaimer-inner">
          <ShieldCheck size={16} className="disc-icon" />
          <p>
            <strong>Hackathon Prototype — Not an Official Government Portal.</strong>{' '}
            This is a <em>Google for Developers — PromptWars × ADYPU 2027</em> submission.
            All data shown is for demonstration only. For official Census 2027 information, visit{' '}
            <a href="https://censusindia.gov.in" target="_blank" rel="noopener noreferrer">
              censusindia.gov.in
            </a>
          </p>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span className="footer-copy">
            © 2027 CensusConnect AI · Built with ❤️ for Bharat 🇮🇳
          </span>
          <button className="footer-top-btn" onClick={handleBackToTop} aria-label="Back to top">
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        /* ── FOOTER ROOT ── */
        .site-footer {
          background: #0F172A;
          color: #CBD5E1;
          font-family: inherit;
        }

        /* ── MAIN COLUMNS ── */
        .footer-main {
          padding: 56px 0 48px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .footer-cols {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        /* Brand col */
        .footer-col-brand {}
        .footer-logo-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .footer-flag { font-size: 2rem; }
        .footer-brand-name {
          display: block;
          font-size: 1.3rem;
          font-weight: 900;
          color: #F1F5F9;
          line-height: 1.2;
        }
        .f-connect {
          background: linear-gradient(90deg, #38BDF8 0%, #06B6D4 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .f-ai {
          background: linear-gradient(90deg, #34D399 0%, #10B981 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-brand-tagline {
          font-size: 0.78rem;
          color: #64748B;
          font-weight: 600;
          margin-top: 2px;
        }
        .footer-brand-desc {
          font-size: 0.9rem;
          line-height: 1.65;
          color: #94A3B8;
          margin-bottom: 18px;
          max-width: 340px;
        }
        .footer-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .footer-badge {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: #94A3B8;
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        /* Link cols */
        .footer-col-title {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #475569;
          margin-bottom: 16px;
        }
        .footer-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .footer-link-btn {
          background: transparent;
          border: none;
          color: #94A3B8;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 5px 0;
          cursor: pointer;
          text-align: left;
          transition: color 0.18s ease;
          display: block;
          width: 100%;
        }
        .footer-link-btn:hover { color: #38BDF8; }

        /* Contact col */
        .footer-contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-ext-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #38BDF8;
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 600;
          transition: color 0.18s ease;
        }
        .footer-ext-link:hover { color: #7DD3FC; text-decoration: underline; }
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: #94A3B8;
        }
        .footer-contact-item svg { color: #475569; flex-shrink: 0; }
        .footer-lang-note {
          font-size: 0.88rem;
          color: #94A3B8;
          line-height: 1.7;
        }

        /* ── DISCLAIMER ── */
        .footer-disclaimer {
          background: rgba(255,255,255,0.03);
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .footer-disclaimer-inner {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .disc-icon { color: #34D399; flex-shrink: 0; margin-top: 2px; }
        .footer-disclaimer-inner p {
          font-size: 0.82rem;
          color: #64748B;
          line-height: 1.55;
          margin: 0;
        }
        .footer-disclaimer-inner strong { color: #94A3B8; }
        .footer-disclaimer-inner em { color: #38BDF8; font-style: normal; }
        .footer-disclaimer-inner a { color: #38BDF8; }

        /* ── BOTTOM BAR ── */
        .footer-bottom {
          padding: 14px 0;
        }
        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .footer-copy {
          font-size: 0.82rem;
          color: #334155;
        }
        .footer-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #64748B;
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .footer-top-btn:hover {
          background: rgba(56,189,248,0.1);
          border-color: rgba(56,189,248,0.3);
          color: #38BDF8;
        }

        @media (max-width: 900px) {
          .footer-cols { grid-template-columns: 1fr 1fr; }
          .footer-col-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 560px) {
          .footer-cols { grid-template-columns: 1fr; }
          .footer-col-brand { grid-column: auto; }
        }
      `}</style>
    </footer>
  );
};
