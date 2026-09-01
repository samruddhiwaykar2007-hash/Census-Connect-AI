// Browser Web Speech API Text-to-Speech Assistant for 8 Indian Languages
// Supports: English, Hindi, Marathi, Gujarati, Tamil, Telugu, Bengali, Kannada

let currentUtterance = null;

const LANG_CODE_MAP = {
  en: 'en-IN',
  hi: 'hi-IN',
  mr: 'mr-IN',
  gu: 'gu-IN',
  ta: 'ta-IN',
  te: 'te-IN',
  bn: 'bn-IN',
  kn: 'kn-IN'
};

export const speakContent = (text, language = 'en', onStart, onEnd, onError) => {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    if (onError) onError('Speech synthesis not supported');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Clean text: remove markdown symbols, bullets, asterisks, URLs, and excessive emoji
  const cleanText = text
    .replace(/[*_#`~>]/g, '')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .trim();

  if (!cleanText) return;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  const langTag = LANG_CODE_MAP[language] || 'en-IN';
  utterance.lang = langTag;
  utterance.rate = 0.92; // Slightly slower pace for maximum accessibility & clarity
  utterance.pitch = 1.0;

  // Try to find the closest matching installed voice
  const voices = window.speechSynthesis.getVoices();
  if (voices && voices.length > 0) {
    let matchedVoice = voices.find(v => v.lang === langTag || v.lang.startsWith(language));
    if (!matchedVoice && language !== 'en') {
      // Secondary fallback for Indian regional languages
      matchedVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('IN'));
    }
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }
  }

  utterance.onstart = () => {
    currentUtterance = utterance;
    if (onStart) onStart();
  };

  utterance.onend = () => {
    currentUtterance = null;
    if (onEnd) onEnd();
  };

  utterance.onerror = (err) => {
    currentUtterance = null;
    if (onEnd) onEnd();
    if (onError) onError(err);
  };

  window.speechSynthesis.speak(utterance);
};

export const stopSpeech = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  currentUtterance = null;
};
