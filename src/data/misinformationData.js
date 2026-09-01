export const predefinedMisinfoCases = [
  {
    id: "case-1",
    input: "Click this unknown link immediately to complete your Census registration and pay ₹250 fee.",
    inputHi: "जनगणना पंजीकरण पूरा करने और ₹250 शुल्क का भुगतान करने के लिए इस लिंक पर क्लिक करें।",
    inputMr: "तुमची जनगणना नोंदणी पूर्ण करण्यासाठी आणि ₹250 भरण्यासाठी या लिंकवर क्लिक करा.",
    status: "danger",
    badge: "🔴 Possible Scam",
    badgeHi: "🔴 फर्जी / धोखा हो सकता है",
    badgeMr: "🔴 फसवणूक / बनावट असू शकतो",
    simpleExplanation: "Census 2027 is 100% FREE. The government never asks for money or registration fees. Any message asking for money is a fake scam.",
    actions: [
      "Do NOT click the link.",
      "Do NOT pay any money or share UPI PIN.",
      "Delete and do not forward this message."
    ]
  },
  {
    id: "case-2",
    input: "Census officials will ask for your bank account password and OTP at your doorstep.",
    inputHi: "जनगणना अधिकारी आपके घर आकर बैंक खाते का पासवर्ड और ओटीपी मांगेंगे।",
    inputMr: "जनगणना अधिकारी घरी येऊन बँक पासवर्ड आणि ओटीपी मागतील.",
    status: "danger",
    badge: "🔴 Possible Scam",
    badgeHi: "🔴 फर्जी / धोखा हो सकता है",
    badgeMr: "🔴 फसवणूक / बनावट असू शकतो",
    simpleExplanation: "Census workers will NEVER ask for your bank account, ATM card, or passwords. They only ask about your home and family members.",
    actions: [
      "Never share passwords, bank numbers, or OTPs with anyone.",
      "Ask to see the official photo ID card of the person.",
      "Report fake calls to the cyber helpline (1930)."
    ]
  },
  {
    id: "case-3",
    input: "Always verify Census announcements through official government communication and censusindia.gov.in.",
    inputHi: "हमेशा आधिकारिक सरकारी वेबसाइट censusindia.gov.in से ही जनगणना की जानकारी की पुष्टि करें।",
    inputMr: "नेहमी अधिकृत सरकारी वेबसाइट censusindia.gov.in वरूनच माहितीची खात्री करा.",
    status: "safe",
    badge: "🟢 Looks Safe",
    badgeHi: "🟢 सुरक्षित लगता है",
    badgeMr: "🟢 सुरक्षित वाटतो",
    simpleExplanation: "This is correct and safe advice. Official census news is only published on government websites ending with .gov.in.",
    actions: [
      "This is genuine and good advice to follow.",
      "You can safely share this reminder with your family."
    ]
  },
  {
    id: "case-4",
    input: "Self-enumeration will be available through the official portal using mobile OTP verification.",
    inputHi: "आधिकारिक सरकारी पोर्टल पर मोबाइल ओटीपी के जरिए खुद फॉर्म भरने की सुविधा मिलेगी।",
    inputMr: "अधिकृत सरकारी पोर्टलवर मोबाईल ओटीपी द्वारे स्वतः फॉर्म भरता येईल.",
    status: "safe",
    badge: "🟢 Looks Safe",
    badgeHi: "🟢 सुरक्षित लगता है",
    badgeMr: "🟢 सुरक्षित वाटतो",
    simpleExplanation: "This is true. The official government portal will allow citizens to fill their household census form using their mobile number.",
    actions: [
      "Use only the official website: censusindia.gov.in",
      "Do not enter your number on any unofficial website."
    ]
  },
  {
    id: "case-5",
    input: "You must give your biometric thumb scan and pay cash to the census enumerator.",
    inputHi: "आपको जनगणना कर्मी को बायोमेट्रिक अंगूठा लगाना होगा और नकद पैसे देने होंगे।",
    inputMr: "तुम्हाला कर्मचाऱ्याला अंगठा लावावा लागेल आणि रोख पैसे द्यावे लागतील.",
    status: "warn",
    badge: "🟠 Be Careful",
    badgeHi: "🟠 सावधान रहें",
    badgeMr: "🟠 काळजी घ्या",
    simpleExplanation: "Census 2027 does not require biometric finger scanning or cash payments. Census only collects answers to simple questions.",
    actions: [
      "Do not pay any cash to anyone for census.",
      "No fingerprint scanner is required for census listing."
    ]
  }
];

export function analyzeSimpleMessage(text) {
  const lower = text.toLowerCase();

  for (const c of predefinedMisinfoCases) {
    if (lower.includes("₹250") || lower.includes("pay") || lower.includes("fee") || lower.includes("unknown link") || lower.includes("पैसे") || lower.includes("शुल्क")) {
      return predefinedMisinfoCases[0];
    }
    if (lower.includes("password") || lower.includes("bank") || lower.includes("otp") || lower.includes("पासवर्ड") || lower.includes("खाते")) {
      return predefinedMisinfoCases[1];
    }
    if (lower.includes("always verify") || lower.includes("official government") || lower.includes("censusindia.gov.in")) {
      return predefinedMisinfoCases[2];
    }
    if (lower.includes("biometric") || lower.includes("thumb") || lower.includes("cash") || lower.includes("अंगूठा")) {
      return predefinedMisinfoCases[4];
    }
    if (lower.includes("self-enumeration") || lower.includes("portal")) {
      return predefinedMisinfoCases[3];
    }
  }

  // Generic heuristic
  if (lower.includes("otp") || lower.includes("password") || lower.includes("money") || lower.includes("charge") || lower.includes("link")) {
    return {
      status: "danger",
      badge: "🔴 Possible Scam",
      badgeHi: "🔴 फर्जी / धोखा हो सकता है",
      badgeMr: "🔴 फसवणूक / बनावट असू शकतो",
      simpleExplanation: "This message asks for money, passwords, or clicks to unverified links. Census is 100% free and never asks for bank details.",
      actions: [
        "Do not click unknown links.",
        "Do not share passwords, bank details, or OTPs.",
        "Check only official website: censusindia.gov.in."
      ]
    };
  }

  return {
    status: "warn",
    badge: "🟠 Be Careful",
    badgeHi: "🟠 सावधान रहें",
    badgeMr: "🟠 काळजी घ्या",
    simpleExplanation: "Please be careful with forwarded messages. Always double-check news on the official Government of India Census portal.",
    actions: [
      "Visit censusindia.gov.in to confirm.",
      "Never share financial or personal passwords."
    ]
  };
}
