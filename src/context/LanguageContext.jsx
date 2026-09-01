import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, availableLanguages } from '../data/translations';
import { speakContent, stopSpeech } from '../utils/voiceAssistant';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('censusconnect_lang') || 'en';
  });

  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('censusconnect_fontsize') || 'normal';
  });

  // Page Routing State: default to landing page
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    const validPages = ['landing', 'login', 'home', 'phases', 'schedule', 'ai-guide', 'prepare', 'safety', 'misinfo', 'insights'];
    if (validPages.includes(hash)) return hash;
    return 'landing';
  });

  const [activeSpeakingId, setActiveSpeakingId] = useState(null);

  useEffect(() => {
    localStorage.setItem('censusconnect_lang', language);
    document.documentElement.lang = language;
    stopSpeech();
    setActiveSpeakingId(null);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('censusconnect_fontsize', fontSize);
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [fontSize]);

  // Sync route with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['landing', 'login', 'home', 'phases', 'schedule', 'ai-guide', 'prepare', 'safety', 'misinfo', 'insights'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId) => {
    stopSpeech();
    setActiveSpeakingId(null);
    setCurrentPage(pageId);
    window.location.hash = pageId === 'landing' ? '' : pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentTranslations = translations[language] || translations.en;

  const t = (path) => {
    const keys = path.split('.');
    let val = currentTranslations;
    for (const key of keys) {
      if (val && typeof val === 'object' && key in val) {
        val = val[key];
      } else {
        let fallbackVal = translations.en;
        for (const fkey of keys) {
          if (fallbackVal && typeof fallbackVal === 'object' && fkey in fallbackVal) {
            fallbackVal = fallbackVal[fkey];
          } else {
            return path;
          }
        }
        return fallbackVal;
      }
    }
    return val;
  };

  const speak = (id, text) => {
    if (activeSpeakingId === id) {
      stopSpeech();
      setActiveSpeakingId(null);
      return;
    }

    setActiveSpeakingId(id);
    speakContent(
      text,
      language,
      () => setActiveSpeakingId(id),
      () => setActiveSpeakingId(null),
      () => setActiveSpeakingId(null)
    );
  };

  const stop = () => {
    stopSpeech();
    setActiveSpeakingId(null);
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      availableLanguages,
      fontSize,
      setFontSize,
      currentPage,
      navigateTo,
      activeSpeakingId,
      speak,
      stop,
      t,
      tObj: currentTranslations
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
