import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Home, Users, Volume2, VolumeX, ChevronDown, ChevronUp, Layers, ArrowLeft } from 'lucide-react';

export const CensusPhases = () => {
  const { t, tObj, speak, activeSpeakingId, navigateTo } = useLanguage();
  const [showMorePhase1, setShowMorePhase1] = useState(false);
  const [showMorePhase2, setShowMorePhase2] = useState(false);

  const handleListenSection = () => {
    speak('phases-all', t('phases.audioText'));
  };

  const handleListenPhase1 = () => {
    speak('phase-1', tObj.phases.phase1.audioText);
  };

  const handleListenPhase2 = () => {
    speak('phase-2', tObj.phases.phase2.audioText);
  };

  return (
    <section id="phases" className="section-wrapper bg-white dedicated-page-view">
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
          <span className="breadcrumb-tag">Home / Census Phases</span>
        </div>

        {/* Section Header with Centered Listen Button */}
        <div className="section-header-friendly">
          <div className="section-pill-tag">
            <Layers size={16} />
            <span>{t('phases.tag')}</span>
          </div>
          <h2>{t('phases.title')}</h2>
          <p>{t('phases.subtitle')}</p>

          <div className="section-voice-row">
            <button
              onClick={handleListenSection}
              className={`btn-listen ${activeSpeakingId === 'phases-all' ? 'speaking' : ''}`}
            >
              {activeSpeakingId === 'phases-all' ? <VolumeX size={18} /> : <Volume2 size={18} />}
              <span>{activeSpeakingId === 'phases-all' ? t('stopBtn') : t('listenBtn')}</span>
            </button>
          </div>
        </div>

        {/* SIDE BY SIDE HORIZONTAL CARDS ON DESKTOP */}
        <div className="grid-side-by-side">
          {/* Phase 1 Card */}
          <div className="friendly-card friendly-card-blue phase-card-side">
            <div className="phase-card-header">
              <div className="phase-icon-box blue-box">
                <Home size={32} />
              </div>
              <div>
                <span className="phase-step-pill blue-pill">{tObj.phases.phase1.tag}</span>
                <h3 className="phase-card-title">{tObj.phases.phase1.title}</h3>
              </div>
            </div>

            <p className="phase-card-explanation">{tObj.phases.phase1.desc}</p>

            {/* Simple Examples List */}
            <div className="phase-simple-examples">
              <h4 className="examples-heading">Examples of what is asked:</h4>
              <div className="examples-chips-grid">
                {tObj.phases.phase1.items.map((item, idx) => (
                  <div key={idx} className="example-chip">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Small Learn More */}
            {showMorePhase1 && (
              <div className="learn-more-content">
                <p className="learn-more-text">
                  ✨ <strong>Why it helps:</strong> Helps local authorities plan safe water pipelines, regular electric power, and housing support for your locality.
                </p>
              </div>
            )}

            <div className="phase-card-footer">
              <button
                onClick={() => setShowMorePhase1(!showMorePhase1)}
                className="btn-learn-more"
              >
                <span>{showMorePhase1 ? t('hideBtn') : t('learnMoreBtn')}</span>
                {showMorePhase1 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              <button
                onClick={handleListenPhase1}
                className={`btn-listen-inline ${activeSpeakingId === 'phase-1' ? 'speaking' : ''}`}
                aria-label="Listen to Phase 1"
              >
                {activeSpeakingId === 'phase-1' ? <VolumeX size={15} /> : <Volume2 size={15} />}
                <span>{activeSpeakingId === 'phase-1' ? t('stopBtn') : t('listenBtn')}</span>
              </button>
            </div>
          </div>

          {/* Phase 2 Card */}
          <div className="friendly-card friendly-card-green phase-card-side">
            <div className="phase-card-header">
              <div className="phase-icon-box green-box">
                <Users size={32} />
              </div>
              <div>
                <span className="phase-step-pill green-pill">{tObj.phases.phase2.tag}</span>
                <h3 className="phase-card-title">{tObj.phases.phase2.title}</h3>
              </div>
            </div>

            <p className="phase-card-explanation">{tObj.phases.phase2.desc}</p>

            {/* Simple Examples List */}
            <div className="phase-simple-examples">
              <h4 className="examples-heading">Examples of what is asked:</h4>
              <div className="examples-chips-grid">
                {tObj.phases.phase2.items.map((item, idx) => (
                  <div key={idx} className="example-chip green-chip">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Small Learn More */}
            {showMorePhase2 && (
              <div className="learn-more-content">
                <p className="learn-more-text">
                  ✨ <strong>Why it helps:</strong> Helps the government open new schools, create local job opportunities, and allocate healthcare hospitals.
                </p>
              </div>
            )}

            <div className="phase-card-footer">
              <button
                onClick={() => setShowMorePhase2(!showMorePhase2)}
                className="btn-learn-more"
              >
                <span>{showMorePhase2 ? t('hideBtn') : t('learnMoreBtn')}</span>
                {showMorePhase2 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              <button
                onClick={handleListenPhase2}
                className={`btn-listen-inline ${activeSpeakingId === 'phase-2' ? 'speaking' : ''}`}
                aria-label="Listen to Phase 2"
              >
                {activeSpeakingId === 'phase-2' ? <VolumeX size={15} /> : <Volume2 size={15} />}
                <span>{activeSpeakingId === 'phase-2' ? t('stopBtn') : t('listenBtn')}</span>
              </button>
            </div>
          </div>
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

        .phase-card-side {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .phase-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
        }
        .phase-icon-box {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .blue-box { background: #DBEAFE; color: #1D4ED8; border: 1.5px solid #BFDBFE; }
        .green-box { background: #D1FAE5; color: #059669; border: 1.5px solid #A7F3D0; }

        .phase-step-pill {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 800;
          padding: 2px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 4px;
          text-transform: uppercase;
        }
        .blue-pill { background: #EFF6FF; color: #1E40AF; border: 1px solid #BFDBFE; }
        .green-pill { background: #ECFDF5; color: #065F46; border: 1px solid #A7F3D0; }

        .phase-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.25;
        }
        .phase-card-explanation {
          font-size: 1.05rem;
          color: #334155;
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .phase-simple-examples {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          padding: 16px;
          margin-bottom: 20px;
        }
        .examples-heading {
          font-size: 0.88rem;
          color: #64748B;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .examples-chips-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .example-chip {
          background: #F0F7FF;
          border: 1px solid #BFDBFE;
          color: #1E3A8A;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-weight: 700;
        }
        .example-chip.green-chip {
          background: #F0FDF4;
          border-color: #A7F3D0;
          color: #065F46;
        }

        .learn-more-content {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          padding: 12px 16px;
          margin-bottom: 20px;
          animation: fadeIn 0.2s ease;
        }
        .learn-more-text {
          font-size: 0.9rem;
          color: #334155;
          line-height: 1.5;
        }

        .phase-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid #E2E8F0;
          gap: 12px;
        }
        .btn-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: none;
          color: #2563EB;
          font-size: 0.92rem;
          font-weight: 700;
          cursor: pointer;
        }
        .btn-learn-more:hover {
          text-decoration: underline;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 600px) {
          .examples-chips-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
