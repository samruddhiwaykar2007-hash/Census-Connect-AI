import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ShieldCheck,
  UserCircle2
} from 'lucide-react';

const MOCK_HINT_PHONE = '9999999999';
const MOCK_HINT_OTP   = '123456';

export const LoginPage = () => {
  const { navigateTo } = useLanguage();

  const [step, setStep]         = useState('phone'); // 'phone' | 'otp' | 'success'
  const [phone, setPhone]       = useState('');
  const [otp, setOtp]           = useState('');
  const [showOtp, setShowOtp]   = useState(false);
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);
  const [userName, setUserName] = useState('');

  /* ── Handlers ── */
  const handleSendOtp = () => {
    setError('');
    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setLoading(true);
    setTimeout(() => { setLoading(false); setStep('otp'); }, 1200);
  };

  const handleVerifyOtp = () => {
    setError('');
    if (!/^\d{4,6}$/.test(otp)) {
      setError('Please enter the OTP (4–6 digits).');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const name = 'Citizen User';
      setUserName(name);
      localStorage.setItem('censusconnect_user', JSON.stringify({ name, phone }));
      setLoading(false);
      setStep('success');
    }, 1300);
  };

  const handleSkip = () => {
    localStorage.setItem('censusconnect_user', JSON.stringify({ name: 'Guest', phone: '' }));
    const dest = localStorage.getItem('censusconnect_postlogin') || 'home';
    localStorage.removeItem('censusconnect_postlogin');
    navigateTo(dest);
  };

  const handleEnterDashboard = () => {
    const dest = localStorage.getItem('censusconnect_postlogin') || 'home';
    localStorage.removeItem('censusconnect_postlogin');
    navigateTo(dest);
  };

  /* ── Render ── */
  return (
    <div className="lp-login-root">
      {/* Gradient BG — matches landing page */}
      <div className="lp-login-bg" aria-hidden="true">
        <div className="llb-blob llb-1" />
        <div className="llb-blob llb-2" />
        <div className="llb-blob llb-3" />
        <div className="llb-dots" />
      </div>

      {/* Back to landing */}
      <button
        className="lp-login-back"
        onClick={() => navigateTo('landing')}
        aria-label="Back to landing page"
      >
        <ChevronLeft size={16} />
        Back
      </button>

      {/* Main card */}
      <div className="lp-login-card">
        {/* Header */}
        <div className="lp-login-header">
          <span className="lp-login-flag">🇮🇳</span>
          <div className="lp-login-brand">
            <span>Census<span className="llb-c">Connect</span> <span className="llb-a">AI</span></span>
            <span className="lp-login-brand-sub">Census 2027 Citizen Portal</span>
          </div>
        </div>

        {/* ── STEP: PHONE ── */}
        {step === 'phone' && (
          <div className="lp-login-step">
            <div className="lp-login-icon-ring">
              <UserCircle2 size={34} />
            </div>
            <h1 className="lp-login-h1">Welcome! Let's verify you</h1>
            <p className="lp-login-sub">Enter your mobile number to receive an OTP</p>

            <div className="lp-login-field">
              <label className="lp-login-label">Mobile Number</label>
              <div className="lp-login-input-row">
                <span className="lp-login-prefix">🇮🇳 +91</span>
                <input
                  id="login-phone"
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={e => { setPhone(e.target.value.replace(/\D/g, '')); setError(''); }}
                  onKeyDown={e => e.key === 'Enter' && handleSendOtp()}
                  placeholder="10-digit mobile number"
                  className="lp-login-input"
                  autoFocus
                />
              </div>
              {error && <p className="lp-login-error">{error}</p>}
            </div>

            <div className="lp-login-demo-box">
              💡 <strong>Demo:</strong> Use <code>{MOCK_HINT_PHONE}</code> → OTP <code>{MOCK_HINT_OTP}</code>
            </div>

            <button
              className="lp-login-primary-btn"
              onClick={handleSendOtp}
              disabled={loading || phone.length !== 10}
              id="login-send-otp"
            >
              {loading
                ? <span className="lp-spinner" />
                : <><Phone size={17} /><span>Send OTP</span><ArrowRight size={17} /></>}
            </button>

            <div className="lp-login-divider"><span>or</span></div>

            <button className="lp-login-skip-btn" onClick={handleSkip} id="login-skip">
              Continue as Guest →
            </button>

            <p className="lp-login-privacy">
              <ShieldCheck size={13} />
              No personal data stored · Prototype only
            </p>
          </div>
        )}

        {/* ── STEP: OTP ── */}
        {step === 'otp' && (
          <div className="lp-login-step">
            <div className="lp-login-icon-ring lp-icon-otp">
              <Lock size={34} />
            </div>
            <h1 className="lp-login-h1">Enter OTP</h1>
            <p className="lp-login-sub">
              Sent to <strong>+91 {phone}</strong>
            </p>

            <div className="lp-login-field">
              <label className="lp-login-label">One-Time Password</label>
              <div className="lp-login-input-row">
                <input
                  id="login-otp"
                  type={showOtp ? 'text' : 'password'}
                  maxLength={6}
                  value={otp}
                  onChange={e => { setOtp(e.target.value.replace(/\D/g, '')); setError(''); }}
                  onKeyDown={e => e.key === 'Enter' && handleVerifyOtp()}
                  placeholder="Enter OTP"
                  className="lp-login-input"
                  autoFocus
                  style={{ letterSpacing: '0.3em', fontSize: '1.3rem' }}
                />
                <button
                  className="lp-login-eye"
                  onClick={() => setShowOtp(!showOtp)}
                  aria-label="Toggle OTP visibility"
                  type="button"
                >
                  {showOtp ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {error && <p className="lp-login-error">{error}</p>}
            </div>

            <div className="lp-login-demo-box">
              💡 <strong>Demo OTP:</strong> <code>{MOCK_HINT_OTP}</code>
            </div>

            <button
              className="lp-login-primary-btn"
              onClick={handleVerifyOtp}
              disabled={loading || otp.length < 4}
              id="login-verify-otp"
            >
              {loading
                ? <span className="lp-spinner" />
                : <><CheckCircle2 size={17} /><span>Verify & Continue</span></>}
            </button>

            <button
              className="lp-login-back-link"
              onClick={() => { setStep('phone'); setOtp(''); setError(''); }}
            >
              <ChevronLeft size={15} /> Change Number
            </button>
          </div>
        )}

        {/* ── STEP: SUCCESS ── */}
        {step === 'success' && (
          <div className="lp-login-step lp-login-step-success">
            <div className="lp-login-success-ring">
              <CheckCircle2 size={52} />
            </div>
            <h1 className="lp-login-h1">Welcome, {userName}! 🎉</h1>
            <p className="lp-login-sub">
              You're verified. Let's explore Census 2027 together.
            </p>
            <button
              className="lp-login-primary-btn"
              onClick={handleEnterDashboard}
              id="login-enter-dashboard"
            >
              <span>Enter Dashboard</span>
              <ArrowRight size={17} />
            </button>
          </div>
        )}
      </div>

      {/* ── STYLES ── */}
      <style>{`
        /* Root */
        .lp-login-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 24px 20px;
          background: linear-gradient(135deg,#1E40AF 0%,#0891B2 30%,#0D9488 65%,#059669 100%);
        }

        /* BG blobs */
        .lp-login-bg { position:fixed; inset:0; z-index:0; pointer-events:none; }
        .llb-blob {
          position: absolute; border-radius: 50%;
          filter: blur(80px); opacity: 0.3;
          animation: blobDrift2 10s ease-in-out infinite alternate;
        }
        .llb-1 { width:440px;height:440px;background:#38BDF8;top:-100px;left:-80px;animation-duration:12s; }
        .llb-2 { width:320px;height:320px;background:#34D399;top:50px;right:-60px;animation-delay:2s; }
        .llb-3 { width:260px;height:260px;background:#22D3EE;bottom:-60px;left:40%;animation-duration:14s;animation-delay:4s; }
        .llb-dots {
          position:absolute;inset:0;
          background-image:radial-gradient(rgba(255,255,255,0.12) 1.5px,transparent 1.5px);
          background-size:36px 36px;
        }
        @keyframes blobDrift2 {
          from { transform:translate(0,0) scale(1); }
          to   { transform:translate(24px,-28px) scale(1.07); }
        }

        /* Back button */
        .lp-login-back {
          position: fixed;
          top: 20px; left: 20px;
          z-index: 10;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          color: #FFFFFF;
          padding: 7px 16px;
          border-radius: 100px;
          font-size: 0.84rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(8px);
        }
        .lp-login-back:hover {
          background: rgba(255,255,255,0.25);
          transform: translateX(-2px);
        }

        /* Main card */
        .lp-login-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 460px;
          background: rgba(255,255,255,0.13);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1.5px solid rgba(255,255,255,0.25);
          border-radius: 28px;
          padding: 40px 40px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.25);
          animation: cardRise2 0.45s cubic-bezier(0.34,1.2,0.64,1) both;
        }
        @keyframes cardRise2 {
          from { opacity:0; transform:translateY(30px) scale(0.97); }
          to   { opacity:1; transform:translateY(0)   scale(1); }
        }

        /* Header */
        .lp-login-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.15);
        }
        .lp-login-flag { font-size: 1.8rem; }
        .lp-login-brand {
          display: flex;
          flex-direction: column;
          font-size: 1.2rem;
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1.2;
        }
        .llb-c {
          background: linear-gradient(90deg,#BAE6FD,#67E8F9);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
        }
        .llb-a {
          background: linear-gradient(90deg,#6EE7B7,#34D399);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
        }
        .lp-login-brand-sub {
          font-size: 0.76rem;
          color: rgba(186,230,253,0.8);
          font-weight: 600;
        }

        /* Step */
        .lp-login-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
        }
        .lp-login-icon-ring {
          width: 68px; height: 68px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: 2px solid rgba(255,255,255,0.3);
          color: #FFFFFF;
          display: flex; align-items: center; justify-content: center;
        }
        .lp-icon-otp { background: rgba(52,211,153,0.2); border-color: rgba(52,211,153,0.4); }

        .lp-login-h1 {
          font-size: 1.6rem;
          font-weight: 800;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.2;
        }
        .lp-login-sub {
          font-size: 0.96rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.5;
          margin: -4px 0 4px 0;
        }
        .lp-login-sub strong { color: #FFFFFF; }

        /* Input field */
        .lp-login-field {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 6px;
          text-align: left;
        }
        .lp-login-label {
          font-size: 0.78rem;
          font-weight: 800;
          color: rgba(255,255,255,0.65);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .lp-login-input-row {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.12);
          border: 1.5px solid rgba(255,255,255,0.25);
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .lp-login-input-row:focus-within {
          border-color: rgba(255,255,255,0.6);
          box-shadow: 0 0 0 3px rgba(255,255,255,0.1);
        }
        .lp-login-prefix {
          padding: 14px 12px;
          font-size: 0.92rem;
          font-weight: 700;
          color: rgba(255,255,255,0.75);
          border-right: 1px solid rgba(255,255,255,0.2);
          white-space: nowrap;
        }
        .lp-login-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          padding: 14px 16px;
          font-size: 1rem;
          font-weight: 700;
          color: #FFFFFF;
        }
        .lp-login-input::placeholder {
          color: rgba(255,255,255,0.4);
          font-weight: 500;
        }
        .lp-login-eye {
          background: transparent;
          border: none;
          padding: 0 14px;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          transition: color 0.2s;
        }
        .lp-login-eye:hover { color: #FFFFFF; }
        .lp-login-error {
          font-size: 0.82rem;
          color: #FCA5A5;
          font-weight: 600;
          margin: 0;
        }

        /* Demo box */
        .lp-login-demo-box {
          width: 100%;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.8);
          text-align: left;
          line-height: 1.5;
        }
        .lp-login-demo-box code {
          background: rgba(255,255,255,0.15);
          padding: 1px 6px;
          border-radius: 4px;
          font-weight: 800;
          color: #FFFFFF;
          font-size: 0.85rem;
        }
        .lp-login-demo-box strong { color: #FFFFFF; }

        /* Primary button */
        .lp-login-primary-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #FFFFFF;
          color: #0F172A;
          border: none;
          padding: 16px 24px;
          border-radius: 12px;
          font-size: 1.05rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 6px 24px rgba(0,0,0,0.25);
          transition: all 0.25s ease;
          margin-top: 4px;
        }
        .lp-login-primary-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(0,0,0,0.3);
          background: #F0FDFF;
        }
        .lp-login-primary-btn:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        /* Spinner */
        .lp-spinner {
          width: 20px; height: 20px;
          border: 3px solid rgba(15,23,42,0.2);
          border-top-color: #0F172A;
          border-radius: 50%;
          animation: spin2 0.7s linear infinite;
        }
        @keyframes spin2 { to { transform: rotate(360deg); } }

        /* Divider */
        .lp-login-divider {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255,255,255,0.35);
          font-size: 0.82rem;
          font-weight: 700;
        }
        .lp-login-divider::before,
        .lp-login-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.18);
        }

        /* Skip / Guest */
        .lp-login-skip-btn {
          width: 100%;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.85);
          padding: 13px 24px;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .lp-login-skip-btn:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.4);
          color: #FFFFFF;
        }

        /* Back link */
        .lp-login-back-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.55);
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          transition: color 0.2s;
        }
        .lp-login-back-link:hover { color: #FFFFFF; }

        /* Privacy */
        .lp-login-privacy {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          color: rgba(255,255,255,0.4);
          justify-content: center;
        }

        /* Success */
        .lp-login-step-success {}
        .lp-login-success-ring {
          width: 88px; height: 88px;
          border-radius: 50%;
          background: rgba(52,211,153,0.2);
          border: 2px solid rgba(52,211,153,0.5);
          color: #34D399;
          display: flex; align-items: center; justify-content: center;
          animation: successPop2 0.5s cubic-bezier(0.34,1.5,0.64,1) both;
          box-shadow: 0 0 32px rgba(52,211,153,0.25);
        }
        @keyframes successPop2 {
          from { transform:scale(0.3); opacity:0; }
          to   { transform:scale(1);   opacity:1; }
        }

        @media (max-width: 500px) {
          .lp-login-card { padding: 32px 24px; }
          .lp-login-h1 { font-size: 1.4rem; }
        }
      `}</style>
    </div>
  );
};
