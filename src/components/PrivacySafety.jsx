import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Shield, 
  ShieldCheck, 
  KeyRound, 
  SearchCheck, 
  Lock, 
  Volume2, 
  VolumeX, 
  ChevronDown, 
  ChevronUp, 
  Scale,
  ArrowLeft
} from 'lucide-react';

export const PrivacySafety = () => {
  const { t, tObj, speak, activeSpeakingId, navigateTo } = useLanguage();
  const [showLegalDetails, setShowLegalDetails] = useState(false);

  const icons = [Lock, KeyRound, SearchCheck, ShieldCheck];

  const handleListenSection = () => {
    speak('safety-all', t('safety.audioText'));
  };

  const handleListenCard = (idx, text) => {
    speak(`safety-card-${idx}`, text);
  };

  return (
    <section id="safety" className="section-wrapper bg-white dedicated-page-view">
      <div className="container">
        {/* Dedicated Page Top Breadcrumb Bar */}
        <div className="dedicated-page-header-bar">
          <button
            onClick={() => navigateTo('home')}
            className="btn-back-dashboard"
          >
            <ArrowLeft size={18} />
            <span>{t('backHome')}</span>
          </button>
          <span className="breadcrumb-tag">Home / Safety & Privacy</span>
        </div>

        {/* Section Header */}
        <div className="section-header-friendly">
          <div className="section-pill-tag">
            <Shield size={16} />
            <span>{t('safety.tag')}</span>
          </div>
          <h2>{t('safety.title')}</h2>
          <p>{t('safety.subtitle')}</p>

          <div className="section-voice-row">
            <button
              onClick={handleListenSection}
              className={`btn-listen ${activeSpeakingId === 'safety-all' ? 'speaking' : ''}`}
            >
              {activeSpeakingId === 'safety-all' ? <VolumeX size={18} /> : <Volume2 size={18} />}
              <span>{activeSpeakingId === 'safety-all' ? t('stopBtn') : t('listenBtn')}</span>
            </button>
          </div>
        </div>

        {/* 4 Large Clean Safety Cards Grid */}
        <div className="grid-4-col">
          {tObj.safety.cards.map((card, idx) => {
            const IconComp = icons[idx] || ShieldCheck;
            const isSpeakingThis = activeSpeakingId === `safety-card-${idx}`;

            return (
              <div key={idx} className="friendly-card friendly-card-blue safety-clean-card">
                <div className="safety-clean-icon-wrap">
                  <IconComp size={30} className="safety-clean-icon" />
                </div>

                <h3 className="safety-clean-title">{card.title}</h3>
                <p className="safety-clean-desc">{card.desc}</p>

                <div className="safety-card-voice-footer">
                  <button
                    onClick={() => handleListenCard(idx, card.audio || card.desc)}
                    className={`btn-listen-inline ${isSpeakingThis ? 'speaking' : ''}`}
                  >
                    {isSpeakingThis ? <VolumeX size={15} /> : <Volume2 size={15} />}
                    <span>{isSpeakingThis ? t('stopBtn') : t('listenBtn')}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small "Learn More About Privacy" toggle */}
        <div className="privacy-learn-more-row">
          <button
            onClick={() => setShowLegalDetails(!showLegalDetails)}
            className="btn-large-outline privacy-toggle-btn"
          >
            <Scale size={18} />
            <span>{showLegalDetails ? 'Hide Legal Details' : 'Learn More About Privacy Laws (Census Act, 1948)'}</span>
            {showLegalDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {showLegalDetails && (
            <div className="legal-details-expand-box animate-fade">
              <h4 className="legal-heading">⚖️ Section 15 of Census Act, 1948:</h4>
              <p className="legal-p">
                All answers given by you to a census officer are confidential by law. They cannot be shared with tax departments, police, or private companies, and cannot be used in a court of law.
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .dedicated-page-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 24px;
          margin-bottom: 24px;
          border-bottom: 1.5px solid #E2E8F0;
        }
        .btn-back-dashboard {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #EFF6FF;
          border: 1.5px solid #BFDBFE;
          color: #1D4ED8;
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition);
        }
        .btn-back-dashboard:hover {
          background: #DBEAFE;
          transform: translateX(-3px);
        }
        .breadcrumb-tag {
          font-size: 0.88rem;
          font-weight: 700;
          color: #64748B;
        }

        .safety-clean-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .safety-clean-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: #DBEAFE;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .safety-clean-icon {
          color: #1D4ED8;
        }
        .safety-clean-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .safety-clean-desc {
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.5;
          margin-bottom: 16px;
        }
        .safety-card-voice-footer {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid #E2E8F0;
        }

        .privacy-learn-more-row {
          margin-top: 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .privacy-toggle-btn {
          font-size: 0.95rem;
          padding: 12px 24px;
        }
        .legal-details-expand-box {
          max-width: 780px;
          background: #F8FAFC;
          border: 1.5px solid #CBD5E1;
          border-radius: var(--radius-md);
          padding: 20px 24px;
          margin-top: 16px;
          text-align: left;
        }
        .legal-heading {
          font-size: 1rem;
          color: #1E3A8A;
          margin-bottom: 6px;
        }
        .legal-p {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};
