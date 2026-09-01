import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Volume2, VolumeX, Type, Globe } from 'lucide-react';

export const AccessibilityBar = () => {
  const {
    language,
    setLanguage,
    availableLanguages,
    fontSize,
    setFontSize,
    activeSpeakingId,
    speak,
    stop,
    t
  } = useLanguage();

  const handleGlobalVoiceTest = () => {
    const welcomeMessages = {
      en: "Welcome to CensusConnect. You can click the listen button in any section to hear the explanation in your language.",
      hi: "जनगणना कनेक्ट में आपका स्वागत है। किसी भी जानकारी को अपनी भाषा में सुनने के लिए 'सुनें' बटन दबाएं।",
      mr: "जनगणना कनेक्ट मध्ये आपले स्वागत आहे. कोणतीही माहिती तुमच्या भाषेत ऐकण्यासाठी 'ऐका' बटण दाबा.",
      gu: "જનગણના કનેક્ટમાં આપનું સ્વાગત છે. કોઈપણ માહિતી તમારી ભાષામાં સાંભળવા માટે 'સાંભળો' બટન દબાવો.",
      ta: "சென்சஸ் 2027 வழிகாட்டிக்கு நல்வரவு. குரல் வழியே கேட்க 'கேளுங்கள்' பொத்தானை அழுத்தவும்.",
      te: "జనగణన కనెక్ట్‌కి స్వాగతం. మీ భాషలో సమాచారం వినడానికి 'వినండి' బటన్‌ను నొక్కండి.",
      bn: "জনগণনা কানেক্টে স্বাগতম। আপনার ভাষায় তথ্য শুনতে 'শুনুন' বোতাম চাপুন।",
      kn: "ಜನಗಣತಿ ಕನೆಕ್ಟ್‌ಗೆ ಸ್ವಾಗತ. ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಮಾಹಿತಿ ಕೇಳಲು 'ಕೇಳಿ' ಬಟನ್ ಒತ್ತಿ."
    };
    speak('global-welcome', welcomeMessages[language] || welcomeMessages.en);
  };

  return (
    <div className="accessibility-bar-wrapper">
      <div className="container">
        <div className="accessibility-bar-content">
          {/* Left: Voice Assistant Global Launcher & Help */}
          <div className="acc-left-group">
            <button
              onClick={handleGlobalVoiceTest}
              className={`acc-voice-pill ${activeSpeakingId ? 'active-speaking' : ''}`}
              aria-label="Global voice audio assistant"
            >
              {activeSpeakingId ? <VolumeX size={16} /> : <Volume2 size={16} />}
              <span>
                {activeSpeakingId
                  ? t('stopBtn')
                  : t('listenBtn') + ' ' + (availableLanguages.find(l => l.code === language)?.nativeLabel || '')}
              </span>
            </button>
            <span className="acc-helper-text">
              {language === 'hi'
                ? '8 भारतीय भाषाओं में सरल आवाज सुविधा'
                : language === 'mr'
                ? '8 भारतीय भाषांमध्ये सोपी आवाज सुविधा'
                : 'Simple Voice & Large Text Support in 8 Indian Languages'}
            </span>
          </div>

          {/* Right: Text Size & 8-Language Selector Dropdown */}
          <div className="acc-right-group">
            {/* Text Size Control */}
            <div className="acc-control-box" title="Adjust Text Size">
              <Type size={15} className="acc-icon" />
              <span className="acc-control-label">Text:</span>
              <div className="acc-btn-pill-group">
                <button
                  type="button"
                  className={`acc-size-btn ${fontSize === 'normal' ? 'active' : ''}`}
                  onClick={() => setFontSize('normal')}
                  title="Normal Text Size"
                >
                  A
                </button>
                <button
                  type="button"
                  className={`acc-size-btn ${fontSize === 'large' ? 'active' : ''}`}
                  onClick={() => setFontSize('large')}
                  title="Large Text Size"
                >
                  A+
                </button>
                <button
                  type="button"
                  className={`acc-size-btn ${fontSize === 'xlarge' ? 'active' : ''}`}
                  onClick={() => setFontSize('xlarge')}
                  title="Extra Large Text Size"
                >
                  A++
                </button>
              </div>
            </div>

            {/* 8 Languages Dropdown Selector */}
            <div className="acc-control-box lang-dropdown-box">
              <Globe size={15} className="acc-icon" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="acc-language-select"
                aria-label="Select Language / भाषा चुनें"
              >
                {availableLanguages.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.flag} {l.nativeLabel} ({l.label})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .accessibility-bar-wrapper {
          background: #E0F2FE;
          border-bottom: 1.5px solid #BAE6FD;
          padding: 8px 0;
          font-size: 0.88rem;
          color: #0369A1;
        }
        .accessibility-bar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .acc-left-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .acc-voice-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 16px;
          background: #0284C7;
          color: #FFFFFF;
          border: none;
          border-radius: var(--radius-full);
          font-size: 0.86rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition);
        }
        .acc-voice-pill:hover {
          background: #0369A1;
          transform: translateY(-1px);
        }
        .acc-voice-pill.active-speaking {
          background: #DC2626;
          animation: pulseSpeaking 1.5s infinite;
        }
        .acc-helper-text {
          font-size: 0.82rem;
          color: #0C4A6E;
          font-weight: 600;
        }
        .acc-right-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .acc-control-box {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #FFFFFF;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid #BAE6FD;
        }
        .acc-icon {
          color: #0284C7;
          flex-shrink: 0;
        }
        .acc-control-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #0F172A;
        }
        .acc-btn-pill-group {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .acc-size-btn {
          background: transparent;
          border: none;
          padding: 2px 7px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          border-radius: 4px;
          transition: all var(--transition);
        }
        .acc-size-btn:hover {
          color: #0284C7;
          background: #F0F9FF;
        }
        .acc-size-btn.active {
          background: #0284C7;
          color: #FFFFFF;
        }

        .lang-dropdown-box {
          padding: 2px 8px;
        }
        .acc-language-select {
          border: none;
          background: transparent;
          font-size: 0.88rem;
          font-weight: 700;
          color: #0F172A;
          cursor: pointer;
          outline: none;
          padding: 4px 2px;
        }

        @media (max-width: 768px) {
          .acc-helper-text {
            display: none;
          }
          .accessibility-bar-content {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};
