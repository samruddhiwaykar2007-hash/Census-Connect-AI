import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { chatbotKnowledge } from '../data/chatbotKnowledge';
import { 
  Bot, 
  User, 
  Send, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  HelpCircle,
  Lock,
  ArrowLeft
} from 'lucide-react';

export const AIGuide = () => {
  const { language, t, tObj, speak, stop, activeSpeakingId, navigateTo } = useLanguage();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        id: 'msg-init',
        sender: 'ai',
        text: tObj.aiGuide.greeting
      }
    ]);
  }, [language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let aiText = '';

      if (chatbotKnowledge.quickResponses[query]) {
        aiText = chatbotKnowledge.quickResponses[query][language] || chatbotKnowledge.quickResponses[query].en;
      } else {
        const lower = query.toLowerCase();
        let matched = false;
        for (const rule of chatbotKnowledge.keywordRules) {
          if (rule.keywords.some((k) => lower.includes(k))) {
            aiText = rule.response[language] || rule.response.en;
            matched = true;
            break;
          }
        }
        if (!matched) {
          aiText = chatbotKnowledge.getFallback(query, language);
        }
      }

      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiText
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, aiMsg]);
    }, 500);
  };

  const handleListenMessage = (id, text) => {
    speak(id, text);
  };

  const handleReset = () => {
    stop();
    setMessages([
      {
        id: `msg-init-${Date.now()}`,
        sender: 'ai',
        text: tObj.aiGuide.greeting
      }
    ]);
  };

  return (
    <section id="ai-guide" className="section-wrapper bg-white dedicated-page-view">
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
          <span className="breadcrumb-tag">Home / Aadya AI Guide</span>
        </div>

        {/* Section Header */}
        <div className="section-header-friendly">
          <div className="section-pill-tag">
            <Bot size={16} />
            <span>{t('aiGuide.tag')}</span>
          </div>
          <h2>{t('aiGuide.title')}</h2>
          <p>{t('aiGuide.subtitle')}</p>
        </div>

        {/* Aadya Chatbot Container */}
        <div className="aadya-chat-box">
          {/* Top Header */}
          <div className="aadya-chat-top">
            <div className="aadya-identity">
              <div className="aadya-avatar-circle">
                <Bot size={28} />
              </div>
              <div>
                <h3 className="aadya-name">Aadya — Your Census Helper</h3>
                <span className="aadya-status">🟢 Voice enabled in your language</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn-chat-reset"
              title={t('aiGuide.resetBtn')}
            >
              <RotateCcw size={16} />
              <span>{t('aiGuide.resetBtn')}</span>
            </button>
          </div>

          {/* Large Question Buttons Bar */}
          <div className="aadya-questions-bar">
            <span className="questions-bar-label">
              <HelpCircle size={16} /> Click any common question:
            </span>
            <div className="questions-buttons-wrap">
              {tObj.aiGuide.quickChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(chip)}
                  className="aadya-question-btn"
                >
                  <span>🟦 {chip}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="aadya-messages-scroll">
            {messages.map((msg) => {
              const isAi = msg.sender === 'ai';
              const isSpeakingThis = activeSpeakingId === msg.id;

              return (
                <div
                  key={msg.id}
                  className={`aadya-msg-row ${isAi ? 'ai-row' : 'user-row'}`}
                >
                  <div className="msg-avatar-icon">
                    {isAi ? <Bot size={20} /> : <User size={20} />}
                  </div>

                  <div className="msg-bubble-card">
                    <div className="msg-text-content">
                      {msg.text.split('\n').map((line, lIdx) => (
                        <p key={lIdx} className="msg-p">
                          {line}
                        </p>
                      ))}
                    </div>

                    {isAi && (
                      <div className="msg-voice-footer">
                        <button
                          onClick={() => handleListenMessage(msg.id, msg.text)}
                          className={`btn-listen-inline ${isSpeakingThis ? 'speaking' : ''}`}
                        >
                          {isSpeakingThis ? <VolumeX size={15} /> : <Volume2 size={15} />}
                          <span>{isSpeakingThis ? t('stopBtn') : t('listenBtn')}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="aadya-msg-row ai-row">
                <div className="msg-avatar-icon">
                  <Bot size={20} />
                </div>
                <div className="msg-bubble-card typing-bubble-card">
                  <span className="typing-pulse-dot" />
                  <span className="typing-pulse-dot" />
                  <span className="typing-pulse-dot" />
                  <span className="typing-label">Aadya is typing...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="aadya-input-form"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t('aiGuide.placeholder')}
              className="aadya-input-field"
              id="aadya-chat-input"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="btn-large-primary aadya-submit-btn"
            >
              <Send size={18} />
              <span>{t('aiGuide.sendBtn')}</span>
            </button>
          </form>

          {/* Friendly Guidance Disclaimer */}
          <div className="aadya-disclaimer-bar">
            <Lock size={14} className="lock-icon" />
            <span>{t('aiGuide.disclaimer')}</span>
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

        .aadya-chat-box {
          max-width: 900px;
          margin: 0 auto;
          background: #FFFFFF;
          border: 2px solid #BFDBFE;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .aadya-chat-top {
          background: linear-gradient(135deg, #EFF6FF 0%, #ECFEFF 100%);
          border-bottom: 1.5px solid #BFDBFE;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .aadya-identity {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .aadya-avatar-circle {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: var(--grad-blue-cyan);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .aadya-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: #1E3A8A;
        }
        .aadya-status {
          font-size: 0.82rem;
          color: #059669;
          font-weight: 700;
        }
        .btn-chat-reset {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          color: #475569;
          padding: 8px 14px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition);
        }
        .btn-chat-reset:hover {
          background: #F1F5F9;
          color: #0F172A;
        }

        .aadya-questions-bar {
          background: #F8FAFC;
          border-bottom: 1px solid #E2E8F0;
          padding: 16px 20px;
        }
        .questions-bar-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.86rem;
          font-weight: 800;
          color: #0369A1;
          margin-bottom: 10px;
        }
        .questions-buttons-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .aadya-question-btn {
          background: #FFFFFF;
          border: 1.5px solid #93C5FD;
          color: #1E40AF;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 0.92rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition);
          box-shadow: 0 1px 4px rgba(37, 99, 235, 0.08);
        }
        .aadya-question-btn:hover {
          background: #2563EB;
          border-color: #2563EB;
          color: #FFFFFF;
          transform: translateY(-2px);
        }

        .aadya-messages-scroll {
          height: 380px;
          overflow-y: auto;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          background: #FFFFFF;
        }
        .aadya-msg-row {
          display: flex;
          gap: 12px;
          max-width: 85%;
        }
        .ai-row {
          align-self: flex-start;
        }
        .user-row {
          align-self: flex-end;
          flex-direction: row-reverse;
        }
        .msg-avatar-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ai-row .msg-avatar-icon {
          background: #E0F2FE;
          color: #0284C7;
        }
        .user-row .msg-avatar-icon {
          background: #D1FAE5;
          color: #059669;
        }

        .msg-bubble-card {
          padding: 16px 20px;
          border-radius: var(--radius-md);
          font-size: 1rem;
          line-height: 1.55;
        }
        .ai-row .msg-bubble-card {
          background: #F0F7FF;
          border: 1px solid #BFDBFE;
          color: #0F172A;
          border-top-left-radius: 4px;
        }
        .user-row .msg-bubble-card {
          background: var(--grad-blue-cyan);
          color: #FFFFFF;
          border-top-right-radius: 4px;
        }
        .msg-p {
          margin-bottom: 6px;
        }
        .msg-p:last-child {
          margin-bottom: 0;
        }
        .msg-voice-footer {
          margin-top: 10px;
          padding-top: 8px;
          border-top: 1px solid #DBEAFE;
        }

        .typing-bubble-card {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #F0F7FF;
          border: 1px solid #BFDBFE;
        }
        .typing-pulse-dot {
          width: 8px;
          height: 8px;
          background: #0284C7;
          border-radius: 50%;
          animation: pulseSpeaking 1.2s infinite;
        }
        .typing-label {
          font-size: 0.85rem;
          color: #64748B;
          margin-left: 6px;
          font-style: italic;
        }

        .aadya-input-form {
          padding: 16px 20px;
          background: #F8FAFC;
          border-top: 1.5px solid #E2E8F0;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .aadya-input-field {
          flex: 1;
          padding: 14px 18px;
          font-size: 1rem;
          color: #0F172A;
          background: #FFFFFF;
          border: 2px solid #CBD5E1;
          border-radius: var(--radius-full);
          outline: none;
        }
        .aadya-input-field:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }
        .aadya-submit-btn {
          padding: 14px 24px;
          font-size: 0.95rem;
        }

        .aadya-disclaimer-bar {
          background: #EFF6FF;
          padding: 10px 20px;
          text-align: center;
          font-size: 0.82rem;
          color: #1E40AF;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-top: 1px solid #DBEAFE;
        }
        .lock-icon {
          color: #0284C7;
        }

        @media (max-width: 640px) {
          .aadya-msg-row {
            max-width: 95%;
          }
          .aadya-input-form {
            flex-direction: column;
          }
          .aadya-submit-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
