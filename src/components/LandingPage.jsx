import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

/* ── Feature list shown with staggered check animations ── */
const FEATURES = [
  { label: 'Understand Census',  color: '#22D3EE' },
  { label: 'Check Schedule',     color: '#34D399' },
  { label: 'AI Voice Guide',     color: '#38BDF8' },
  { label: 'Stay Safe Online',   color: '#6EE7B7' },
];

export const LandingPage = () => {
  const { navigateTo } = useLanguage();
  const [checked, setChecked] = useState([]);
  const [showCta, setShowCta] = useState(false);

  /* Stagger each checkbox in, then reveal CTA */
  useEffect(() => {
    FEATURES.forEach((_, i) => {
      setTimeout(() => {
        setChecked(prev => [...prev, i]);
      }, 900 + i * 400);
    });
    setTimeout(() => setShowCta(true), 900 + FEATURES.length * 400 + 200);
  }, []);

  const handleContinue = () => {
    localStorage.setItem('censusconnect_onboarded', 'true');
    navigateTo('login');
  };

  return (
    <div className="lp2-root">
      {/* ── Gradient background ── */}
      <div className="lp2-bg" aria-hidden="true">
        {/* Floating blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
        {/* Floating dots grid */}
        <div className="dots-grid" />
        {/* Diagonal shimmer band */}
        <div className="shimmer-band" />
      </div>

      {/* ── Content card ── */}
      <div className="lp2-card-wrap">
        {/* Top pill */}
        <div className="lp2-top-pill">
          <span>🇮🇳</span>
          <span>Digital India · Census 2027</span>
        </div>

        {/* Title */}
        <h1 className="lp2-title">
          Census<span className="lp2-connect">Connect</span>{' '}
          <span className="lp2-ai">AI</span>
        </h1>

        {/* Tagline */}
        <p className="lp2-tagline">
          Your Smart Guide for <strong>Census 2027</strong>
        </p>

        {/* Divider */}
        <div className="lp2-divider" />

        {/* Animated feature checkboxes */}
        <div className="lp2-features" role="list">
          {FEATURES.map((feat, i) => {
            const isVisible = checked.includes(i);
            return (
              <div
                key={i}
                role="listitem"
                className={`lp2-feat-row ${isVisible ? 'lp2-feat-row--visible' : ''}`}
                style={{ '--feat-color': feat.color }}
              >
                <div className={`lp2-check-circle ${isVisible ? 'lp2-check-circle--done' : ''}`}>
                  <CheckCircle2 size={22} />
                </div>
                <span className="lp2-feat-label">{feat.label}</span>
              </div>
            );
          })}
        </div>

        {/* CTA button */}
        <div className={`lp2-cta-wrap ${showCta ? 'lp2-cta-wrap--visible' : ''}`}>
          <button
            className="lp2-cta-btn"
            onClick={handleContinue}
            id="landing-get-started-btn"
          >
            <span>Get Started</span>
            <ArrowRight size={20} />
          </button>
          <p className="lp2-cta-note">Free · Multilingual · AI Powered</p>
        </div>
      </div>

      {/* ── Floating particles ── */}
      {[...Array(8)].map((_, i) => (
        <div key={i} className={`particle particle-${i + 1}`} aria-hidden="true" />
      ))}

      <style>{`
        /* ═══════════════════════════════════════════
           ROOT
        ═══════════════════════════════════════════ */
        .lp2-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 32px 20px;
        }

        /* ═══════════════════════════════════════════
           ANIMATED GRADIENT BACKGROUND
        ═══════════════════════════════════════════ */
        .lp2-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          background: linear-gradient(
            135deg,
            #1E40AF 0%,
            #0891B2 30%,
            #0D9488 65%,
            #059669 100%
          );
          animation: bgShift 12s ease-in-out infinite alternate;
        }
        @keyframes bgShift {
          0%   { filter: hue-rotate(0deg)   brightness(1); }
          50%  { filter: hue-rotate(8deg)   brightness(1.04); }
          100% { filter: hue-rotate(-6deg)  brightness(0.97); }
        }

        /* Floating blobs */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.35;
          animation: blobDrift 10s ease-in-out infinite alternate;
        }
        .blob-1 {
          width: 500px; height: 500px;
          background: #38BDF8;
          top: -140px; left: -100px;
          animation-duration: 12s;
        }
        .blob-2 {
          width: 380px; height: 380px;
          background: #34D399;
          top: 60px; right: -80px;
          animation-duration: 9s;
          animation-delay: 2s;
        }
        .blob-3 {
          width: 300px; height: 300px;
          background: #22D3EE;
          bottom: -80px; left: 30%;
          animation-duration: 14s;
          animation-delay: 4s;
        }
        .blob-4 {
          width: 200px; height: 200px;
          background: #6EE7B7;
          bottom: 40px; right: 25%;
          animation-duration: 8s;
          animation-delay: 1s;
        }
        @keyframes blobDrift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(28px, -36px) scale(1.08); }
        }

        /* Dot grid overlay */
        .dots-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.14) 1.5px, transparent 1.5px);
          background-size: 36px 36px;
        }

        /* Diagonal shimmer band */
        .shimmer-band {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255,255,255,0.04) 50%,
            transparent 60%
          );
          animation: shimmerMove 6s linear infinite;
        }
        @keyframes shimmerMove {
          from { transform: translateX(-30%); }
          to   { transform: translateX(30%); }
        }

        /* ═══════════════════════════════════════════
           FLOATING PARTICLES
        ═══════════════════════════════════════════ */
        .particle {
          position: fixed;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(2px);
          animation: particleFloat linear infinite;
          z-index: 1;
          pointer-events: none;
        }
        .particle-1 { width:14px; height:14px; left:8%;  bottom:-20px; animation-duration:7s;  animation-delay:0s;   }
        .particle-2 { width:20px; height:20px; left:18%; bottom:-20px; animation-duration:10s; animation-delay:1.2s; }
        .particle-3 { width:10px; height:10px; left:32%; bottom:-20px; animation-duration:8s;  animation-delay:2.5s; }
        .particle-4 { width:16px; height:16px; left:50%; bottom:-20px; animation-duration:11s; animation-delay:0.8s; }
        .particle-5 { width:22px; height:22px; left:65%; bottom:-20px; animation-duration:9s;  animation-delay:3s;   }
        .particle-6 { width:12px; height:12px; left:75%; bottom:-20px; animation-duration:7.5s;animation-delay:1.8s; }
        .particle-7 { width:18px; height:18px; left:85%; bottom:-20px; animation-duration:13s; animation-delay:0.4s; }
        .particle-8 { width: 8px; height: 8px; left:93%; bottom:-20px; animation-duration:6s;  animation-delay:4s;   }
        @keyframes particleFloat {
          0%   { transform: translateY(0)    rotate(0deg);   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(-110vh) rotate(720deg); opacity: 0; }
        }

        /* ═══════════════════════════════════════════
           CONTENT CARD
        ═══════════════════════════════════════════ */
        .lp2-card-wrap {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 520px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          border-radius: 32px;
          padding: 56px 48px;
          box-shadow:
            0 24px 64px rgba(0, 0, 0, 0.3),
            0 4px 16px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          animation: cardRise 0.7s cubic-bezier(0.34, 1.2, 0.64, 1) both;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }
        @keyframes cardRise {
          from { opacity: 0; transform: translateY(40px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }

        /* Top pill badge */
        .lp2-top-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #FFFFFF;
          padding: 6px 18px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 28px;
        }

        /* ── Title ── */
        .lp2-title {
          font-size: clamp(2.6rem, 6vw, 4rem);
          font-weight: 900;
          color: #FFFFFF;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin: 0 0 12px 0;
          text-shadow: 0 2px 20px rgba(0,0,0,0.2);
        }
        .lp2-connect {
          background: linear-gradient(90deg, #BAE6FD 0%, #67E8F9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .lp2-ai {
          background: linear-gradient(90deg, #6EE7B7 0%, #34D399 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Tagline */
        .lp2-tagline {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.88);
          font-weight: 500;
          line-height: 1.5;
          margin: 0 0 28px 0;
        }
        .lp2-tagline strong {
          color: #FFFFFF;
          font-weight: 800;
        }

        /* Divider */
        .lp2-divider {
          width: 64px;
          height: 3px;
          border-radius: 100px;
          background: linear-gradient(90deg, #38BDF8, #34D399);
          margin-bottom: 32px;
        }

        /* ── Feature checkboxes ── */
        .lp2-features {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 36px;
        }
        .lp2-feat-row {
          display: flex;
          align-items: center;
          gap: 14px;
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.3, 0.64, 1);
        }
        .lp2-feat-row--visible {
          opacity: 1;
          transform: translateX(0);
        }
        .lp2-check-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.3);
          flex-shrink: 0;
          transition: all 0.35s cubic-bezier(0.34, 1.4, 0.64, 1);
          background: rgba(255, 255, 255, 0.05);
        }
        .lp2-check-circle--done {
          background: var(--feat-color);
          border-color: var(--feat-color);
          color: #FFFFFF;
          box-shadow: 0 0 16px color-mix(in srgb, var(--feat-color) 50%, transparent);
          animation: checkBounce 0.5s cubic-bezier(0.34, 1.6, 0.64, 1) both;
        }
        @keyframes checkBounce {
          0%  { transform: scale(0.3); }
          60% { transform: scale(1.2); }
          100%{ transform: scale(1); }
        }
        .lp2-feat-label {
          font-size: 1.05rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.92);
          text-align: left;
          letter-spacing: 0.01em;
        }

        /* ── CTA button ── */
        .lp2-cta-wrap {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .lp2-cta-wrap--visible {
          opacity: 1;
          transform: translateY(0);
        }
        .lp2-cta-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #FFFFFF;
          color: #0F172A;
          border: none;
          padding: 18px 36px;
          border-radius: 14px;
          font-size: 1.1rem;
          font-weight: 900;
          cursor: pointer;
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.25),
            0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.25s ease;
          letter-spacing: 0.01em;
        }
        .lp2-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow:
            0 16px 48px rgba(0, 0, 0, 0.3),
            0 4px 12px rgba(0, 0, 0, 0.12);
          background: #F0FDFF;
        }
        .lp2-cta-btn svg {
          transition: transform 0.2s ease;
        }
        .lp2-cta-btn:hover svg {
          transform: translateX(4px);
        }
        .lp2-cta-note {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* ── Responsive ── */
        @media (max-width: 560px) {
          .lp2-card-wrap { padding: 40px 28px; }
          .lp2-title { font-size: 2.4rem; }
        }
      `}</style>
    </div>
  );
};
