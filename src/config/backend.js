/**
 * CensusConnect AI - Complete Backend API Configuration
 */

// 1. Direct Backend URL
export const DIRECT_BACKEND_URL = "http://localhost:8000";

// 2. Active Backend URL (Uses .env VITE_BACKEND_URL if present, otherwise DIRECT_BACKEND_URL)
export const BACKEND_URL = import.meta.env?.VITE_BACKEND_URL || DIRECT_BACKEND_URL;

// 3. Pre-configured API Endpoint Routes
export const API_ENDPOINTS = {
  // Health & Server Status
  HEALTH: `${BACKEND_URL}/health`,
  API_HEALTH: `${BACKEND_URL}/api/health`,

  // 🤖 Aadya AI Chat & Assistant
  AI_CHAT: `${BACKEND_URL}/api/chat`,
  AI_GUIDE: `${BACKEND_URL}/api/ai-guide`,
  CHAT_FAQ: `${BACKEND_URL}/api/chat/faq`,
  CHAT_LANGUAGES: `${BACKEND_URL}/api/chat/languages`,

  // 🔍 Misinformation, Fact Checking & Scam Prevention
  VERIFY_FACT: `${BACKEND_URL}/api/verify-message`,
  MISINFO_CHECK: `${BACKEND_URL}/api/check-misinfo`,
  SCAM_VERIFY: `${BACKEND_URL}/api/scam-checker/verify`,
  SCAM_DATABASE: `${BACKEND_URL}/api/scam-checker/database`,
  SCAM_REPORT: `${BACKEND_URL}/api/scam-checker/report`,
  SCAM_GUIDELINES: `${BACKEND_URL}/api/scam-checker/guidelines`,

  // 📅 Census Schedules & Enumeration
  SCHEDULE: `${BACKEND_URL}/api/schedule`,
  SCHEDULES: `${BACKEND_URL}/api/schedules`,
  ENUMERATION: `${BACKEND_URL}/api/enumeration`,
  REGIONS_SUMMARY: `${BACKEND_URL}/api/schedules/regions/summary`,
  SUBMIT_FORM: `${BACKEND_URL}/api/submit`,

  // 📊 Census Data & Demographic Analytics
  ANALYTICS: `${BACKEND_URL}/api/analytics/full`,
  ANALYTICS_SUMMARY: `${BACKEND_URL}/api/analytics/summary`,
  ANALYTICS_STATES: `${BACKEND_URL}/api/analytics/states`,

  // 🛡️ Authentication & Safety
  SEND_OTP: `${BACKEND_URL}/api/auth/send-otp`,
  VERIFY_OTP: `${BACKEND_URL}/api/auth/verify-otp`,
};

/**
 * Universally compatible apiRequest helper
 * Supports both:
 *   1. apiRequest(url, 'POST', { message: "hi" })
 *   2. apiRequest(url, { method: 'POST', body: ... })
 */
export async function apiRequest(endpoint, methodOrOptions = 'GET', body = null, headers = {}) {
  try {
    let config = {};

    if (typeof methodOrOptions === 'object' && methodOrOptions !== null) {
      config = {
        headers: {
          'Content-Type': 'application/json',
          ...methodOrOptions.headers,
        },
        ...methodOrOptions,
      };
      if (config.body && typeof config.body === 'object') {
        config.body = JSON.stringify(config.body);
      }
    } else {
      const method = methodOrOptions;
      config = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      };
      if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
        config.body = typeof body === 'object' ? JSON.stringify(body) : body;
      }
    }

    const response = await fetch(endpoint, config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`[Backend API Error] Failed request to ${endpoint}:`, error);
    throw error;
  }
}

const backendConfig = {
  DIRECT_BACKEND_URL,
  BACKEND_URL,
  API_ENDPOINTS,
  apiRequest,
};

export default backendConfig;
