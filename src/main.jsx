import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('CensusConnect Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          background: 'linear-gradient(135deg, #EFF6FF 0%, #ECFEFF 100%)',
          color: '#0F172A',
          textAlign: 'center'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '36px 32px',
            maxWidth: '540px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            border: '1.5px solid #BFDBFE'
          }}>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#1E3A8A' }}>
              🇮🇳 CensusConnect AI
            </h1>
            <p style={{ color: '#64748B', marginBottom: '20px', fontSize: '0.95rem' }}>
              Something unexpected happened while loading the dashboard. Click below to reload.
            </p>
            <button
              onClick={() => {
                localStorage.clear();
                window.location.hash = '';
                window.location.reload();
              }}
              style={{
                background: '#2563EB',
                color: '#FFFFFF',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              🔄 Refresh Dashboard
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <App />
    </GlobalErrorBoundary>
  </React.StrictMode>
);
