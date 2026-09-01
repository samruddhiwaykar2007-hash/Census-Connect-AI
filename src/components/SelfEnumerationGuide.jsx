import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  BookOpen, 
  Calendar, 
  CheckSquare, 
  ShieldCheck, 
  Volume2, 
  VolumeX, 
  Square, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const SelfEnumerationGuide = () => {
  const { t, tObj, speak, activeSpeakingId, navigateTo } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [checklist, setChecklist] = useState({
    item0: true,
    item1: true,
    item2: false,
    item3: false
  });

  const steps = [
    { num: 1, title: t('stepper.step1Title'), desc: t('stepper.step1Desc'), icon: BookOpen, color: 'blue' },
    { num: 2, title: t('stepper.step2Title'), desc: t('stepper.step2Desc'), icon: Calendar, color: 'cyan' },
    { num: 3, title: t('stepper.step3Title'), desc: t('stepper.step3Desc'), icon: CheckSquare, color: 'teal' },
    { num: 4, title: t('stepper.step4Title'), desc: t('stepper.step4Desc'), icon: ShieldCheck, color: 'green' }
  ];

  const handleListenStepper = () => {
    speak('stepper-speech', t('stepper.audioText'));
  };

  const toggleCheck = (idx) => {
    setChecklist(prev => ({
      ...prev,
      [`item${idx}`]: !prev[`item${idx}`]
    }));
  };

  return (
    <section id="prepare" className="section-wrapper bg-light-cyan dedicated-page-view">
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
          <span className="breadcrumb-tag">Home / Prepare for Census</span>
        </div>

        {/* Section Header */}
        <div className="section-header-friendly">
          <div className="section-pill-tag">
            <CheckSquare size={16} />
            <span>{t('stepper.tag')}</span>
          </div>
          <h2>{t('stepper.title')}</h2>
          <p>{t('stepper.subtitle')}</p>

          <div className="section-voice-row">
            <button
              onClick={handleListenStepper}
              className={`btn-listen ${activeSpeakingId === 'stepper-speech' ? 'speaking' : ''}`}
            >
              {activeSpeakingId === 'stepper-speech' ? <VolumeX size={18} /> : <Volume2 size={18} />}
              <span>{activeSpeakingId === 'stepper-speech' ? t('stopBtn') : t('listenBtn')}</span>
            </button>
          </div>
        </div>

        {/* 4 VERY LARGE STEPS - HORIZONTAL ON DESKTOP */}
        <div className="horizontal-steps-grid">
          {steps.map((s) => {
            const IconComponent = s.icon;
            const isCurrent = currentStep === s.num;
            const isDone = currentStep > s.num;

            return (
              <div
                key={s.num}
                onClick={() => setCurrentStep(s.num)}
                className={`step-large-card ${isCurrent ? 'active-step-card' : ''} ${isDone ? 'done-step-card' : ''}`}
                tabIndex={0}
                role="button"
                aria-label={`Step ${s.num}: ${s.title}`}
              >
                <div className="step-card-top-row">
                  <div className={`step-badge-number ${s.color}`}>
                    {s.num}
                  </div>
                  <IconComponent size={28} className={`step-icon-${s.color}`} />
                </div>

                <h3 className="step-card-title">{s.title}</h3>
                <p className="step-card-desc">{s.desc}</p>

                <div className="step-active-indicator">
                  {isCurrent && <span className="active-dot">Selected Step</span>}
                  {isDone && <span className="done-dot"><CheckCircle2 size={14} /> Completed</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Step Detail Card */}
        <div className="step-interactive-detail-box">
          {currentStep === 1 && (
            <div className="detail-pane animate-fade">
              <h4 className="detail-pane-title">🏠 Step 1: Learn the Two Census Phases</h4>
              <p className="detail-pane-p">
                Phase 1 is for your house amenities (water, electricity, cooking fuel). Phase 2 is for your family members (names, age, education, work). That's all!
              </p>
            </div>
          )}

          {currentStep === 2 && (
            <div className="detail-pane animate-fade">
              <h4 className="detail-pane-title">📅 Step 2: Check Your State's Schedule</h4>
              <p className="detail-pane-p">
                Check our schedule section to see when online self-enumeration opens in your state. You will have several weeks to fill it comfortably.
              </p>
            </div>
          )}

          {currentStep === 3 && (
            <div className="detail-pane animate-fade">
              <h4 className="detail-pane-title">📝 Step 3: Simple Household Readiness Checklist</h4>
              <p className="detail-pane-p">
                Click each checkbox below to mark what you have ready. (No documents needed):
              </p>

              <div className="simple-checklist-grid">
                {tObj.stepper.checklistItems.map((itemText, idx) => {
                  const isChecked = checklist[`item${idx}`];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleCheck(idx)}
                      className={`checklist-simple-item ${isChecked ? 'checked' : ''}`}
                    >
                      {isChecked ? (
                        <CheckSquare size={24} className="check-green" />
                      ) : (
                        <Square size={24} className="check-empty" />
                      )}
                      <span className="checklist-text">{itemText}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="detail-pane animate-fade">
              <div className="ready-celebrate-box">
                <Sparkles size={32} className="sparkle-icon" />
                <h4 className="ready-title">{t('stepper.readyBadge')}</h4>
                <p className="ready-desc">
                  When the portal opens, simply visit <strong>censusindia.gov.in</strong> on your phone. Enter your mobile number, receive an official OTP, and fill your form safely.
                </p>
              </div>
            </div>
          )}

          {/* Step Nav Buttons */}
          <div className="step-detail-buttons-row">
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="btn-large btn-large-outline"
              >
                <ArrowLeft size={18} />
                <span>{t('stepper.prevBtn')}</span>
              </button>
            )}

            {currentStep < 4 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="btn-large btn-large-primary"
              >
                <span>{t('stepper.nextBtn')}</span>
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                onClick={() => setCurrentStep(1)}
                className="btn-large btn-large-success"
              >
                <RotateCcw size={18} />
                <span>Review Steps Again</span>
              </button>
            )}
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
          border-bottom: 1.5px solid #CCFBF1;
        }
        .btn-back-dashboard {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FFFFFF;
          border: 1.5px solid #99F6E4;
          color: #0D9488;
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition);
        }
        .btn-back-dashboard:hover {
          background: #CCFBF1;
          transform: translateX(-3px);
        }
        .breadcrumb-tag {
          font-size: 0.88rem;
          font-weight: 700;
          color: #0D9488;
        }

        .horizontal-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }
        .step-large-card {
          background: #FFFFFF;
          border: 2px solid #E2E8F0;
          border-radius: var(--radius-lg);
          padding: 24px 20px;
          cursor: pointer;
          transition: all var(--transition);
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
        }
        .step-large-card:hover {
          border-color: #06B6D4;
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }
        .active-step-card {
          border-color: #2563EB;
          background: #F0F7FF;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.15);
        }
        .done-step-card {
          border-color: #A7F3D0;
        }

        .step-card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .step-badge-number {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.1rem;
          color: #FFFFFF;
        }
        .step-badge-number.blue { background: #2563EB; }
        .step-badge-number.cyan { background: #0891B2; }
        .step-badge-number.teal { background: #0D9488; }
        .step-badge-number.green { background: #059669; }

        .step-icon-blue { color: #2563EB; }
        .step-icon-cyan { color: #0891B2; }
        .step-icon-teal { color: #0D9488; }
        .step-icon-green { color: #059669; }

        .step-card-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 6px;
        }
        .step-card-desc {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.45;
          margin-bottom: 12px;
        }

        .step-active-indicator {
          margin-top: auto;
          font-size: 0.78rem;
          font-weight: 700;
        }
        .active-dot {
          color: #2563EB;
        }
        .done-dot {
          color: #059669;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* Detail Box */
        .step-interactive-detail-box {
          background: #FFFFFF;
          border: 2px solid #BFDBFE;
          border-radius: var(--radius-lg);
          padding: 32px;
          box-shadow: var(--shadow-sm);
        }
        .detail-pane-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #1E3A8A;
          margin-bottom: 10px;
        }
        .detail-pane-p {
          font-size: 1.05rem;
          color: #334155;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .simple-checklist-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-bottom: 24px;
        }
        .checklist-simple-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #F8FAFC;
          border: 1.5px solid #CBD5E1;
          padding: 14px 18px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition);
        }
        .checklist-simple-item:hover {
          background: #F0F9FF;
          border-color: #38BDF8;
        }
        .checklist-simple-item.checked {
          background: #ECFDF5;
          border-color: #6EE7B7;
        }
        .check-green { color: #059669; flex-shrink: 0; }
        .check-empty { color: #94A3B8; flex-shrink: 0; }
        .checklist-text {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0F172A;
        }

        .ready-celebrate-box {
          background: linear-gradient(135deg, #ECFDF5 0%, #EFF6FF 100%);
          border: 2px solid #A7F3D0;
          border-radius: var(--radius-md);
          padding: 24px;
          text-align: center;
          margin-bottom: 20px;
        }
        .sparkle-icon { color: #0D9488; margin-bottom: 8px; }
        .ready-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #065F46;
          margin-bottom: 8px;
        }
        .ready-desc {
          font-size: 1.05rem;
          color: #334155;
          max-width: 600px;
          margin: 0 auto;
        }

        .step-detail-buttons-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #E2E8F0;
        }

        @media (max-width: 900px) {
          .horizontal-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .simple-checklist-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 600px) {
          .horizontal-steps-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
