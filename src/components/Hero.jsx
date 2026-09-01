import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Volume2, VolumeX, ArrowRight, Calendar, Sparkles, Bot, Users, Home, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  const { t, speak, activeSpeakingId } = useLanguage();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleListenHero = () => {
    speak('hero-speech', t('hero.audioText'));
  };

  const isSpeakingHero = activeSpeakingId === 'hero-speech';

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid-layout">
          {/* Left Column: Heading, Subtitle & 3 Large Action Buttons */}
          <div className="hero-text-col">
            <div className="hero-tag-pill">
              <Sparkles size={16} className="tag-sparkle" />
              <span>Digital India • Citizen Friendly Census Portal</span>
            </div>

            <h1 className="hero-title">{t('hero.title')}</h1>

            <p className="hero-description">{t('hero.subtitle')}</p>

            {/* 3 Large Action Buttons */}
            <div className="hero-buttons-row">
              <button
                onClick={() => scrollTo('ai-guide')}
                className="btn-large btn-large-primary"
                id="hero-start-guide"
              >
                <span>{t('hero.startBtn')}</span>
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() => scrollTo('schedule')}
                className="btn-large btn-large-outline"
                id="hero-check-schedule"
              >
                <Calendar size={20} />
                <span>{t('hero.scheduleBtn')}</span>
              </button>

              <button
                onClick={handleListenHero}
                className={`btn-large btn-listen ${isSpeakingHero ? 'speaking' : ''}`}
                id="hero-listen-btn"
                aria-label="Listen to hero description"
              >
                {isSpeakingHero ? <VolumeX size={20} /> : <Volume2 size={20} />}
                <span>{isSpeakingHero ? t('stopBtn') : t('hero.listenBtn')}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Friendly Visual Illustration (Citizens, Homes, Aadya AI) */}
          <div className="hero-visual-col">
            <div className="friendly-illustration-card">
              <div className="illustration-top-badge">
                <span className="badge-flag">🇮🇳</span>
                <span className="badge-name">India Digital Census 2027</span>
              </div>

              <div className="illustration-graphic-area">
                {/* Central Friendly Aadya Avatar */}
                <div className="aadya-hero-avatar">
                  <Bot size={48} className="bot-hero-icon" />
                  <span className="aadya-hero-label">Aadya • AI Guide</span>
                </div>

                {/* Satellite Community Nodes */}
                <div className="hero-mini-card node-citizens">
                  <div className="mini-icon-circle blue">
                    <Users size={24} />
                  </div>
                  <div>
                    <strong>All Citizens</strong>
                    <span>Counted & Supported</span>
                  </div>
                </div>

                <div className="hero-mini-card node-homes">
                  <div className="mini-icon-circle green">
                    <Home size={24} />
                  </div>
                  <div>
                    <strong>Every Home</strong>
                    <span>Facilities & Amenities</span>
                  </div>
                </div>

                <div className="hero-mini-card node-safe">
                  <div className="mini-icon-circle cyan">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <strong>100% Free & Safe</strong>
                    <span>Protected by Law</span>
                  </div>
                </div>
              </div>

              <div className="illustration-footer-box">
                <p className="illustration-footer-text">
                  ✨ <strong>{t('hero.cardTitle')}</strong> — {t('hero.cardText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          background: var(--grad-hero);
          padding: 64px 0 80px 0;
          border-bottom: 1.5px solid #CCFBF1;
        }
        .hero-grid-layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          align-items: center;
        }
        .hero-tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          background: #E0F2FE;
          border: 1px solid #BAE6FD;
          color: #0369A1;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .tag-sparkle {
          color: #0284C7;
        }
        .hero-title {
          font-size: clamp(2.4rem, 4.2vw, 3.6rem);
          font-weight: 800;
          color: #1E3A8A;
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin-bottom: 18px;
        }
        .hero-description {
          font-size: 1.25rem;
          color: #334155;
          line-height: 1.6;
          margin-bottom: 36px;
          max-width: 580px;
        }
        .hero-buttons-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* Right Illustration Card */
        .friendly-illustration-card {
          background: #FFFFFF;
          border: 2px solid #BFDBFE;
          border-radius: var(--radius-lg);
          padding: 28px;
          box-shadow: 0 16px 36px rgba(37, 99, 235, 0.1);
          position: relative;
        }
        .illustration-top-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-bottom: 16px;
          border-bottom: 1px solid #E2E8F0;
          margin-bottom: 24px;
        }
        .badge-flag {
          font-size: 1.4rem;
        }
        .badge-name {
          font-size: 0.92rem;
          font-weight: 800;
          color: #1E40AF;
        }

        .illustration-graphic-area {
          position: relative;
          min-height: 240px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          background: linear-gradient(180deg, #F0F7FF 0%, #ECFEFF 100%);
          border-radius: var(--radius-md);
          padding: 24px;
          border: 1px dashed #93C5FD;
        }
        .aadya-hero-avatar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          background: #FFFFFF;
          padding: 16px 24px;
          border-radius: var(--radius-lg);
          border: 2px solid #06B6D4;
          box-shadow: 0 8px 20px rgba(6, 182, 212, 0.2);
          z-index: 2;
        }
        .bot-hero-icon {
          color: #0284C7;
        }
        .aadya-hero-label {
          font-size: 0.88rem;
          font-weight: 800;
          color: #0369A1;
        }

        .hero-mini-card {
          width: 100%;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: var(--shadow-sm);
        }
        .hero-mini-card strong {
          display: block;
          font-size: 0.9rem;
          color: #0F172A;
        }
        .hero-mini-card span {
          display: block;
          font-size: 0.76rem;
          color: #64748B;
        }
        .mini-icon-circle {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .mini-icon-circle.blue { background: #DBEAFE; color: #1D4ED8; }
        .mini-icon-circle.green { background: #D1FAE5; color: #059669; }
        .mini-icon-circle.cyan { background: #CFFAFE; color: #0891B2; }

        .illustration-footer-box {
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px solid #E2E8F0;
        }
        .illustration-footer-text {
          font-size: 0.86rem;
          color: #334155;
          line-height: 1.5;
        }

        @media (max-width: 960px) {
          .hero-grid-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
};
