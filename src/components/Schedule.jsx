import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { statesScheduleData } from '../data/statesData';
import { Calendar, Smartphone, Home, Volume2, VolumeX, MapPin, AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react';

export const Schedule = () => {
  const { language, t, speak, activeSpeakingId, navigateTo } = useLanguage();
  const [selectedStateId, setSelectedStateId] = useState('MH');

  const selectedState = statesScheduleData.find((s) => s.id === selectedStateId) || statesScheduleData[0];

  const getStateName = (st) => {
    if (language === 'hi') return st.nameHi;
    if (language === 'mr') return st.nameMr;
    return st.name;
  };

  const handleListenSchedule = () => {
    const stName = getStateName(selectedState);
    const speechText = language === 'hi'
      ? `${stName} की समय सारणी। ऑनलाइन स्व-गणना अवधि है ${selectedState.selfEnumPeriod}। प्रगणक घर-घर सर्वेक्षण अवधि है ${selectedState.enumeratorPeriod}।`
      : language === 'mr'
      ? `${stName} चे वेळापत्रक. ऑनलाइन नोंदणी कालावधी आहे ${selectedState.selfEnumPeriod}. प्रगणक घरोघरी सर्वेक्षण कालावधी आहे ${selectedState.enumeratorPeriod}.`
      : `Census Schedule for ${stName}. Self-enumeration online period is ${selectedState.selfEnumPeriod}. Enumerator door to door survey period is ${selectedState.enumeratorPeriod}.`;

    speak('schedule-speech', speechText);
  };

  return (
    <section id="schedule" className="section-wrapper bg-light-blue dedicated-page-view">
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
          <span className="breadcrumb-tag">Home / State Schedule</span>
        </div>

        {/* Section Header */}
        <div className="section-header-friendly">
          <div className="section-pill-tag">
            <Calendar size={16} />
            <span>{t('schedule.tag')}</span>
          </div>
          <h2>{t('schedule.title')}</h2>
          <p>{t('schedule.subtitle')}</p>

          <div className="section-voice-row">
            <button
              onClick={handleListenSchedule}
              className={`btn-listen ${activeSpeakingId === 'schedule-speech' ? 'speaking' : ''}`}
            >
              {activeSpeakingId === 'schedule-speech' ? <VolumeX size={18} /> : <Volume2 size={18} />}
              <span>{activeSpeakingId === 'schedule-speech' ? t('stopBtn') : t('schedule.listenBtn')}</span>
            </button>
          </div>
        </div>

        {/* Step 1: Large & Simple State Selector Card */}
        <div className="state-choose-box">
          <label htmlFor="state-select-dropdown" className="state-choose-label">
            <MapPin size={22} className="pin-icon" />
            <span>{t('schedule.step1')}</span>
          </label>

          <select
            id="state-select-dropdown"
            value={selectedStateId}
            onChange={(e) => setSelectedStateId(e.target.value)}
            className="state-large-select"
          >
            {statesScheduleData.map((st) => (
              <option key={st.id} value={st.id}>
                📍 {getStateName(st)}
              </option>
            ))}
          </select>

          {/* Quick Pill Buttons */}
          <div className="popular-states-pills">
            {statesScheduleData.slice(0, 6).map((st) => (
              <button
                key={st.id}
                onClick={() => setSelectedStateId(st.id)}
                className={`pop-state-btn ${selectedStateId === st.id ? 'active' : ''}`}
              >
                {getStateName(st)}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: SIDE-BY-SIDE CARDS ON DESKTOP */}
        <div className="schedule-side-by-side-wrap">
          <div className="step-2-title-badge">
            <span>{t('schedule.step2')}</span>
          </div>

          <div className="grid-side-by-side">
            {/* Card 1: Self-Enumeration Online */}
            <div className="friendly-card friendly-card-cyan schedule-side-card">
              <div className="sched-card-top">
                <div className="sched-icon-box cyan-box">
                  <Smartphone size={32} />
                </div>
                <div>
                  <span className="sched-type-pill">Online Mode 📱</span>
                  <h3 className="sched-card-title">{t('schedule.selfEnumTitle')}</h3>
                </div>
              </div>

              <div className="sched-date-highlight cyan-date">
                📅 {selectedState.selfEnumPeriod}
              </div>

              <p className="sched-desc">{t('schedule.selfEnumDesc')}</p>

              <div className="sched-card-benefit">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Fill comfortably from home on your phone</span>
              </div>
            </div>

            {/* Card 2: Enumerator Survey Home Visit */}
            <div className="friendly-card friendly-card-blue schedule-side-card">
              <div className="sched-card-top">
                <div className="sched-icon-box blue-box">
                  <Home size={32} />
                </div>
                <div>
                  <span className="sched-type-pill blue-pill">Home Visit 🏠</span>
                  <h3 className="sched-card-title">{t('schedule.surveyTitle')}</h3>
                </div>
              </div>

              <div className="sched-date-highlight blue-date">
                📅 {selectedState.enumeratorPeriod}
              </div>

              <p className="sched-desc">{t('schedule.surveyDesc')}</p>

              <div className="sched-card-benefit">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Census worker visits with authorized photo ID</span>
              </div>
            </div>
          </div>
        </div>

        {/* Clear Prototype Disclaimer Banner */}
        <div className="schedule-disclaimer-card">
          <AlertCircle size={20} className="disc-icon" />
          <p className="disc-text">
            <strong>Important:</strong> {t('schedule.disclaimer')}
          </p>
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

        .state-choose-box {
          background: #FFFFFF;
          border: 2px solid #BFDBFE;
          border-radius: var(--radius-lg);
          padding: 24px 32px;
          margin-bottom: 32px;
          box-shadow: var(--shadow-sm);
        }
        .state-choose-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.15rem;
          font-weight: 800;
          color: #1E3A8A;
          margin-bottom: 12px;
        }
        .pin-icon {
          color: #0284C7;
        }
        .state-large-select {
          width: 100%;
          padding: 14px 20px;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0F172A;
          background: #F8FAFC;
          border: 2px solid #94A3B8;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition);
          margin-bottom: 14px;
        }
        .state-large-select:focus {
          border-color: #2563EB;
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
        }
        .popular-states-pills {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .pop-state-btn {
          background: #F1F5F9;
          border: 1px solid #CBD5E1;
          color: #334155;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition);
        }
        .pop-state-btn:hover {
          background: #E0F2FE;
          color: #0369A1;
        }
        .pop-state-btn.active {
          background: #0284C7;
          border-color: #0284C7;
          color: #FFFFFF;
        }

        .schedule-side-by-side-wrap {
          margin-bottom: 28px;
        }
        .step-2-title-badge {
          display: inline-block;
          font-size: 0.95rem;
          font-weight: 800;
          color: #065F46;
          background: #D1FAE5;
          border: 1px solid #A7F3D0;
          padding: 6px 18px;
          border-radius: var(--radius-full);
          margin-bottom: 16px;
        }

        .schedule-side-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .sched-card-top {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .sched-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cyan-box { background: #CFFAFE; color: #0891B2; border: 1px solid #A5F3FC; }
        .blue-box { background: #DBEAFE; color: #1D4ED8; border: 1px solid #BFDBFE; }

        .sched-type-pill {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 800;
          color: #0891B2;
          background: #ECFEFF;
          padding: 2px 8px;
          border-radius: var(--radius-full);
          margin-bottom: 4px;
        }
        .sched-type-pill.blue-pill {
          color: #1E40AF;
          background: #EFF6FF;
        }

        .sched-card-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
        }
        .sched-date-highlight {
          font-size: 1.15rem;
          font-weight: 800;
          padding: 12px 18px;
          border-radius: var(--radius-md);
          margin-bottom: 16px;
          text-align: center;
        }
        .cyan-date { background: #ECFEFF; color: #0E7490; border: 1.5px solid #A5F3FC; }
        .blue-date { background: #EFF6FF; color: #1E40AF; border: 1.5px solid #BFDBFE; }

        .sched-desc {
          font-size: 0.98rem;
          color: #334155;
          line-height: 1.5;
          margin-bottom: 18px;
        }
        .sched-card-benefit {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 700;
          color: #047857;
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid #E2E8F0;
        }
        .check-icon {
          color: #10B981;
          flex-shrink: 0;
        }

        .schedule-disclaimer-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #FFFBEB;
          border: 1.5px solid #FCD34D;
          border-radius: var(--radius-md);
          padding: 16px 20px;
          color: #92400E;
        }
        .disc-icon {
          color: #D97706;
          flex-shrink: 0;
        }
        .disc-text {
          font-size: 0.92rem;
          line-height: 1.45;
        }
      `}</style>
    </section>
  );
};
