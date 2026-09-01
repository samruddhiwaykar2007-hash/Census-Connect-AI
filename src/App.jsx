import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AccessibilityBar } from './components/AccessibilityBar';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { HomeDashboard } from './components/HomeDashboard';
import { CensusPhases } from './components/CensusPhases';
import { Schedule } from './components/Schedule';
import { AIGuide } from './components/AIGuide';
import { SelfEnumerationGuide } from './components/SelfEnumerationGuide';
import { PrivacySafety } from './components/PrivacySafety';
import { MisinformationChecker } from './components/MisinformationChecker';
import { DataInsights } from './components/DataInsights';
import { Footer } from './components/Footer';

function MainRouter() {
  const { currentPage } = useLanguage();

  // ── Standalone full-screen pages (no navbar / footer) ──
  if (currentPage === 'landing') return <LandingPage />;
  if (currentPage === 'login')   return <LoginPage />;

  // ── Main app pages (with navbar + footer) ──
  const renderActivePage = () => {
    switch (currentPage) {
      case 'phases':   return <CensusPhases />;
      case 'schedule': return <Schedule />;
      case 'ai-guide': return <AIGuide />;
      case 'prepare':  return <SelfEnumerationGuide />;
      case 'safety':   return <PrivacySafety />;
      case 'misinfo':  return <MisinformationChecker />;
      case 'insights': return <DataInsights />;
      case 'home':
      default:         return <HomeDashboard />;
    }
  };

  return (
    <div className="app-root">
      <AccessibilityBar />
      <Navbar />
      <main id="main-content">
        {renderActivePage()}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainRouter />
    </LanguageProvider>
  );
}
