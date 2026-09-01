import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { insightsData } from '../data/insightsData';
import { statesScheduleData } from '../data/statesData';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  BarChart3, 
  PieChart as PieIcon, 
  Users, 
  BookOpen, 
  Building, 
  Trees, 
  Scale, 
  MapPin, 
  Volume2, 
  VolumeX, 
  AlertCircle,
  ArrowLeft
} from 'lucide-react';

export const DataInsights = () => {
  const { language, t, speak, activeSpeakingId, navigateTo } = useLanguage();
  const [selectedStateCode, setSelectedStateCode] = useState('ALL');

  const currentData = selectedStateCode === 'ALL'
    ? insightsData.national
    : insightsData.states[selectedStateCode] || insightsData.national;

  const stateList = [
    { code: 'ALL', name: t('insights.allIndia'), nameHi: 'अखिल भारतीय विवरण', nameMr: 'अखिल भारतीय आढावा' },
    ...statesScheduleData.map(s => ({
      code: s.id,
      name: s.name,
      nameHi: s.nameHi,
      nameMr: s.nameMr
    }))
  ];

  const getStateName = (item) => {
    if (language === 'hi' && item.nameHi) return item.nameHi;
    if (language === 'mr' && item.nameMr) return item.nameMr;
    return item.name;
  };

  const handleListenInsights = () => {
    const textToSpeak = `${t('insights.title')}. ${currentData.name}. ${t('insights.kpiPop')}: ${currentData.totalPopulation}. ${t('insights.kpiLit')}: ${currentData.literacyRate}. ${t('insights.kpiUrban')}: ${currentData.urbanPopulation}. ${t('insights.kpiRural')}: ${currentData.ruralPopulation}.`;
    speak('insights-speech', textToSpeak);
  };

  const isSpeakingInsights = activeSpeakingId === 'insights-speech';

  // Custom Chart Tooltip
  const SimpleTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="simple-chart-tooltip">
          <strong className="tooltip-title">{label || payload[0].name}</strong>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color || entry.fill || '#2563EB', margin: '3px 0' }}>
              <span>{entry.name}: </span>
              <strong>{entry.value} {entry.name.includes('%') ? '%' : 'M'}</strong>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="insights" className="section-wrapper bg-white dedicated-page-view">
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
          <span className="breadcrumb-tag">Home / Data Insights</span>
        </div>

        {/* Section Header */}
        <div className="section-header-friendly">
          <div className="section-pill-tag">
            <BarChart3 size={16} />
            <span>{t('insights.tag')}</span>
          </div>
          <h2>{t('insights.title')}</h2>
          <p>{t('insights.subtitle')}</p>

          <div className="sample-badge-pill">
            <AlertCircle size={15} />
            <span>{t('insights.sampleNotice')}</span>
          </div>

          <div className="section-voice-row">
            <button
              onClick={handleListenInsights}
              className={`btn-listen ${isSpeakingInsights ? 'speaking' : ''}`}
            >
              {isSpeakingInsights ? <VolumeX size={18} /> : <Volume2 size={18} />}
              <span>{isSpeakingInsights ? t('stopBtn') : t('listenBtn')}</span>
            </button>
          </div>
        </div>

        {/* State Selector Bar */}
        <div className="insights-filter-box">
          <label htmlFor="insights-state-select" className="filter-label-simple">
            <MapPin size={20} className="filter-pin" />
            <span>{t('insights.selectState')}</span>
          </label>

          <select
            id="insights-state-select"
            value={selectedStateCode}
            onChange={(e) => setSelectedStateCode(e.target.value)}
            className="insights-dropdown-select"
          >
            {stateList.map((st) => (
              <option key={st.code} value={st.code}>
                {getStateName(st)}
              </option>
            ))}
          </select>
        </div>

        {/* 5 Large Simple KPI Cards */}
        <div className="grid-5-kpi">
          {/* Population */}
          <div className="kpi-simple-card blue-card">
            <div className="kpi-icon-pill blue">
              <Users size={22} />
            </div>
            <span className="kpi-simple-label">{t('insights.kpiPop')}</span>
            <strong className="kpi-simple-value">{currentData.totalPopulation}</strong>
          </div>

          {/* Education */}
          <div className="kpi-simple-card green-card">
            <div className="kpi-icon-pill green">
              <BookOpen size={22} />
            </div>
            <span className="kpi-simple-label">{t('insights.kpiLit')}</span>
            <strong className="kpi-simple-value">{currentData.literacyRate}</strong>
          </div>

          {/* Urban */}
          <div className="kpi-simple-card cyan-card">
            <div className="kpi-icon-pill cyan">
              <Building size={22} />
            </div>
            <span className="kpi-simple-label">{t('insights.kpiUrban')}</span>
            <strong className="kpi-simple-value">{currentData.urbanPopulation}</strong>
          </div>

          {/* Rural */}
          <div className="kpi-simple-card teal-card">
            <div className="kpi-icon-pill teal">
              <Trees size={22} />
            </div>
            <span className="kpi-simple-label">{t('insights.kpiRural')}</span>
            <strong className="kpi-simple-value">{currentData.ruralPopulation}</strong>
          </div>

          {/* Sex Ratio */}
          <div className="kpi-simple-card purple-card">
            <div className="kpi-icon-pill purple">
              <Scale size={22} />
            </div>
            <span className="kpi-simple-label">{t('insights.kpiSex')}</span>
            <strong className="kpi-simple-value">{currentData.sexRatio}</strong>
          </div>
        </div>

        {/* ONLY TWO SIMPLE CHARTS SIDE BY SIDE ON DESKTOP */}
        <div className="grid-side-by-side">
          {/* Chart 1: Population Comparison Bar Chart */}
          <div className="friendly-card chart-clean-card">
            <div className="chart-clean-header">
              <div className="chart-clean-title-wrap">
                <BarChart3 size={20} className="chart-icon-blue" />
                <h3 className="chart-clean-title">{t('insights.barTitle')}</h3>
              </div>
              <span className="chart-region-badge">{currentData.name}</span>
            </div>

            <div className="chart-svg-container">
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={currentData.ageCohorts} margin={{ top: 15, right: 15, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="age" stroke="#64748B" fontSize={12} tickLine={false} />
                  <YAxis stroke="#64748B" fontSize={12} tickLine={false} />
                  <Tooltip content={<SimpleTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '13px', paddingTop: '8px' }} />
                  <Bar dataKey="male" name="Male (M)" fill="#2563EB" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="female" name="Female (M)" fill="#EC4899" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2: Urban vs Rural Pie Chart */}
          <div className="friendly-card chart-clean-card">
            <div className="chart-clean-header">
              <div className="chart-clean-title-wrap">
                <PieIcon size={20} className="chart-icon-green" />
                <h3 className="chart-clean-title">{t('insights.pieTitle')}</h3>
              </div>
              <span className="chart-region-badge">{currentData.name}</span>
            </div>

            <div className="chart-svg-container">
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={currentData.urbanRuralSplit}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {currentData.urbanRuralSplit.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#0284C7' : '#059669'} />
                    ))}
                  </Pie>
                  <Tooltip content={<SimpleTooltip />} />
                  <Legend 
                    layout="horizontal" 
                    verticalAlign="bottom" 
                    align="center"
                    wrapperStyle={{ fontSize: '13px', paddingTop: '8px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
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

        .sample-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #FEF3C7;
          border: 1px solid #FCD34D;
          color: #92400E;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 4px 14px;
          border-radius: var(--radius-full);
          margin-top: 10px;
        }

        .insights-filter-box {
          background: #F8FAFC;
          border: 2px solid #E2E8F0;
          border-radius: var(--radius-lg);
          padding: 16px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .filter-label-simple {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
          font-weight: 800;
          color: #1E3A8A;
        }
        .filter-pin {
          color: #0284C7;
        }
        .insights-dropdown-select {
          flex: 1;
          min-width: 240px;
          padding: 10px 16px;
          font-size: 1rem;
          font-weight: 700;
          color: #0F172A;
          background: #FFFFFF;
          border: 2px solid #CBD5E1;
          border-radius: var(--radius-md);
          cursor: pointer;
        }

        .grid-5-kpi {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }
        .kpi-simple-card {
          background: #FFFFFF;
          border: 1.5px solid #E2E8F0;
          border-radius: var(--radius-md);
          padding: 18px 16px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
        }
        .blue-card { border-color: #BFDBFE; background: #F0F7FF; }
        .green-card { border-color: #A7F3D0; background: #F0FDF4; }
        .cyan-card { border-color: #A5F3FC; background: #ECFEFF; }
        .teal-card { border-color: #99F6E4; background: #F0FDFA; }
        .purple-card { border-color: #DDD6FE; background: #FAF5FF; }

        .kpi-icon-pill {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }
        .kpi-icon-pill.blue { background: #DBEAFE; color: #1D4ED8; }
        .kpi-icon-pill.green { background: #D1FAE5; color: #059669; }
        .kpi-icon-pill.cyan { background: #CFFAFE; color: #0891B2; }
        .kpi-icon-pill.teal { background: #CCFBF1; color: #0D9488; }
        .kpi-icon-pill.purple { background: #EDE9FE; color: #7C3AED; }

        .kpi-simple-label {
          font-size: 0.82rem;
          color: #475569;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .kpi-simple-value {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0F172A;
        }

        /* Charts */
        .chart-clean-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .chart-clean-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 14px;
          border-bottom: 1px solid #E2E8F0;
          margin-bottom: 16px;
        }
        .chart-clean-title-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .chart-clean-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0F172A;
        }
        .chart-icon-blue { color: #2563EB; }
        .chart-icon-green { color: #059669; }
        .chart-region-badge {
          font-size: 0.78rem;
          font-weight: 700;
          color: #0369A1;
          background: #E0F2FE;
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .simple-chart-tooltip {
          background: #FFFFFF;
          border: 1.5px solid #CBD5E1;
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          box-shadow: var(--shadow-md);
        }
        .tooltip-title {
          font-size: 0.85rem;
          color: #0F172A;
          display: block;
          margin-bottom: 4px;
        }

        @media (max-width: 1024px) {
          .grid-5-kpi {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 640px) {
          .grid-5-kpi {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
