import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Home, 
  Bot, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  Sparkles, 
  Users, 
  ShieldCheck,
  BarChart3,
  Calendar,
  Search,
  Shield,
  CheckSquare,
  MapPin
} from 'lucide-react';

/* 
  glassmorphism KPI counter 
*/
const GlassKPIBar = () => {
  const stats = [
    { label: 'Total Population', value: '144.17 Cr', icon: Users, color: '#2563EB', glow: 'rgba(37,99,235,0.25)' },
    { label: 'Literacy Rate', value: '77.7%', icon: BarChart3, color: '#0891B2', glow: 'rgba(8,145,178,0.25)' },
    { label: 'Urban Citizens', value: '35.39%', icon: Home, color: '#0D9488', glow: 'rgba(13,148,136,0.25)' },
    { label: 'Rural Citizens', value: '64.61%', icon: MapPin, color: '#059669', glow: 'rgba(5,150,105,0.25)' },
    { label: 'States & UTs', value: '36', icon: ShieldCheck, color: '#7C3AED', glow: 'rgba(124,58,237,0.25)' },
  ];

  return (
    <div className="glass-kpi-bar-wrapper">
      <div className="glass-kpi-bar-inner">
        <div className="glass-kpi-title-row">
          <Sparkles size={18} className="kpi-bar-sparkle" />
          <span>Census 2027 — India At A Glance</span>
        </div>
        <div className="glass-kpi-cards-row">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div
                key={idx}
                className="glass-kpi-card"
                style={{ '--glow-color': stat.glow, '--icon-color': stat.color }}
              >
                <div className="glass-kpi-icon-wrap">
                  <IconComp size={22} />
                </div>
                <div className="glass-kpi-text">
                  <strong className="glass-kpi-value">{stat.value}</strong>
                  <span className="glass-kpi-label">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .glass-kpi-bar-wrapper {
          padding: 0 0 36px 0;
        }
        .glass-kpi-bar-inner {
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(191, 219, 254, 0.7);
          border-radius: 24px;
          padding: 24px 28px;
          box-shadow: 
            0 8px 32px rgba(37, 99, 235, 0.08),
            0 2px 8px rgba(6, 182, 212, 0.06),
            inset 0 1px 0 rgba(255,255,255,0.8);
        }
        .glass-kpi-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 800;
          color: #0369A1;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(147, 197, 253, 0.4);
        }
        .kpi-bar-sparkle { color: #0284C7; }

        .glass-kpi-cards-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        .glass-kpi-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(8px);
          border: 1.5px solid rgba(191, 219, 254, 0.5);
          border-radius: 14px;
          padding: 14px 16px;
          box-shadow: 
            0 4px 16px var(--glow-color),
            inset 0 1px 0 rgba(255,255,255,0.9);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .glass-kpi-card:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 
            0 10px 28px var(--glow-color),
            inset 0 1px 0 rgba(255,255,255,0.9);
        }
        .glass-kpi-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(219, 234, 254, 0.8) 0%, rgba(207, 250, 254, 0.8) 100%);
          color: var(--icon-color);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .glass-kpi-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .glass-kpi-value {
          font-size: 1.25rem;
          font-weight: 900;
          color: #0F172A;
          line-height: 1.1;
        }
        .glass-kpi-label {
          font-size: 0.73rem;
          font-weight: 700;
          color: #64748B;
          line-height: 1.2;
        }

        @media (max-width: 1100px) {
          .glass-kpi-cards-row { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .glass-kpi-cards-row { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  );
};

export const HomeDashboard = () => {
  const { t, tObj, navigateTo, speak, activeSpeakingId } = useLanguage();

  const handleListenHero = () => {
    speak('hero-overview', t('hero.audioText'));
  };

  const isSpeakingHero = activeSpeakingId === 'hero-overview';

  const cardsData = [
    {
      id: 'phases',
      icon: Home,
      color: 'blue',
      title: tObj?.cards?.phases?.title || t('cards.phases.title'),
      desc: tObj?.cards?.phases?.desc || t('cards.phases.desc'),
      btnText: tObj?.cards?.phases?.action || t('cards.phases.action'),
      audio: tObj?.phases?.audioText || t('phases.audioText')
    },
    {
      id: 'schedule',
      icon: Calendar,
      color: 'cyan',
      title: tObj?.cards?.schedule?.title || t('cards.schedule.title'),
      desc: tObj?.cards?.schedule?.desc || t('cards.schedule.desc'),
      btnText: tObj?.cards?.schedule?.action || t('cards.schedule.action'),
      audio: tObj?.schedule?.subtitle || "Check your state census schedule for online registration and enumerator survey visits."
    },
    {
      id: 'ai-guide',
      icon: Bot,
      color: 'teal',
      title: tObj?.cards?.aiGuide?.title || t('cards.aiGuide.title'),
      desc: tObj?.cards?.aiGuide?.desc || t('cards.aiGuide.desc'),
      btnText: tObj?.cards?.aiGuide?.action || t('cards.aiGuide.action'),
      audio: tObj?.aiGuide?.greeting || t('aiGuide.greeting')
    },
    {
      id: 'prepare',
      icon: CheckSquare,
      color: 'green',
      title: tObj?.cards?.stepper?.title || t('cards.stepper.title'),
      desc: tObj?.cards?.stepper?.desc || t('cards.stepper.desc'),
      btnText: tObj?.cards?.stepper?.action || t('cards.stepper.action'),
      audio: tObj?.stepper?.audioText || t('stepper.audioText')
    },
    {
      id: 'safety',
      icon: Shield,
      color: 'blue',
      title: tObj?.cards?.safety?.title || t('cards.safety.title'),
      desc: tObj?.cards?.safety?.desc || t('cards.safety.desc'),
      btnText: tObj?.cards?.safety?.action || t('cards.safety.action'),
      audio: tObj?.safety?.audioText || t('safety.audioText')
    },
    {
      id: 'misinfo',
      icon: Search,
      color: 'cyan',
      title: tObj?.cards?.misinfo?.title || t('cards.misinfo.title'),
      desc: tObj?.cards?.misinfo?.desc || t('cards.misinfo.desc'),
      btnText: tObj?.cards?.misinfo?.action || t('cards.misinfo.action'),
      audio: tObj?.misinfo?.subtitle || "Check any forwarded message or link to see if it is safe or a scam risk."
    },
    {
      id: 'insights',
      icon: BarChart3,
      color: 'teal',
      title: tObj?.cards?.insights?.title || t('cards.insights.title'),
      desc: tObj?.cards?.insights?.desc || t('cards.insights.desc'),
      btnText: tObj?.cards?.insights?.action || t('cards.insights.action'),
      audio: tObj?.insights?.audioText || t('insights.audioText')
    }
  ];

  return (
    <div className="home-dashboard-wrapper">
      {/* Hero Welcome Section */}
      <section className="dashboard-hero-section">
        <div className="container">
          <div className="dashboard-hero-grid">
            <div className="dashboard-hero-text">
              <div className="hero-tag-pill">
                <Sparkles size={16} className="tag-sparkle" />
                <span>Digital India • Citizen Friendly Census Portal</span>
              </div>

              <h1 className="hero-main-heading">{t('hero.title')}</h1>
              <p className="hero-main-sub">{t('hero.subtitle')}</p>

              <div className="hero-cta-row">
                <button
                  onClick={() => navigateTo('ai-guide')}
                  className="btn-large btn-large-primary"
                >
                  <Bot size={20} />
                  <span>{t('hero.startBtn')}</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => navigateTo('schedule')}
                  className="btn-large btn-large-outline"
                >
                  <Calendar size={20} />
                  <span>{t('hero.scheduleBtn')}</span>
                </button>

                <button
                  onClick={handleListenHero}
                  className={`btn-large btn-listen ${isSpeakingHero ? 'speaking' : ''}`}
                >
                  {isSpeakingHero ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  <span>{isSpeakingHero ? t('stopBtn') : t('hero.listenBtn')}</span>
                </button>
              </div>
            </div>

            {/* Hero Quick Helper Card */}
            <div className="dashboard-hero-card">
              <div className="helper-card-inner">
                <div className="helper-avatar-circle">
                  <Bot size={40} />
                </div>
                <div>
                  <h3 className="helper-card-title">Aadya • Your Census Guide</h3>
                  <p className="helper-card-desc">
                    Click any section below to open its dedicated page with voice reading in your language.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glassmorphism KPI Bar */}
      <section className="dashboard-stats-section">
        <div className="container">
          <GlassKPIBar />
        </div>
      </section>

      {/* Main Launchpad Grid Section */}
      <section className="dashboard-launchpad-section">
        <div className="container">
          <div className="section-header-friendly">
            <h2>{t('hero.dashboardHeading')}</h2>
            <p>{t('hero.dashboardSub')}</p>
          </div>

          <div className="launchpad-cards-grid">
            {cardsData.map((c) => {
              const IconComp = c.icon;
              const isSpeakingThis = activeSpeakingId === `card-voice-${c.id}`;

              return (
                <div key={c.id} className={`launchpad-card card-${c.color}`}>
                  <div className="launchpad-card-header">
                    <div className={`launchpad-icon-box icon-${c.color}`}>
                      <IconComp size={30} />
                    </div>
                    <span className="card-click-tip">Click to Open</span>
                  </div>

                  <h3 className="launchpad-card-title">{c.title}</h3>
                  <p className="launchpad-card-desc">{c.desc}</p>

                  <div className="launchpad-card-actions">
                    <button
                      onClick={() => navigateTo(c.id)}
                      className="btn-open-page"
                    >
                      <span>{c.btnText}</span>
                      <ArrowRight size={16} />
                    </button>

                    <button
                      onClick={() => speak(`card-voice-${c.id}`, c.audio)}
                      className={`btn-listen-inline ${isSpeakingThis ? 'speaking' : ''}`}
                      aria-label={`Listen to ${c.title}`}
                    >
                      {isSpeakingThis ? <VolumeX size={15} /> : <Volume2 size={15} />}
                      <span>{isSpeakingThis ? t('stopBtn') : t('listenBtn')}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .dashboard-hero-section {
          background: var(--grad-hero);
          padding: 56px 0 64px 0;
          border-bottom: 1.5px solid #CCFBF1;
        }
        .dashboard-hero-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 36px;
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
          margin-bottom: 16px;
        }
        .tag-sparkle { color: #0284C7; }
        .hero-main-heading {
          font-size: clamp(2.2rem, 3.8vw, 3.2rem);
          font-weight: 800;
          color: #1E3A8A;
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .hero-main-sub {
          font-size: 1.2rem;
          color: #334155;
          line-height: 1.55;
          margin-bottom: 28px;
        }
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .dashboard-hero-card {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(12px);
          border: 2px solid rgba(191, 219, 254, 0.7);
          border-radius: var(--radius-lg);
          padding: 24px;
          box-shadow: 0 8px 32px rgba(37,99,235,0.1);
        }
        .helper-card-inner {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .helper-avatar-circle {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          background: var(--grad-blue-cyan);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .helper-card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #1E3A8A;
          margin-bottom: 4px;
        }
        .helper-card-desc {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.45;
        }

        /* Stats section */
        .dashboard-stats-section {
          background: linear-gradient(135deg, #F0F7FF 0%, #ECFEFF 100%);
          padding: 40px 0;
        }

        /* Launchpad Grid */
        .dashboard-launchpad-section {
          padding: 64px 0 80px 0;
          background: #FFFFFF;
        }
        .launchpad-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .launchpad-card {
          background: #FFFFFF;
          border: 2px solid #E2E8F0;
          border-radius: var(--radius-lg);
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition);
        }
        .launchpad-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .card-blue:hover { border-color: #3B82F6; background: #F8FAFF; }
        .card-cyan:hover { border-color: #06B6D4; background: #F0FDFA; }
        .card-teal:hover { border-color: #0D9488; background: #F0FDFA; }
        .card-green:hover { border-color: #10B981; background: #F0FDF4; }

        .launchpad-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .launchpad-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .icon-blue { background: #DBEAFE; color: #1D4ED8; }
        .icon-cyan { background: #CFFAFE; color: #0891B2; }
        .icon-teal { background: #CCFBF1; color: #0D9488; }
        .icon-green { background: #D1FAE5; color: #059669; }

        .card-click-tip {
          font-size: 0.76rem;
          font-weight: 700;
          color: #0284C7;
          background: #E0F2FE;
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }
        .launchpad-card-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 8px;
          line-height: 1.25;
        }
        .launchpad-card-desc {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .launchpad-card-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid #E2E8F0;
          gap: 10px;
        }
        .btn-open-page {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #2563EB 0%, #06B6D4 100%);
          color: #FFFFFF;
          border: none;
          padding: 10px 18px;
          border-radius: var(--radius-full);
          font-size: 0.92rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition);
        }
        .btn-open-page:hover {
          filter: brightness(1.08);
          transform: translateY(-2px);
        }

        @media (max-width: 1060px) {
          .launchpad-cards-grid { grid-template-columns: repeat(2, 1fr); }
          .dashboard-hero-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 680px) {
          .launchpad-cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};
