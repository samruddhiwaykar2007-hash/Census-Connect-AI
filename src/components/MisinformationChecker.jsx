import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { predefinedMisinfoCases, analyzeSimpleMessage } from '../data/misinformationData';
import { 
  Search, 
  AlertTriangle, 
  ShieldAlert, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  Info,
  ArrowLeft
} from 'lucide-react';

export const MisinformationChecker = () => {
  const { language, t, speak, activeSpeakingId, navigateTo } = useLanguage();
  const [inputText, setInputText] = useState(predefinedMisinfoCases[0].input);
  const [result, setResult] = useState(() => predefinedMisinfoCases[0]);

  const handleCheck = (textToCheck) => {
    const text = textToCheck || inputText;
    if (!text.trim()) return;
    const res = analyzeSimpleMessage(text);
    setResult(res);
  };

  const handleSelectSample = (sampleCase) => {
    let text = sampleCase.input;
    if (language === 'hi' && sampleCase.inputHi) text = sampleCase.inputHi;
    if (language === 'mr' && sampleCase.inputMr) text = sampleCase.inputMr;

    setInputText(text);
    handleCheck(text);
  };

  const getBadgeText = (res) => {
    if (language === 'hi' && res.badgeHi) return res.badgeHi;
    if (language === 'mr' && res.badgeMr) return res.badgeMr;
    return res.badge;
  };

  const handleListenResult = () => {
    if (!result) return;
    const badge = getBadgeText(result);
    const textToSpeak = `${badge}. ${result.simpleExplanation} ${result.actions.join('. ')}`;
    speak('fact-check-result', textToSpeak);
  };

  return (
    <section id="misinfo" className="section-wrapper bg-light-blue dedicated-page-view">
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
          <span className="breadcrumb-tag">Home / Fact Checker</span>
        </div>

        {/* Section Header */}
        <div className="section-header-friendly">
          <div className="section-pill-tag">
            <Search size={16} />
            <span>{t('misinfo.tag')}</span>
          </div>
          <h2>{t('misinfo.title')}</h2>
          <p>{t('misinfo.subtitle')}</p>
        </div>

        {/* Checker Main Layout (Side-by-side on desktop) */}
        <div className="grid-side-by-side">
          {/* Left Column: Input & Sample Pills */}
          <div className="friendly-card fact-input-card">
            <label htmlFor="message-checker-input" className="fact-input-label">
              Paste or type your message here:
            </label>

            <textarea
              id="message-checker-input"
              rows={4}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t('misinfo.placeholder')}
              className="fact-large-textarea"
            />

            <button
              onClick={() => handleCheck(inputText)}
              disabled={!inputText.trim()}
              className="btn-large btn-large-primary check-action-btn"
            >
              <span>{t('misinfo.checkBtn')}</span>
            </button>

            {/* Quick Sample Clickable Buttons */}
            <div className="fact-samples-section">
              <span className="fact-samples-title">{t('misinfo.sampleTitle')}</span>
              <div className="fact-samples-list">
                {predefinedMisinfoCases.map((c) => {
                  let displayText = c.input;
                  if (language === 'hi' && c.inputHi) displayText = c.inputHi;
                  if (language === 'mr' && c.inputMr) displayText = c.inputMr;

                  return (
                    <button
                      key={c.id}
                      onClick={() => handleSelectSample(c)}
                      className={`sample-message-chip chip-${c.status}`}
                    >
                      <span>"{displayText.slice(0, 48)}..."</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Simple Result Display */}
          <div className="friendly-card fact-result-card">
            <h3 className="result-card-heading">Result & Advice:</h3>

            {result ? (
              <div className="result-card-content animate-fade">
                {/* 🟢 Looks Safe / 🟠 Be Careful / 🔴 Possible Scam */}
                <div className={`status-big-banner banner-${result.status}`}>
                  {result.status === 'danger' && <ShieldAlert size={28} className="banner-icon" />}
                  {result.status === 'warn' && <AlertTriangle size={28} className="banner-icon" />}
                  {result.status === 'safe' && <CheckCircle2 size={28} className="banner-icon" />}
                  <span className="status-big-text">{getBadgeText(result)}</span>
                </div>

                <div className="simple-explanation-box">
                  <p className="simple-explanation-text">{result.simpleExplanation}</p>
                </div>

                {/* What should you do? */}
                <div className="actions-box">
                  <h4 className="actions-heading">{t('misinfo.actionTitle')}</h4>
                  <ul className="actions-list">
                    {result.actions.map((act, aIdx) => (
                      <li key={aIdx} className="action-item">
                        <CheckCircle2 size={16} className="act-check-icon" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 🔊 Listen to Result Button */}
                <div className="result-voice-row">
                  <button
                    onClick={handleListenResult}
                    className={`btn-listen ${activeSpeakingId === 'fact-check-result' ? 'speaking' : ''}`}
                  >
                    {activeSpeakingId === 'fact-check-result' ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    <span>{activeSpeakingId === 'fact-check-result' ? t('stopBtn') : '🔊 Listen to Result'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <p className="empty-result-msg">Enter a message on the left to check if it looks safe.</p>
            )}

            {/* Official Confirmation Note */}
            <div className="fact-disclaimer-note">
              <Info size={16} className="info-icon" />
              <span>{t('misinfo.disclaimer')}</span>
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
          background: #FFFFFF;
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

        .fact-input-card, .fact-result-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .fact-input-label {
          display: block;
          font-size: 1.05rem;
          font-weight: 800;
          color: #1E3A8A;
          margin-bottom: 10px;
        }
        .fact-large-textarea {
          width: 100%;
          padding: 14px 16px;
          font-size: 1rem;
          color: #0F172A;
          background: #F8FAFC;
          border: 2px solid #CBD5E1;
          border-radius: var(--radius-md);
          resize: vertical;
          margin-bottom: 16px;
          line-height: 1.5;
        }
        .fact-large-textarea:focus {
          border-color: #2563EB;
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }
        .check-action-btn {
          width: 100%;
          margin-bottom: 24px;
        }

        .fact-samples-section {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid #E2E8F0;
        }
        .fact-samples-title {
          display: block;
          font-size: 0.84rem;
          font-weight: 800;
          color: #64748B;
          margin-bottom: 8px;
          text-transform: uppercase;
        }
        .fact-samples-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .sample-message-chip {
          background: #F8FAFC;
          border: 1.5px solid #CBD5E1;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          font-size: 0.88rem;
          color: #334155;
          text-align: left;
          cursor: pointer;
          transition: all var(--transition);
        }
        .sample-message-chip:hover {
          border-color: #2563EB;
          background: #EFF6FF;
          transform: translateX(4px);
        }

        /* Result Card */
        .result-card-heading {
          font-size: 1.25rem;
          font-weight: 800;
          color: #1E3A8A;
          margin-bottom: 16px;
        }
        .status-big-banner {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          border-radius: var(--radius-md);
          margin-bottom: 18px;
        }
        .banner-danger {
          background: #FEF2F2;
          border: 2px solid #FCA5A5;
          color: #991B1B;
        }
        .banner-warn {
          background: #FFFBEB;
          border: 2px solid #FCD34D;
          color: #92400E;
        }
        .banner-safe {
          background: #ECFDF5;
          border: 2px solid #6EE7B7;
          color: #065F46;
        }
        .status-big-text {
          font-size: 1.3rem;
          font-weight: 800;
        }

        .simple-explanation-box {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          padding: 16px;
          margin-bottom: 18px;
        }
        .simple-explanation-text {
          font-size: 1rem;
          color: #334155;
          line-height: 1.55;
        }

        .actions-box {
          margin-bottom: 20px;
        }
        .actions-heading {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 10px;
        }
        .actions-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .action-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.92rem;
          color: #1E293B;
          line-height: 1.45;
        }
        .act-check-icon {
          color: #059669;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .result-voice-row {
          margin-top: 14px;
          margin-bottom: 18px;
        }

        .fact-disclaimer-note {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: #64748B;
        }
        .info-icon {
          color: #0284C7;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};
