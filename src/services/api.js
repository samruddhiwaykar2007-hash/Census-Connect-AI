/**
 * CensusConnect AI - Frontend API Client
 * File: src/services/api.js
 */

const API_BASE_URL = import.meta.env?.VITE_BACKEND_URL || 'http://localhost:8000';

export const API_ENDPOINTS = {
  // 🩺 Health Check
  HEALTH: `${API_BASE_URL}/api/health`,
  HEALTH_ALIAS: `${API_BASE_URL}/health`,

  // 🤖 Aadya AI Chatbot
  CHAT: `${API_BASE_URL}/api/chat`,
  CHAT_AI_GUIDE: `${API_BASE_URL}/api/ai-guide`,
  CHAT_FAQ: `${API_BASE_URL}/api/chat/faq`,
  CHAT_LANGUAGES: `${API_BASE_URL}/api/chat/languages`,

  // 📅 State-wise Census Schedules
  SCHEDULES: `${API_BASE_URL}/api/schedules`,
  SCHEDULE_ALIAS: `${API_BASE_URL}/api/schedule`,
  ENUMERATION: `${API_BASE_URL}/api/enumeration`,
  REGIONS_SUMMARY: `${API_BASE_URL}/api/schedules/regions/summary`,

  // 🔍 Misinformation & Scam Checker
  VERIFY_SCAM: `${API_BASE_URL}/api/scam-checker/verify`,
  VERIFY_MESSAGE_ALIAS: `${API_BASE_URL}/api/verify-message`,
  CHECK_MISINFO_ALIAS: `${API_BASE_URL}/api/check-misinfo`,
  SCAM_DATABASE: `${API_BASE_URL}/api/scam-checker/database`,
  SCAM_REPORT: `${API_BASE_URL}/api/scam-checker/report`,
  SUBMIT_ALIAS: `${API_BASE_URL}/api/submit`,
  SCAM_GUIDELINES: `${API_BASE_URL}/api/scam-checker/guidelines`,

  // 📊 Demographic Analytics
  ANALYTICS_FULL: `${API_BASE_URL}/api/analytics/full`,
  ANALYTICS_SUMMARY: `${API_BASE_URL}/api/analytics/summary`,
  ANALYTICS_STATES: `${API_BASE_URL}/api/analytics/states`,

  // 🛡️ Authentication (Demo simulated)
  AUTH_SEND_OTP: `${API_BASE_URL}/api/auth/send-otp`,
  AUTH_VERIFY_OTP: `${API_BASE_URL}/api/auth/verify-otp`,
};

export const CensusAPI = {
  // Health
  async checkHealth() {
    const res = await fetch(API_ENDPOINTS.HEALTH);
    return res.json();
  },

  // Aadya Chat (English, Hindi, Marathi)
  async sendMessage(message, language = 'en', history = []) {
    const res = await fetch(API_ENDPOINTS.CHAT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, language, history })
    });
    if (!res.ok) throw new Error(`Chat error: ${res.statusText}`);
    return res.json();
  },

  // Schedules
  async getSchedules(filters = {}) {
    const params = new URLSearchParams();
    if (filters.state) params.append('state', filters.state);
    if (filters.region) params.append('region', filters.region);
    if (filters.status) params.append('status', filters.status);
    const query = params.toString() ? `?${params.toString()}` : '';
    const res = await fetch(`${API_ENDPOINTS.SCHEDULES}${query}`);
    return res.json();
  },

  // Scam Checker
  async verifyScam(content, sourceType = 'other') {
    const res = await fetch(API_ENDPOINTS.VERIFY_SCAM, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, source_type: sourceType })
    });
    if (!res.ok) throw new Error(`Verification error: ${res.statusText}`);
    return res.json();
  },

  // Analytics
  async getFullAnalytics() {
    const res = await fetch(API_ENDPOINTS.ANALYTICS_FULL);
    return res.json();
  }
};

export default CensusAPI;
