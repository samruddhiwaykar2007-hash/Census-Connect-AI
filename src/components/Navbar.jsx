import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Bot, Home, Calendar, Layers, Shield, CheckSquare, Search, BarChart3, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const { t, currentPage, navigateTo } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleGoToLanding = () => {
    // Clear onboarding so the wizard shows again
    localStorage.removeItem('censusconnect_onboarded');
    setMobileMenuOpen(false);
    navigateTo('landing');
  };

  const navLinks = [
    { id: 'home', label: t('nav.home'), icon: Home },
    { id: 'phases', label: t('nav.phases'), icon: Layers },
    { id: 'schedule', label: t('nav.schedule'), icon: Calendar },
    { id: 'ai-guide', label: t('nav.aiGuide'), icon: Bot, isAi: true },
    { id: 'prepare', label: t('nav.stepper'), icon: CheckSquare },
    { id: 'safety', label: t('nav.safety'), icon: Shield },
    { id: 'misinfo', label: t('nav.misinfo'), icon: Search },
    { id: 'insights', label: t('nav.insights'), icon: BarChart3 }
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    navigateTo(id);
  };

  return (
    <header className="navbar-wrapper">
      <div className="container">
        <div className="navbar-content">
          {/* Brand Logo */}
          <button
            className="navbar-brand-btn"
            onClick={() => handleNavClick('home')}
            aria-label="CensusConnect Home"
          >
            <div className="brand-badge-circle">
              <span>🇮🇳</span>
            </div>
            <div className="brand-text-block">
              <span className="brand-title">
                Census<span className="brand-title-connect">Connect</span>{' '}
                <span className="brand-title-ai">AI</span>
              </span>
              <span className="brand-subtext">{t('tagline')}</span>
            </div>
          </button>

          {/* Desktop Direct Nav Links (Page Switchers) */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const IconComp = link.icon;
              const isActive = currentPage === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`nav-link-btn ${isActive ? 'active' : ''} ${link.isAi ? 'ai-nav-chip' : ''}`}
                >
                  <IconComp size={16} className="nav-icon" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="navbar-actions">
            {/* Reset Onboarding — back to wizard */}
            <button
              onClick={handleGoToLanding}
              className="btn-reset-onboarding"
              title="Go back to the welcome wizard"
            >
              <Sparkles size={15} />
              <span>Setup Guide</span>
            </button>

            <button
              onClick={() => handleNavClick('ai-guide')}
              className="btn-large btn-large-primary nav-cta-btn"
            >
              <Bot size={18} />
              <span>{t('nav.startGuide')}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Switches Page and Closes) */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay">
          <div className="container">
            <nav className="mobile-nav-list">
              {navLinks.map((link) => {
                const IconComp = link.icon;
                const isActive = currentPage === link.id;

                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                  >
                    <IconComp size={20} />
                    <span>{link.label}</span>
                  </button>
                );
              })}
              <button
                onClick={() => handleNavClick('ai-guide')}
                className="btn-large btn-large-primary mobile-cta-full"
              >
                <Bot size={20} />
                <span>{t('nav.startGuide')}</span>
              </button>
            </nav>
          </div>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: #FFFFFF;
          border-bottom: 1.5px solid #E2E8F0;
          box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
        }
        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
          gap: 16px;
        }
        .navbar-brand-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          background: transparent;
          border: none;
          padding: 0;
          text-align: left;
        }
        .brand-badge-circle {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, #E0F2FE 0%, #D1FAE5 100%);
          border: 1.5px solid #BAE6FD;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        .brand-text-block {
          display: flex;
          flex-direction: column;
        }
        .brand-title {
          font-size: 1.2rem;
          font-weight: 900;
          color: #1E3A8A;
          line-height: 1.2;
        }
        .brand-title-connect {
          background: linear-gradient(90deg, #2563EB 0%, #06B6D4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .brand-title-ai {
          background: linear-gradient(90deg, #0D9488 0%, #10B981 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .brand-subtext {
          font-size: 0.76rem;
          color: #0D9488;
          font-weight: 600;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link-btn {
          background: transparent;
          border: none;
          color: #334155;
          font-size: 0.92rem;
          font-weight: 700;
          padding: 8px 12px;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all var(--transition);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .nav-icon {
          color: #64748B;
        }
        .nav-link-btn:hover {
          color: #2563EB;
          background: #EFF6FF;
        }
        .nav-link-btn:hover .nav-icon {
          color: #2563EB;
        }
        .nav-link-btn.active {
          color: #1E40AF;
          background: #DBEAFE;
        }
        .nav-link-btn.active .nav-icon {
          color: #1E40AF;
        }
        .ai-nav-chip {
          color: #0891B2;
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .nav-cta-btn {
          padding: 10px 20px;
          font-size: 0.92rem;
        }
        .btn-reset-onboarding {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #EFF6FF 0%, #ECFEFF 100%);
          border: 1.5px solid #BFDBFE;
          color: #0369A1;
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.82rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-reset-onboarding:hover {
          background: #DBEAFE;
          border-color: #93C5FD;
          transform: translateY(-1px);
        }
        .mobile-menu-toggle {
          display: none;
          background: #F1F5F9;
          border: 1px solid #CBD5E1;
          color: #0F172A;
          border-radius: 10px;
          padding: 8px;
          cursor: pointer;
        }
        .mobile-drawer-overlay {
          background: #FFFFFF;
          border-bottom: 2px solid #2563EB;
          padding: 18px 0 28px 0;
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
        }
        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mobile-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          padding: 14px 18px;
          border-radius: var(--radius-md);
          font-size: 1rem;
          font-weight: 700;
          color: #1E293B;
          text-align: left;
          cursor: pointer;
        }
        .mobile-nav-item.active {
          background: #EFF6FF;
          border-color: #93C5FD;
          color: #1D4ED8;
        }
        .mobile-cta-full {
          width: 100%;
          margin-top: 8px;
        }
        @media (max-width: 1120px) {
          .desktop-nav {
            display: none;
          }
          .nav-cta-btn {
            display: none;
          }
          .mobile-menu-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
};
