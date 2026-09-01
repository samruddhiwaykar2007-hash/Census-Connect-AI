export const availableLanguages = [
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिंदी', flag: '🇮🇳' },
  { code: 'mr', label: 'Marathi', nativeLabel: 'मराठी', flag: '🇮🇳' },
  { code: 'gu', label: 'Gujarati', nativeLabel: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்', flag: '🇮🇳' },
  { code: 'te', label: 'Telugu', nativeLabel: 'తెలుగు', flag: '🇮🇳' },
  { code: 'bn', label: 'Bengali', nativeLabel: 'বাংলা', flag: '🇮🇳' },
  { code: 'kn', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ', flag: '🇮🇳' }
];

export const translations = {
  en: {
    brand: "CensusConnect AI",
    tagline: "Your Friendly Guide for Census 2027",
    listenBtn: "🔊 Listen",
    stopBtn: "⏹️ Stop",
    backHome: "← Back to Main Dashboard",
    openPageBtn: "Open Section →",
    learnMoreBtn: "Learn More",
    hideBtn: "Show Less",
    nav: {
      home: "Dashboard",
      phases: "Census Phases",
      schedule: "State Schedule",
      aiGuide: "Aadya AI Guide",
      stepper: "Prepare",
      safety: "Safety & Privacy",
      misinfo: "Fact Checker",
      insights: "Data Insights",
      startGuide: "Start Guide →"
    },
    hero: {
      title: "Census 2027, Made Simple 🇮🇳",
      subtitle: "Understand the Census. Check your schedule. Get friendly voice & AI guidance in your language.",
      startBtn: "▶️ Start AI Guide",
      scheduleBtn: "📅 Check My Schedule",
      listenBtn: "🔊 Listen to Dashboard Overview",
      audioText: "Welcome to Census 2027 Made Simple. Click any section card below to open its dedicated page with voice support in your preferred language.",
      dashboardHeading: "Choose What You Would Like to Do:",
      dashboardSub: "Click any card below to open its full dedicated page."
    },
    cards: {
      phases: {
        title: "🏠 Census Phases",
        desc: "Learn the two parts: House listing & living amenities, and Family demographic count.",
        action: "View Phases Details"
      },
      schedule: {
        title: "📅 Find State Schedule",
        desc: "Check online self-enumeration dates and home visit periods for your state.",
        action: "View State Dates"
      },
      aiGuide: {
        title: "🤖 Aadya AI Guide",
        desc: "Ask any question in simple words with instant voice read aloud support.",
        action: "Chat with Aadya"
      },
      stepper: {
        title: "📝 Prepare for Census",
        desc: "Simple 4-step readiness journey with family checklist before filling forms.",
        action: "Start 4 Steps"
      },
      safety: {
        title: "🔒 Safety & Privacy",
        desc: "Learn how to stay protected from fake calls, links, and scams.",
        action: "View Safety Rules"
      },
      misinfo: {
        title: "🔍 Check a Message",
        desc: "Paste any WhatsApp message to see if it is safe or a scam risk.",
        action: "Check Message"
      },
      insights: {
        title: "📊 Understand Data",
        desc: "Simple charts showing population, literacy, and urban-rural distribution.",
        action: "Explore Charts"
      }
    },
    phases: {
      tag: "Two Simple Steps",
      title: "Understanding Census 2027",
      subtitle: "The Census happens in two simple parts. Learn what information is asked in each part.",
      audioText: "Understanding Census 2027. Phase 1 is House and Housing information about your home, rooms, water, and electricity. Phase 2 is information about people, such as age, education, and work.",
      phase1: {
        tag: "🏠 Phase 1",
        title: "House & Housing Information",
        desc: "Information about houses, rooms, and basic living facilities.",
        items: [
          "💧 Drinking Water Facility",
          "💡 Electricity & Lighting",
          "🏠 Number of Rooms",
          "🔥 Cooking Fuel (Gas / LPG)"
        ],
        audioText: "Phase 1: House and Housing Information. This phase collects simple details about your house, number of rooms, drinking water, electricity, and cooking gas."
      },
      phase2: {
        tag: "👥 Phase 2",
        title: "Information About People",
        desc: "Information that helps understand the people living in the country.",
        items: [
          "🎂 Age and Date of Birth",
          "📚 Education & Literacy",
          "💼 Work & Occupation",
          "🗣️ Mother Tongue & Languages"
        ],
        audioText: "Phase 2: Information About People. This phase counts every person and asks simple questions about age, education, work, and mother tongue."
      }
    },
    schedule: {
      tag: "State Dates",
      title: "📅 Find Your Census Schedule",
      subtitle: "Choose your state to see when you can fill the form online or meet the census worker.",
      step1: "📍 Step 1: Choose Your State",
      step2: "Step 2: Check Your Dates Below",
      selfEnumTitle: "📱 Self-Enumeration (Online)",
      selfEnumDesc: "You can fill the form yourself on your smartphone or computer using the official portal.",
      surveyTitle: "🏠 Enumerator Survey (Home Visit)",
      surveyDesc: "An authorized census worker with official ID visits your home to verify your details.",
      disclaimer: "Sample Prototype Information — Verify Official Dates on censusindia.gov.in",
      listenBtn: "🔊 Listen to Schedule"
    },
    aiGuide: {
      tag: "Friendly Chat Assistant",
      title: "🤖 Aadya — Your Census Guide",
      subtitle: "Click any question below or type in simple words. Aadya is here to help you step by step.",
      greeting: "Hello! I am Aadya. I will help you understand Census 2027. Click a question below or ask anything.",
      quickChips: [
        "What is Census?",
        "What are the two phases?",
        "How do I prepare?",
        "When should I participate?",
        "How can I stay safe?"
      ],
      placeholder: "Type a simple question here...",
      sendBtn: "Ask Aadya",
      resetBtn: "Reset Conversation",
      disclaimer: "This AI guide is for simple learning and does not collect or submit official census data."
    },
    stepper: {
      tag: "4 Easy Steps",
      title: "Prepare for Census",
      subtitle: "Follow this simple 4-step journey to be ready before filling the census form.",
      audioText: "Prepare for Census in four easy steps. Step 1: Learn the two phases. Step 2: Check your state dates. Step 3: Keep your basic family information ready. Step 4: Follow official government instructions.",
      step1Title: "① Learn",
      step1Desc: "Understand the two census phases: House details first, then family member details.",
      step2Title: "② Check Dates",
      step2Desc: "See when online self-enumeration starts in your state.",
      step3Title: "③ Prepare",
      step3Desc: "Keep basic family details ready (Names, Age, Education, Work).",
      step4Title: "④ Follow Official Instructions",
      step4Desc: "Submit only on the official government website (censusindia.gov.in) with mobile OTP.",
      checklistItems: [
        "🏠 Basic House Details (Rooms, Water, Electricity)",
        "👨‍👩‍👧 Family Member Names & Ages",
        "📚 Education & Schooling Details",
        "💼 Occupation / Nature of Work"
      ],
      prevBtn: "← Previous",
      nextBtn: "Next Step →",
      readyBadge: "You are Ready for Census 2027! 🎉"
    },
    safety: {
      tag: "Your Safety First",
      title: "🔒 Stay Safe & Protected",
      subtitle: "Simple safety rules to protect yourself and your family from scams.",
      audioText: "Stay safe and protected. Only use official government websites ending with .gov.in. Never share your bank passwords or OTPs with anyone. Always check the official ID of census workers.",
      cards: [
        {
          title: "🔐 Use Official Platforms",
          desc: "Only trust websites ending with .gov.in or official government announcements.",
          audio: "Use official platforms. Only trust official government websites ending in dot gov dot in."
        },
        {
          title: "🚫 Never Share OTPs or Passwords",
          desc: "Census officials will NEVER ask for your bank account, ATM PIN, or passwords.",
          audio: "Never share OTPs or passwords. Census officials will never ask for your bank details, ATM PIN, or passwords."
        },
        {
          title: "🔍 Check Before You Trust",
          desc: "Always check the official photo ID card of the census worker visiting your home.",
          audio: "Check before you trust. Always check the official photo ID card of the census worker who visits your home."
        },
        {
          title: "🛡️ Protect Your Information",
          desc: "Your census answers are legally confidential under the Census Act and kept safe.",
          audio: "Protect your information. Your census answers are legally protected and completely confidential."
        }
      ]
    },
    misinfo: {
      tag: "Easy Fact Checker",
      title: "🔍 Check a Census Message",
      subtitle: "Received a message about Census? Paste it here and we will help you understand if it looks suspicious.",
      placeholder: "Paste a WhatsApp message, SMS, or link here to check...",
      checkBtn: "🔍 Check This Message",
      sampleTitle: "Or click a sample message:",
      safeBadge: "🟢 Looks Safe",
      warnBadge: "🟠 Be Careful",
      dangerBadge: "🔴 Possible Scam",
      actionTitle: "What should you do?",
      disclaimer: "Please verify important information through official government sources at censusindia.gov.in."
    },
    insights: {
      tag: "Simple Data",
      title: "📊 Understand Census Data",
      subtitle: "Simple overview of population, literacy, and community distribution across India.",
      sampleNotice: "Sample Data for Demonstration",
      selectState: "Choose State to View Data:",
      allIndia: "All India Overview",
      kpiPop: "👥 Total Population",
      kpiLit: "📚 Education / Literacy",
      kpiUrban: "🏙️ Urban Living",
      kpiRural: "🌾 Rural Living",
      kpiSex: "⚖️ Population Balance (F/1000M)",
      barTitle: "📊 Population Comparison by Age",
      pieTitle: "🥧 Urban vs Rural Share",
      audioText: "Understand census data. View population, education rate, and urban versus rural living distribution across Indian states."
    },
    footer: {
      brand: "CensusConnect AI 🇮🇳",
      text: "Making Census information easier to understand for everyone.",
      prototype: "⚠️ This is a hackathon prototype and not an official Government Census portal."
    }
  },

  hi: {
    brand: "जनगणना कनेक्ट AI",
    tagline: "जनगणना 2027 के लिए आपका सरल मार्गदर्शक",
    listenBtn: "🔊 सुनें",
    stopBtn: "⏹️ रोकें",
    backHome: "← मुख्य डैशबोर्ड पर लौटें",
    openPageBtn: "यह भाग खोलें →",
    learnMoreBtn: "और जानें",
    hideBtn: "कम देखें",
    nav: {
      home: "डैशबोर्ड",
      phases: "जनगणना चरण",
      schedule: "समय सारणी",
      aiGuide: "आद्या AI गाइड",
      stepper: "तैयारी",
      safety: "सुरक्षा",
      misinfo: "तथ्य जांच",
      insights: "डेटा",
      startGuide: "गाइड शुरू करें →"
    },
    hero: {
      title: "जनगणना 2027, अब हुई आसान 🇮🇳",
      subtitle: "जनगणना को समझें। अपनी तारीखें देखें। अपनी भाषा में सरल आवाज और AI मदद पाएं।",
      startBtn: "▶️ AI गाइड शुरू करें",
      scheduleBtn: "📅 मेरी तारीखें देखें",
      listenBtn: "🔊 डैशबोर्ड का परिचय सुनें",
      audioText: "जनगणना 2027 में आपका स्वागत है। किसी भी भाग का पूरा पेज खोलने के लिए नीचे दिए गए कार्ड पर क्लिक करें।",
      dashboardHeading: "आप क्या देखना चाहते हैं चुनें:",
      dashboardSub: "पूरा पेज खोलने के लिए नीचे किसी भी कार्ड पर क्लिक करें।"
    },
    cards: {
      phases: {
        title: "🏠 जनगणना चरण",
        desc: "दो भाग समझें: पहले मकान और सुविधाओं की जानकारी, फिर परिवार के सदस्यों की गिनती।",
        action: "चरणों का विवरण देखें"
      },
      schedule: {
        title: "📅 राज्यवार तारीखें",
        desc: "देखें कि आपके राज्य में ऑनलाइन फॉर्म कब शुरू होगा और कर्मी कब आएंगे।",
        action: "तारीखें देखें"
      },
      aiGuide: {
        title: "🤖 आद्या AI गाइड",
        desc: "कोई भी प्रश्न सरल शब्दों में पूछें और तुरंत आवाज में उत्तर सुनें।",
        action: "आद्या से बात करें"
      },
      stepper: {
        title: "📝 जनगणना की तैयारी",
        desc: "4 सरल कदमों में परिवार की तैयारी पूरी करने का चेकलिस्ट।",
        action: "4 कदम शुरू करें"
      },
      safety: {
        title: "🔒 सुरक्षा एवं नियम",
        desc: "फर्जी कॉल, लिंक और धोखाधड़ी से बचने के सरल नियम जानें।",
        action: "सुरक्षा नियम देखें"
      },
      misinfo: {
        title: "🔍 संदेश की जांच",
        desc: "व्हाट्सएप या मैसेज यहाँ पेस्ट करें और जानें कि यह सही है या फर्जी।",
        action: "संदेश जांचें"
      },
      insights: {
        title: "📊 डेटा को समझें",
        desc: "जनसंख्या, शिक्षा और शहर-गाँव वितरण के सरल चार्ट देखें।",
        action: "चार्ट देखें"
      }
    },
    phases: {
      tag: "दो सरल भाग",
      title: "जनगणना 2027 को समझें",
      subtitle: "जनगणना दो आसान भागों में होती है। जानें किस भाग में क्या पूछा जाता है।",
      audioText: "जनगणना 2027 को समझें। पहला चरण मकान और सुविधाओं की जानकारी का है। दूसरा चरण परिवार के सदस्यों की जानकारी का है।",
      phase1: {
        tag: "🏠 चरण 1",
        title: "मकान एवं आवास की जानकारी",
        desc: "मकान, कमरों और बुनियादी सुविधाओं की सरल जानकारी।",
        items: [
          "💧 पीने के पानी की सुविधा",
          "💡 बिजली और रोशनी",
          "🏠 रहने के कमरों की संख्या",
          "🔥 रसोई गैस / ईंधन का प्रकार"
        ],
        audioText: "चरण 1: मकान और आवास की जानकारी। इसमें आपके मकान, कमरों की संख्या, पीने का पानी, बिजली और रसोई गैस की जानकारी पूछी जाती है।"
      },
      phase2: {
        tag: "👥 चरण 2",
        title: "लोगों एवं परिवार की जानकारी",
        desc: "देश में रहने वाले सभी लोगों और परिवार के सदस्यों की जानकारी।",
        items: [
          "🎂 आयु और जन्मतिथि",
          "📚 शिक्षा और पढ़ाई",
          "💼 काम और व्यवसाय",
          "🗣️ मातृभाषा और बोली"
        ],
        audioText: "चरण 2: लोगों और परिवार की जानकारी। इसमें परिवार के हर सदस्य का नाम, आयु, शिक्षा, काम और भाषा पूछी जाती है।"
      }
    },
    schedule: {
      tag: "राज्यवार तारीखें",
      title: "📅 अपनी जनगणना समय सारणी देखें",
      subtitle: "अपना राज्य चुनें और देखें कि आप ऑनलाइन कब भर सकते हैं या जनगणना कर्मी कब आएंगे।",
      step1: "📍 चरण 1: अपना राज्य चुनें",
      step2: "चरण 2: नीचे अपनी तारीखें देखें",
      selfEnumTitle: "📱 मोबाइल से खुद भरें (ऑनलाइन)",
      selfEnumDesc: "आप सरकारी वेबसाइट पर अपने मोबाइल से घर बैठे फॉर्म भर सकते हैं।",
      surveyTitle: "🏠 जनगणना कर्मी का दौरा (घर पर)",
      surveyDesc: "सरकारी पहचान पत्र के साथ अधिकृत कर्मी आपके घर आकर जानकारी की पुष्टि करेंगे।",
      disclaimer: "नमूना जानकारी — कृपया censusindia.gov.in पर आधिकारिक तारीखों की पुष्टि करें।",
      listenBtn: "🔊 समय सारणी सुनें"
    },
    aiGuide: {
      tag: "मित्रवत सहायक",
      title: "🤖 आद्या — आपकी जनगणना मार्गदर्शक",
      subtitle: "नीचे दिए किसी भी प्रश्न पर क्लिक करें या सरल शब्दों में लिखें। आद्या आपकी मदद करेगी।",
      greeting: "नमस्ते! मैं आद्या हूँ। मैं आपको जनगणना 2027 समझाने में मदद करूंगी। नीचे दिए किसी भी प्रश्न पर क्लिक करें।",
      quickChips: [
        "जनगणना क्या है?",
        "दोनों चरण क्या हैं?",
        "मैं कैसे तैयारी करूँ?",
        "मुझे कब भाग लेना है?",
        "मैं सुरक्षित कैसे रहूँ?"
      ],
      placeholder: "यहाँ कोई सरल प्रश्न लिखें...",
      sendBtn: "आद्या से पूछें",
      resetBtn: "बातचीत फिर शुरू करें",
      disclaimer: "यह AI सहायक केवल जानकारी देने के लिए है और आधिकारिक डेटा एकत्र नहीं करता।"
    },
    stepper: {
      tag: "4 आसान कदम",
      title: "जनगणना की पूर्व तैयारी",
      subtitle: "फॉर्म भरने से पहले पूरी तरह तैयार होने के लिए इन 4 सरल चरणों को देखें।",
      audioText: "चार आसान चरणों में जनगणना की तैयारी करें। चरण 1: प्रक्रिया समझें। चरण 2: अपने राज्य की तारीखें देखें। चरण 3: परिवार की जानकारी तैयार रखें। चरण 4: आधिकारिक निर्देशों का पालन करें।",
      step1Title: "① समझें",
      step1Desc: "दोनों चरणों को जानें: पहले मकान की जानकारी, फिर परिवार के सदस्यों की।",
      step2Title: "② तारीखें देखें",
      step2Desc: "देखें कि आपके राज्य में ऑनलाइन फॉर्म कब शुरू हो रहा है।",
      step3Title: "③ जानकारी तैयार रखें",
      step3Desc: "परिवार के सदस्यों के नाम, उम्र, पढ़ाई और काम की जानकारी याद रखें।",
      step4Title: "④ आधिकारिक निर्देश",
      step4Desc: "केवल आधिकारिक सरकारी वेबसाइट (censusindia.gov.in) पर ही फॉर्म भरें।",
      checklistItems: [
        "🏠 मकान का विवरण (कमरे, पानी, बिजली, गैस)",
        "👨‍👩‍👧 परिवार के सदस्यों के नाम और उम्र",
        "📚 शिक्षा और पढ़ाई की जानकारी",
        "💼 काम या व्यवसाय का स्वरूप"
      ],
      prevBtn: "← पिछला",
      nextBtn: "अगला कदम →",
      readyBadge: "आप जनगणना 2027 के लिए तैयार हैं! 🎉"
    },
    safety: {
      tag: "आपकी सुरक्षा",
      title: "🔒 सुरक्षित और सतर्क रहें",
      subtitle: "धोखाधड़ी और फर्जी संदेशों से बचने के सरल नियम।",
      audioText: "सुरक्षित और सतर्क रहें। केवल .gov.in वाली सरकारी वेबसाइटों पर भरोसा करें। अपना बैंक पासवर्ड या ओटीपी कभी किसी को न दें। घर आने वाले जनगणना कर्मी का आईडी कार्ड जरूर देखें।",
      cards: [
        {
          title: "🔐 आधिकारिक वेबसाइट का उपयोग करें",
          desc: "केवल .gov.in वाली सरकारी वेबसाइट या आधिकारिक सूचनाओं पर ही भरोसा करें।",
          audio: "केवल आधिकारिक सरकारी वेबसाइटों पर ही भरोसा करें।"
        },
        {
          title: "🚫 OTP या पासवर्ड कभी न दें",
          desc: "जनगणना में कभी भी बैंक खाता, एटीएम पिन या पासवर्ड नहीं पूछा जाता।",
          audio: "जनगणना में बैंक खाता, पिन या पासवर्ड कभी नहीं मांगा जाता।"
        },
        {
          title: "🔍 पहचान पत्र देखकर ही भरोसा करें",
          desc: "घर आने वाले जनगणना कर्मी का फोटो पहचान पत्र जरूर देखें।",
          audio: "घर आने वाले जनगणना कर्मी का पहचान पत्र हमेशा जांचें।"
        },
        {
          title: "🛡️ आपकी जानकारी सुरक्षित है",
          desc: "जनगणना कानून के तहत आपकी व्यक्तिगत जानकारी पूरी तरह गोपनीय रखी जाती है।",
          audio: "जनगणना कानून के अनुसार आपकी जानकारी पूरी तरह सुरक्षित और गोपनीय है।"
        }
      ]
    },
    misinfo: {
      tag: "सरल तथ्य जांच",
      title: "🔍 संदेश की सत्यता जांचें",
      subtitle: "क्या आपको कोई संदेश मिला है? यहाँ लिखें और हम बताएंगे कि यह सुरक्षित है या संदिग्ध।",
      placeholder: "यहाँ कोई व्हाट्सएप संदेश या लिंक पेस्ट करें...",
      checkBtn: "🔍 इस संदेश की जांच करें",
      sampleTitle: "या किसी नमूना संदेश पर क्लिक करें:",
      safeBadge: "🟢 सुरक्षित लगता है",
      warnBadge: "🟠 सावधान रहें",
      dangerBadge: "🔴 फर्जी / धोखा हो सकता है",
      actionTitle: "आपको क्या करना चाहिए?",
      disclaimer: "कृपया आधिकारिक सरकारी जानकारी के लिए हमेशा censusindia.gov.in देखें।"
    },
    insights: {
      tag: "सरल जानकारी",
      title: "📊 जनगणना डेटा को समझें",
      subtitle: "भारत की जनसंख्या, शिक्षा और शहरी-ग्रामीण रहन-सहन का सरल विवरण।",
      sampleNotice: "प्रदर्शन हेतु नमूना डेटा",
      selectState: "डेटा देखने के लिए राज्य चुनें:",
      allIndia: "अखिल भारतीय विवरण",
      kpiPop: "👥 कुल जनसंख्या",
      kpiLit: "📚 शिक्षा / साक्षरता",
      kpiUrban: "🏙️ शहर में रहने वाले",
      kpiRural: "🌾 गाँव में रहने वाले",
      kpiSex: "⚖️ महिला-पुरुष संतुलन (1000 पर)",
      barTitle: "📊 उम्र के अनुसार जनसंख्या",
      pieTitle: "🥧 शहर बनाम गाँव का अनुपात",
      audioText: "जनगणना डेटा को समझें। भारत के राज्यों में जनसंख्या, शिक्षा और शहरी-ग्रामीण वितरण की सरल जानकारी।"
    },
    footer: {
      brand: "जनगणना कनेक्ट AI 🇮🇳",
      text: "जनगणना की जानकारी को हर नागरिक के लिए आसान बनाना।",
      prototype: "⚠️ यह एक हैकाथॉन प्रोटोटाइप है, आधिकारिक सरकारी पोर्टल नहीं।"
    }
  },

  mr: {
    brand: "जनगणना कनेक्ट AI",
    tagline: "जनगणना 2027 साठी तुमचा सोपा मार्गदर्शक",
    listenBtn: "🔊 ऐका",
    stopBtn: "⏹️ थांबवा",
    backHome: "← मुख्य डॅशबोर्डवर परत जा",
    openPageBtn: "हा भाग उघडा →",
    learnMoreBtn: "अधिक माहिती",
    hideBtn: "कमी माहिती",
    nav: {
      home: "डॅशबोर्ड",
      phases: "टप्पे",
      schedule: "वेळापत्रक",
      aiGuide: "आद्या AI मार्गदर्शक",
      stepper: "तयारी",
      safety: "सुरक्षा",
      misinfo: "माहिती तपासणी",
      insights: "माहिती चार्ट",
      startGuide: "मार्गदर्शक सुरू करा →"
    },
    hero: {
      title: "जनगणना 2027, आता झाली सोपी 🇮🇳",
      subtitle: "जनगणना समजून घ्या. तुमच्या तारखा तपासा. तुमच्या भाषेत सोपे आवाज आणि AI मार्गदर्शन मिळवा.",
      startBtn: "▶️ AI मार्गदर्शक सुरू करा",
      scheduleBtn: "📅 माझ्या तारखा पहा",
      listenBtn: "🔊 डॅशबोर्ड माहिती ऐका",
      audioText: "जनगणना 2027 मध्ये आपले स्वागत आहे. कोणताही भाग स्वतंत्र पृष्ठावर उघडण्यासाठी खालील कार्डवर क्लिक करा.",
      dashboardHeading: "तुम्हाला काय पहायचे आहे ते निवडा:",
      dashboardSub: "संपूर्ण पृष्ठ उघडण्यासाठी खालील कोणत्याही कार्डवर क्लिक करा."
    },
    cards: {
      phases: {
        title: "🏠 जनगणना टप्पे",
        desc: "दोन भाग समजून घ्या: घराची व सुविधांची माहिती, आणि कुटुंबातील सदस्यांची नोंद.",
        action: "टप्प्यांचे तपशील पहा"
      },
      schedule: {
        title: "📅 राज्याचे वेळापत्रक",
        desc: "तुमच्या राज्यात ऑनलाइन नोंदणी कधी सुरू होईल आणि प्रगणक कधी येतील ते तपासा.",
        action: "वेळापत्रक पहा"
      },
      aiGuide: {
        title: "🤖 आद्या AI मार्गदर्शक",
        desc: "कोणताही प्रश्न सोप्या शब्दांत विचारा आणि आवाजात उत्तर ऐका.",
        action: "आद्याशी संवाद साधा"
      },
      stepper: {
        title: "📝 जनगणनेची तयारी",
        desc: "4 सोप्या पायऱ्यांमध्ये कुटुंबाची पूर्वतयारी पूर्ण करा.",
        action: "4 पायऱ्या सुरू करा"
      },
      safety: {
        title: "🔒 सुरक्षा व गोपनीयता",
        desc: "खोट्या कॉल्स आणि मेसेजपासून स्वतःचा बचाव कसा करावा ते जाणून घ्या.",
        action: "सुरक्षा नियम पहा"
      },
      misinfo: {
        title: "🔍 मेसेज तपासा",
        desc: "व्हाट्सॲप मेसेज खरा आहे की खोटा हे त्वरित तपासा.",
        action: "मेसेज तपासा"
      },
      insights: {
        title: "📊 माहिती चार्ट",
        desc: "लोकसंख्या, साक्षरता आणि शहर-गाव प्रमाणाचे सोपे चार्ट पहा.",
        action: "चार्ट पहा"
      }
    },
    phases: {
      tag: "दोन सोपे टप्पे",
      title: "जनगणना 2027 समजून घ्या",
      subtitle: "जनगणना दोन सोप्या टप्प्यांत पार पडते. कोणत्या टप्प्यात कोणती माहिती विचारली जाते ते पहा.",
      audioText: "जनगणना 2027 समजून घ्या. पहिला टप्पा घराची माहिती आणि सुविधांबद्दल आहे. दुसरा टप्पा घरातील लोकांच्या माहितीबद्दल आहे.",
      phase1: {
        tag: "🏠 टप्पा 1",
        title: "घराची आणि सुविधांची माहिती",
        desc: "घर, खोल्या आणि प्राथमिक सुविधांची सोपी माहिती.",
        items: [
          "💧 पिण्याच्या पाण्याची सोय",
          "💡 वीज आणि प्रकाश",
          "🏠 राहण्याच्या खोल्यांची संख्या",
          "🔥 स्वयंपाकाचा गॅस / इंधन"
        ],
        audioText: "टप्पा 1: घराची आणि सुविधांची माहिती. यामध्ये तुमच्या घराचा प्रकार, खोल्यांची संख्या, पिण्याचे पाणी, वीज आणि गॅसची माहिती विचारली जाते."
      },
      phase2: {
        tag: "👥 टप्पा 2",
        title: "लोकांची आणि कुटुंबाची माहिती",
        desc: "देशात राहणाऱ्या सर्व नागरिकांची आणि कुटुंबातील सदस्यांची माहिती.",
        items: [
          "🎂 वय आणि जन्मतारीख",
          "📚 शिक्षण आणि साक्षरता",
          "💼 काम आणि रोजगार",
          "🗣️ मातृभाषा आणि बोलीभाषा"
        ],
        audioText: "टप्पा 2: लोकांची आणि कुटुंबाची माहिती. यामध्ये घरातील प्रत्येक सदस्याचे नाव, वय, शिक्षण, काम आणि मातृभाषा विचारली जाते."
      }
    },
    schedule: {
      tag: "राज्यानुसार तारखा",
      title: "📅 तुमचे जनगणना वेळापत्रक शोधा",
      subtitle: "तुमचे राज्य निवडा आणि तुम्ही ऑनलाइन कधी भरू शकता किंवा अधिकारी कधी येतील ते पहा.",
      step1: "📍 पायरी 1: तुमचे राज्य निवडा",
      step2: "पायरी 2: खाली तुमच्या तारखा पहा",
      selfEnumTitle: "📱 स्वतः ऑनलाइन भरा (मोबाईल / पोर्टल)",
      selfEnumDesc: "तुम्ही तुमच्या मोबाईलवर सरकारी वेबसाइटवर जाऊन स्वतः फॉर्म भरू शकता.",
      surveyTitle: "🏠 प्रगणक भेट (घरोघरी सर्वेक्षण)",
      surveyDesc: "सरकारी ओळखपत्र असलेले अधिकृत प्रगणक घरी येऊन माहितीची पडताळणी करतील.",
      disclaimer: "नमुना माहिती — कृपया censusindia.gov.in वर अधिकृत तारखांची खात्री करा.",
      listenBtn: "🔊 वेळापत्रक ऐका"
    },
    aiGuide: {
      tag: "सोपा AI मित्र",
      title: "🤖 आद्या — तुमची जनगणना मार्गदर्शक",
      subtitle: "खालील कोणत्याही प्रश्नावर क्लिक करा किंवा सोप्या शब्दांत विचारा. आद्या तुम्हाला मदत करेल.",
      greeting: "नमस्कार! मी आद्या आहे. जनगणना 2027 समजून घेण्यासाठी मी तुम्हाला मदत करेन. खालील कोणत्याही प्रश्नावर क्लिक करा.",
      quickChips: [
        "जनगणना म्हणजे काय?",
        "दोन टप्पे कोणते आहेत?",
        "मी कशी तयारी करू?",
        "मी कधी सहभाग घ्यावा?",
        "सुरक्षित कसे राहावे?"
      ],
      placeholder: "येथे सोपा प्रश्न लिहा...",
      sendBtn: "आद्याला विचारा",
      resetBtn: "संवाद पूर्ववत करा",
      disclaimer: "हा AI मार्गदर्शक केवळ माहिती देण्यासाठी आहे आणि अधिकृत डेटा गोळा करत नाही."
    },
    stepper: {
      tag: "4 सोप्या पायऱ्या",
      title: "जनगणनेची पूर्वतयारी",
      subtitle: "ऑनलाइन फॉर्म भरण्यापूर्वी कुटुंबाची तयारी पूर्ण करण्यासाठी या 4 पायऱ्या पहा.",
      audioText: "चार सोप्या पायऱ्यांमध्ये जनगणनेची तयारी करा. पायरी 1: प्रक्रिया समजून घ्या. पायरी 2: राज्याच्या तारखा तपासा. पायरी 3: कुटुंबाची माहिती तयार ठेवा. पायरी 4: अधिकृत सरकारी सूचनांचे पालन करा.",
      step1Title: "① समजून घ्या",
      step1Desc: "दोन्ही टप्पे जाणून घ्या: आधी घराची माहिती, नंतर कुटुंबातील लोकांची माहिती.",
      step2Title: "② तारखा पहा",
      step2Desc: "तुमच्या राज्यात ऑनलाइन नोंदणी कधी सुरू होत आहे ते पहा.",
      step3Title: "③ माहिती तयार ठेवा",
      step3Desc: "कुटुंबातील सदस्यांची नावे, वय, शिक्षण आणि काम लक्षात ठेवा.",
      step4Title: "④ अधिकृत सूचना",
      step4Desc: "केवळ अधिकृत सरकारी वेबसाइटवर (censusindia.gov.in) फॉर्म भरा.",
      checklistItems: [
        "🏠 घराचे तपशील (खोल्या, पाणी, वीज, गॅस)",
        "👨‍👩‍👧 सदस्यांची नावे आणि वय",
        "📚 शिक्षण व पदवी माहिती",
        "💼 काम किंवा रोजगाराचे स्वरूप"
      ],
      prevBtn: "← मागील",
      nextBtn: "पुढील पायरी →",
      readyBadge: "तुम्ही जनगणना 2027 साठी तयार आहात! 🎉"
    },
    safety: {
      tag: "तुमची सुरक्षितता",
      title: "🔒 सुरक्षित आणि सावध राहा",
      subtitle: "फसवणूक आणि खोट्या संदेशांपासून वाचण्यासाठी सोपे नियम.",
      audioText: "सुरक्षित आणि सावध राहा. फक्त डॉट जीओव्ही डॉट इन असलेल्या सरकारी वेबसाइटवर विश्वास ठेवा. तुमचा बँक पासवर्ड किंवा ओटीपी कधीही कोणाला देऊ नका. घरी येणाऱ्या कर्मचाऱ्याचे ओळखपत्र नेहमी तपासा.",
      cards: [
        {
          title: "🔐 अधिकृत वेबसाइट वापरा",
          desc: "केवळ .gov.in ने संपणाऱ्या अधिकृत संकेतस्थळांवरच विश्वास ठेवा.",
          audio: "फक्त अधिकृत सरकारी वेबसाइटचा वापर करा."
        },
        {
          title: "🚫 OTP किंवा पासवर्ड देऊ नका",
          desc: "जनगणनेत बँक खाते, पिन किंवा पासवर्ड कधीही विचारला जात नाही.",
          audio: "जनगणनेमध्ये बँक खाते किंवा पासवर्ड कधीही मागितला जात नाही."
        },
        {
          title: "🔍 ओळखपत्र तपासा",
          desc: "घरी येणाऱ्या जनगणना कर्मचाऱ्याचे अधिकृत ओळखपत्र नक्की तपासा.",
          audio: "घरी येणाऱ्या कर्मचाऱ्याचे अधिकृत ओळखपत्र नेहमी तपासा."
        },
        {
          title: "🛡️ तुमची माहिती सुरक्षित आहे",
          desc: "जनगणना कायद्यानुसार तुमची वैयक्तिक माहिती पूर्णपणे सुरक्षित ठेवली जाते.",
          audio: "कायद्यानुसार तुमची सर्व माहिती पूर्णपणे सुरक्षित आणि गोपनीय राहते."
        }
      ]
    },
    misinfo: {
      tag: "माहिती तपासणी",
      title: "🔍 संदेश खरा की खोटा तपासा",
      subtitle: "जनगणनेबद्दल काही मेसेज आला आहे का? येथे पेस्ट करा आणि तो सुरक्षित आहे की संशयास्पद ते जाणून घ्या.",
      placeholder: "येथे व्हाट्सॲप मेसेज किंवा लिंक पेस्ट करा...",
      checkBtn: "🔍 हा मेसेज तपासा",
      sampleTitle: "किंवा नमुना मेसेजवर क्लिक करा:",
      safeBadge: "🟢 सुरक्षित वाटतो",
      warnBadge: "🟠 काळजी घ्या",
      dangerBadge: "🔴 फसवणूक / बनावट असू शकतो",
      actionTitle: "तुम्ही काय करावे?",
      disclaimer: "अधिकृत सरकारी माहितीसाठी नेहमी censusindia.gov.in चा वापर करा."
    },
    insights: {
      tag: "सोपी माहिती",
      title: "📊 जनगणनेची माहिती समजून घ्या",
      subtitle: "भारताची लोकसंख्या, शिक्षण आणि शहरी-ग्रामीण प्रमाण यांची सोपी मांडणी.",
      sampleNotice: "फक्त नमुना माहिती",
      selectState: "माहिती पाहण्यासाठी राज्य निवडा:",
      allIndia: "अखिल भारतीय आढावा",
      kpiPop: "👥 एकूण लोकसंख्या",
      kpiLit: "📚 शिक्षण / साक्षरता",
      kpiUrban: "🏙️ शहरात राहणारे",
      kpiRural: "🌾 गावात राहणारे",
      kpiSex: "⚖️ स्त्री-पुरुष प्रमाण (1000 मागे)",
      barTitle: "📊 वयानुसार लोकसंख्या",
      pieTitle: "🥧 शहर विरुद्ध गाव प्रमाण",
      audioText: "जनगणना माहिती समजून घ्या. भारतातील लोकसंख्या, शिक्षण आणि शहर-गाव प्रमाणाची सोपी मांडणी."
    },
    footer: {
      brand: "जनगणना कनेक्ट AI 🇮🇳",
      text: "जनगणनेची माहिती प्रत्येकासाठी सोपी आणि सुलभ बनवणे.",
      prototype: "⚠️ हा एक हॅकॅथॉन प्रोटोटाइप आहे, अधिकृत सरकारी पोर्टल नाही."
    }
  },

  gu: {
    brand: "જનગણના કનેક્ટ AI",
    tagline: "જનગણના 2027 માટે તમારો સરળ માર્ગદર્શક",
    listenBtn: "🔊 સાંભળો",
    stopBtn: "⏹️ રોકો",
    backHome: "← મુખ્ય ડેશબોર્ડ પર પાછા જાઓ",
    openPageBtn: "આ પેજ ખોલો →",
    learnMoreBtn: "વધુ જાણો",
    hideBtn: "ઓછું જુઓ",
    nav: {
      home: "ડેશબોર્ડ",
      phases: "જનગણના તબક્કા",
      schedule: "સમયપત્રક",
      aiGuide: "આદ્યા AI ગાઇડ",
      stepper: "તૈયારી",
      safety: "સુરક્ષા",
      misinfo: "સત્યતા તપાસ",
      insights: "ડેટા ચાર્ટ",
      startGuide: "માર્ગદર્શક શરૂ કરો →"
    },
    hero: {
      title: "જનગણના 2027, હવે બની સરળ 🇮🇳",
      subtitle: "જનગણના પ્રક્રિયા સમજો. તમારી તારીખો જુઓ. સરળ અવાજ અને AI સહાય મેળવો.",
      startBtn: "▶️ AI ગાઇડ શરૂ કરો",
      scheduleBtn: "📅 મારી તારીખો જુઓ",
      listenBtn: "🔊 માહિતી સાંભળો",
      audioText: "જનગણના 2027 માં આપનું સ્વાગત છે. સમજો જનગણના પ્રક્રિયા સરળ ગુજરાતી ભાષામાં.",
      dashboardHeading: "તમે શું જોવા માંગો છો તે પસંદ કરો:",
      dashboardSub: "સંપૂર્ણ પેજ ખોલવા માટે નીચેના કાર્ડ પર ક્લિક કરો."
    },
    cards: {
      phases: { title: "🏠 જનગણના તબક્કા", desc: "મકાન અને પરિવારની ગણતરીના બે ભાગ સમજો.", action: "તબક્કા જુઓ" },
      schedule: { title: "📅 રાજ્ય સમયપત્રક", desc: "ઓનલાઇન ફોર્મ અને કર્મચારી મુલાકાતની તારીખો જુઓ.", action: "તારીખો જુઓ" },
      aiGuide: { title: "🤖 આદ્યા AI ગાઇડ", desc: "કોઈપણ પ્રશ્ન સરળતાથી પૂછો અને અવાજમાં સાંભળો.", action: "આદ્યા સાથે વાત કરો" },
      stepper: { title: "📝 જનગણના તૈયારી", desc: "4 સરળ પગલાંમાં પરિવારની માહિતી તૈયાર કરો.", action: "4 પગલાં શરૂ કરો" },
      safety: { title: "🔒 સુરક્ષા નિયમો", desc: "સાયબર છેતરપિંડીથી સુરક્ષિત રહેવાના નિયમો જાણો.", action: "સુરક્ષા નિયમો" },
      misinfo: { title: "🔍 મેસેજ ચકાસો", desc: "કોઈપણ મેસેજ સાચો છે કે ખોટો તે તપાસો.", action: "મેસેજ તપાસો" },
      insights: { title: "📊 ડેટા સમજો", desc: "વસ્તી અને શિક્ષણના સરળ ચાર્ટ જુઓ.", action: "ચાર્ટ જુઓ" }
    },
    phases: {
      tag: "બે સરળ તબક્કા",
      title: "જનગણના 2027 ને સમજો",
      subtitle: "જનગણના બે સરળ ભાગોમાં થાય છે.",
      audioText: "જનગણના 2027 સમજો. પહેલો તબક્કો મકાન વિગતોનો છે, બીજો તબક્કો પરિવારજનોની વિગતોનો છે.",
      phase1: { tag: "🏠 તબક્કો 1", title: "મકાન અને સુવિધાઓ", desc: "મકાન, રૂમ, પાણી અને વીજળીની માહિતી.", items: ["💧 પીવાનું પાણી", "💡 વીજળી", "🏠 રૂમની સંખ્યા", "🔥 રસોઈ ગેસ"], audioText: "તબક્કો 1: મકાન અને સુવિધાઓની માહિતી." },
      phase2: { tag: "👥 તબક્કો 2", title: "પરિવારજનોની માહિતી", desc: "ઉંમર, શિક્ષણ અને વ્યવસાયની વિગતો.", items: ["🎂 ઉંમર અને જન્મતારીખ", "📚 શિક્ષણ", "💼 કામ / ધંધો", "🗣️ માતૃભાષા"], audioText: "તબક્કો 2: પરિવારજનોની વિગતો." }
    },
    schedule: {
      tag: "રાજ્ય તારીખો",
      title: "📅 તમારું જનગણના સમયપત્રક જુઓ",
      subtitle: "તમારું રાજ્ય પસંદ કરો અને તારીખો જુઓ.",
      step1: "📍 પગલું 1: રાજ્ય પસંદ કરો",
      step2: "પગલું 2: નીચે તારીખો જુઓ",
      selfEnumTitle: "📱 જાતે ઓનલાઇન ભરો (મોબાઇલ)",
      selfEnumDesc: "તમે તમારા મોબાઇલ પરથી સરકારી પોર્ટલ પર ફોર્મ ભરી શકો છો.",
      surveyTitle: "🏠 કર્મચારી મુલાકાત (ઘરે સર્વે)",
      surveyDesc: "સરકારી આઈડી કાર્ડ સાથે કર્મચારી ઘરે આવીને વિગતો ચકાસશે.",
      disclaimer: "નમૂના માહિતી — સત્તાવાર તારીખો માટે censusindia.gov.in જુઓ.",
      listenBtn: "🔊 સમયપત્રક સાંભળો"
    },
    aiGuide: {
      tag: "AI સહાયક",
      title: "🤖 આદ્યા — તમારી જનગણના માર્ગદર્શક",
      subtitle: "કોઈપણ પ્રશ્ન પૂછો, આદ્યા તમને મદદ કરશે.",
      greeting: "નમસ્તે! હું આદ્યા છું. જનગણના 2027 સમજવામાં હું તમને મદદ કરીશ.",
      quickChips: ["જનગણના શું છે?", "બે તબક્કા કયા છે?", "તૈયારી કેવી રીતે કરવી?", "ભાગ ક્યારે લેવો?", "સુરક્ષિત કેમ રહેવું?"],
      placeholder: "અહીં સરળ પ્રશ્ન લખો...",
      sendBtn: "પૂછો",
      resetBtn: "ફરીથી શરૂ કરો",
      disclaimer: "આ AI ગાઇડ માત્ર માહિતી માટે છે."
    },
    stepper: {
      tag: "4 સરળ પગલાં",
      title: "જનગણના તૈયારી",
      subtitle: "ફોર્મ ભરતા પહેલા આ 4 સરળ પગલાં જુઓ.",
      audioText: "ચાર સરળ પગલાંમાં જનગણના તૈયારી કરો.",
      step1Title: "① સમજો", step1Desc: "બંને તબક્કા સમજો.",
      step2Title: "② તારીખો જુઓ", step2Desc: "તમારા રાજ્યની તારીખો ચકાસો.",
      step3Title: "③ માહિતી તૈયાર રાખો", step3Desc: "નામ, ઉંમર, અભ્યાસ યાદ રાખો.",
      step4Title: "④ સત્તાવાર સૂચનાઓ", step4Desc: "માત્ર censusindia.gov.in પર જ ભરો.",
      checklistItems: ["🏠 મકાન વિગતો", "👨‍👩‍👧 પરિવારજનોની ઉંમર", "📚 અભ્યાસ માહિતી", "💼 કામ ધંધાની વિગત"],
      prevBtn: "← પાછળ", nextBtn: "આગળનું પગલું →", readyBadge: "તમે જનગણના માટે તૈયાર છો! 🎉"
    },
    safety: {
      tag: "તમારી સુરક્ષા",
      title: "🔒 સુરક્ષિત અને સાવધ રહો",
      subtitle: "છેતરપિંડીથી બચવાના સરળ નિયમો.",
      audioText: "સુરક્ષિત રહો. ફક્ત સરકારી વેબસાઇટ પર વિશ્વાસ કરો. બેંક પાસવર્ડ ક્યારેય ન આપો.",
      cards: [
        { title: "🔐 સરકારી વેબસાઇટ વાપરો", desc: "ફક્ત .gov.in વાળી વેબસાઇટ પર જ ભરો.", audio: "ફક્ત સરકારી વેબસાઇટ વાપરો." },
        { title: "🚫 પાસવર્ડ ક્યારેય ન આપો", desc: "જનગણનામાં બેંક ખાતા કે પાસવર્ડ પૂછાતા નથી.", audio: "બેંક ખાતા કે પાસવર્ડ ક્યારેય ન આપો." },
        { title: "🔍 આઈડી કાર્ડ તપાસો", desc: "ઘરે આવતા કર્મચારીનું આઈડી કાર્ડ ચોક્કસ જુઓ.", audio: "કર્મચારીનું આઈડી કાર્ડ જુઓ." },
        { title: "🛡️ માહિતી સુરક્ષિત છે", desc: "કાયદા મુજબ તમારી માહિતી સંપૂર્ણ ગુપ્ત રહે છે.", audio: "તમારી માહિતી સુરક્ષિત છે." }
      ]
    },
    misinfo: {
      tag: "માહિતી તપાસ",
      title: "🔍 મેસેજ સાચો કે ખોટો તપાસો",
      subtitle: "મેસેજ પેસ્ટ કરો અને જાણો કે તે સાચો છે કે શંકાસ્પદ.",
      placeholder: "અહીં મેસેજ પેસ્ટ કરો...",
      checkBtn: "🔍 મેસેજ તપાસો",
      sampleTitle: "અથવા નમૂનો પસંદ કરો:",
      safeBadge: "🟢 સુરક્ષિત લાગે છે",
      warnBadge: "🟠 સાવચેત રહો",
      dangerBadge: "🔴 ફ્રોડ / છેતરપિંડી હોઈ શકે",
      actionTitle: "તમારે શું કરવું જોઈએ?",
      disclaimer: "સત્તાવાર માહિતી માટે censusindia.gov.in જુઓ."
    },
    insights: {
      tag: "ડેટા",
      title: "📊 જનગણના ડેટા સમજો",
      subtitle: "વસ્તી અને શિક્ષણનો સરળ સારાંશ.",
      sampleNotice: "પ્રદર્શન માટે નમૂના ડેટા",
      selectState: "રાજ્ય પસંદ કરો:",
      allIndia: "અખિલ ભારતીય ડેટા",
      kpiPop: "👥 કુલ વસ્તી", kpiLit: "📚 શિક્ષણ દર", kpiUrban: "🏙️ શહેરી વસ્તી", kpiRural: "🌾 ગ્રામીણ વસ્તી", kpiSex: "⚖️ જાતિ પ્રમાણ",
      barTitle: "📊 ઉંમર પ્રમાણે વસ્તી", pieTitle: "🥧 શહેર વિરુદ્ધ ગામ",
      audioText: "જનગણના ડેટા સમજો સરળ ગુજરાતીમાં."
    },
    footer: { brand: "જનગણના કનેક્ટ AI 🇮🇳", text: "જનગણના માહિતી દરેક નાગરિક માટે સરળ બનાવવી.", prototype: "⚠️ આ હેકાથોન પ્રોટોટાઇપ છે." }
  },

  ta: {
    brand: "மக்கள்தொகை கணக்கெடுப்பு AI",
    tagline: "சென்சஸ் 2027 எளிய வழிகாட்டி",
    listenBtn: "🔊 கேளுங்கள்",
    stopBtn: "⏹️ நிறுத்து",
    backHome: "← முதன்மை பக்கத்திற்கு செல்லவும்",
    openPageBtn: "திறக்க →",
    learnMoreBtn: "மேலும் அறிய",
    hideBtn: "குறைவாக காட்டுக",
    nav: { home: "முகப்பு", phases: "கட்டங்கள்", schedule: "அட்டவணை", aiGuide: "ஆத்யா AI", stepper: "தயாரிப்பு", safety: "பாதுகாப்பு", misinfo: "உண்மை சரிபார்ப்பு", insights: "தரவு", startGuide: "தொடங்கு →" },
    hero: {
      title: "சென்சஸ் 2027, எளிய முறையில் 🇮🇳",
      subtitle: "சென்சஸ் முறையை புரிந்து கொள்ளுங்கள். உங்கள் தேதிகளை அறிந்து கொள்ளுங்கள்.",
      startBtn: "▶️ AI வழிகாட்டி", scheduleBtn: "📅 அட்டவணை", listenBtn: "🔊 குரல் வழியே கேட்க",
      audioText: "சென்சஸ் 2027 எளிதான வழிகாட்டிக்கு நல்வரவு. தேவையான பகுதியை தெரிவு செய்து குரல் வழியே கேட்டு தெரிந்து கொள்ளுங்கள்.",
      dashboardHeading: "நீங்கள் பார்க்க விரும்பும் பகுதியை தேர்வு செய்யவும்:",
      dashboardSub: "முழு பக்கத்தை திறக்க கீழே உள்ள அட்டையை அழுத்தவும்."
    },
    cards: {
      phases: { title: "🏠 சென்சஸ் கட்டங்கள்", desc: "வீட்டு விவரங்கள் மற்றும் குடும்பத்தினர் விவரங்கள் அறிய.", action: "கட்டங்களை பார்க்க" },
      schedule: { title: "📅 மாநில அட்டவணை", desc: "ஆன்லைன் பதிவு மற்றும் களப்பணி தேதிகளை அறிய.", action: "தேதிகளை பார்க்க" },
      aiGuide: { title: "🤖 ஆத்யா AI வழிகாட்டி", desc: "எளிய கேள்விகளை கேட்டு குரல் வடிவில் பதில் பெற.", action: "ஆத்யாவிடம் பேச" },
      stepper: { title: "📝 எளிய தயாரிப்பு", desc: "4 எளிய படிகளில் குடும்ப விவரங்களை தயார் செய்ய.", action: "4 படிகளை தொடங்க" },
      safety: { title: "🔒 பாதுகாப்பு விதிகள்", desc: "மோசடிகளில் இருந்து தங்களை பாதுகாத்துக் கொள்ள.", action: "பாதுகாப்பு விதிகள்" },
      misinfo: { title: "🔍 தகவல் சரிபார்ப்பு", desc: "வந்த தகவலை சரிபார்த்து உண்மை நிலையை அறிய.", action: "தகவல் பார்க்க" },
      insights: { title: "📊 மக்கள் தொகை விவரம்", desc: "எளிய வரைபடங்கள் மூலம் விவரங்களை காண.", action: "வரைபடம் பார்க்க" }
    },
    phases: {
      tag: "இரு எளிய கட்டங்கள்",
      title: "சென்சஸ் 2027 புரிந்துகொள்ளுதல்",
      subtitle: "சென்சஸ் இரு கட்டங்களாக நடக்கிறது.",
      audioText: "சென்சஸ் 2027 புரிந்துகொள்ளுதல். முதல் கட்டம் வீடு பற்றியது, இரண்டாம் கட்டம் மக்கள் பற்றியது.",
      phase1: { tag: "🏠 கட்டம் 1", title: "வீட்டு வசதி விவரங்கள்", desc: "வீடு, குடிநீர், மின்சாரம் பற்றிய விவரங்கள்.", items: ["💧 குடிநீர் வசதி", "💡 மின்சாரம்", "🏠 அறைகள் எண்ணிக்கை", "🔥 சமையல் எரிவாயு"], audioText: "கட்டம் 1: வீட்டு வசதி விவரங்கள்." },
      phase2: { tag: "👥 கட்டம் 2", title: "மக்கள் தொகை கணக்கெடுப்பு", desc: "வயது, கல்வி, தொழில் பற்றிய விவரங்கள்.", items: ["🎂 வயது மற்றும் பிறந்த தேதி", "📚 கல்வி", "💼 தொழில்", "🗣️ தாய்மொழி"], audioText: "கட்டம் 2: மக்கள் தொகை கணக்கெடுப்பு." }
    },
    schedule: {
      tag: "மாநில தேதிகள்", title: "📅 உங்கள் சென்சஸ் அட்டவணை", subtitle: "உங்கள் மாநிலத்தை தேர்வு செய்து தேதிகளை காணவும்.",
      step1: "📍 படி 1: மாநிலம் தேர்வு செய்க", step2: "படி 2: தேதிகளை காண்க",
      selfEnumTitle: "📱 சுய பதிவு (ஆன்லைன்)", selfEnumDesc: "உங்கள் மொபைல் போன் மூலம் நீங்களே பதிவு செய்யலாம்.",
      surveyTitle: "🏠 கணக்கெடுப்பாளர் வருகை (வீட்டு ஆய்வு)", surveyDesc: "அங்கீகரிக்கப்பட்ட அதிகாரி உங்கள் வீட்டிற்கு வந்து சரிபார்ப்பார்.",
      disclaimer: "மாதிரி தகவல் — அதிகாரப்பூர்வ அறிவிப்புகளுக்கு censusindia.gov.in பார்க்கவும்.",
      listenBtn: "🔊 அட்டவணையை கேட்க"
    },
    aiGuide: {
      tag: "AI வழிகாட்டி", title: "🤖 ஆத்யா — உங்கள் சென்சஸ் வழிகாட்டி", subtitle: "எளிய கேள்விகளை கேட்டு உடனே பதில் பெறுங்கள்.",
      greeting: "வணக்கம்! நான் ஆத்யா. சென்சஸ் 2027 பற்றி உங்களுக்கு உதவ தயாராக உள்ளேன்.",
      quickChips: ["சென்சஸ் என்றால் என்ன?", "இரு கட்டங்கள் யாவை?", "தயாராவது எப்படி?", "எப்போது பங்கேற்பது?", "பாதுகாப்பாக இருப்பது எப்படி?"],
      placeholder: "உங்கள் கேள்வியை இங்கு எழுதவும்...", sendBtn: "கேளுங்கள்", resetBtn: "மீண்டும் தொடங்க", disclaimer: "இது வழிகாட்டுதலுக்கு மட்டுமே."
    },
    stepper: {
      tag: "4 எளிய படிகள்", title: "சென்சஸ் தயாரிப்பு", subtitle: "படிவம் நிரப்பும் முன் 4 படிகளை பின்பற்றவும்.",
      audioText: "நான்கு எளிய படிகளில் சென்சஸ் தயாரிப்பு செய்யவும்.",
      step1Title: "① அறிக", step1Desc: "இரு கட்டங்களை புரிந்து கொள்ளுங்கள்.",
      step2Title: "② தேதி காண்க", step2Desc: "உங்கள் மாநில தேதியை அறியவும்.",
      step3Title: "③ தகவலை தயாராக வைக்கவும்", step3Desc: "குடும்ப விவரங்களை குறித்து வைக்கவும்.",
      step4Title: "④ அரசு விதிகளை பின்பற்றவும்", step4Desc: "censusindia.gov.in ல் மட்டுமே பதிவு செய்க.",
      checklistItems: ["🏠 வீட்டு விவரங்கள்", "👨‍👩‍👧 குடும்பத்தினர் வயது", "📚 கல்வி விவரம்", "💼 தொழில் விவரம்"],
      prevBtn: "← முந்தைய", nextBtn: "அடுத்த படி →", readyBadge: "நீங்கள் தயாராகிவிட்டீர்கள்! 🎉"
    },
    safety: {
      tag: "பாதுகாப்பு", title: "🔒 பாதுகாப்பு மற்றும் ரகசியம்", subtitle: "மோசடி செய்திகளிடம் இருந்து பாதுகாப்பாக இருங்கள்.",
      audioText: "அரசு இணையதளங்களை மட்டுமே நம்புங்கள். வங்கி கடவுச்சொல் மற்றும் ஓடிபி யை யாருடனும் பகிர வேண்டாம்.",
      cards: [
        { title: "🔐 அரசு தளம் பயன்படுத்துக", desc: ".gov.in உள்ள தளங்களை மட்டுமே நம்பவும்.", audio: "அரசு தளத்தை மட்டுமே பயன்படுத்துங்கள்." },
        { title: "🚫 கடவுச்சொல் பகிர வேண்டாம்", desc: "வங்கி விவரங்களையோ OTP யோ சென்சஸில் கேட்க மாட்டார்கள்.", audio: "வங்கி விவரங்களை பகிர வேண்டாம்." },
        { title: "🔍 அடையாள அட்டை பார்க்கவும்", desc: "வீட்டிற்கு வரும் கணக்கெடுப்பாளரின் அரசு ஐடி கார்டை பார்க்கவும்.", audio: "அடையாள அட்டை பார்க்கவும்." },
        { title: "🛡️ தகவல் ரகசியமானது", desc: "சட்டப்படி உங்கள் தகவல் முழுமையாக பாதுகாக்கப்படும்.", audio: "தகவல் ரகசியமாக வைக்கப்படும்." }
      ]
    },
    misinfo: {
      tag: "சரிபார்ப்பு", title: "🔍 செய்தியின் உண்மைத்தன்மை", subtitle: "வந்த செய்தியை இங்கு இட்டு அது உண்மையா என சரிபார்க்கவும்.",
      placeholder: "செய்தியை இங்கு ஒட்டவும்...", checkBtn: "🔍 சரிபார்க்க", sampleTitle: "மாதிரி செய்தி:",
      safeBadge: "🟢 பாதுகாப்பானது", warnBadge: "🟠 எச்சரிக்கை தேவை", dangerBadge: "🔴 போலி / மோசடி", actionTitle: "நீங்கள் என்ன செய்ய வேண்டும்?",
      disclaimer: "அதிகாரப்பூர்வ தகவலுக்கு censusindia.gov.in பார்க்கவும்."
    },
    insights: {
      tag: "தரவு", title: "📊 மக்கள் தொகை விவரம்", subtitle: "மக்கள் தொகை மற்றும் கல்வி சதவீத விவரங்கள்.",
      sampleNotice: "மாதிரி தரவு", selectState: "மாநிலம் தேர்வு செய்க:", allIndia: "அனைத்திந்திய கண்ணோட்டம்",
      kpiPop: "👥 மொத்த மக்கள் தொகை", kpiLit: "📚 கல்வி அறிவு", kpiUrban: "🏙️ நகர்ப்புறம்", kpiRural: "🌾 கிராமப்புறம்", kpiSex: "⚖️ பாலின விகிதம்",
      barTitle: "📊 வயது வாரியாக விவரம்", pieTitle: "🥧 நகர் vs கிராமம்",
      audioText: "மக்கள் தொகை விவரங்களை எளிதாக அறியுங்கள்."
    },
    footer: { brand: "மக்கள்தொகை கணக்கெடுப்பு AI 🇮🇳", text: "அனைவருக்கும் எளிய வழிகாட்டி.", prototype: "⚠️ இது மாதிரி வடிவம் மட்டுமே." }
  },

  te: {
    brand: "జనగణన కనెక్ట్ AI",
    tagline: "జనగణన 2027 కోసం మీ సరళమైన మార్గదర్శి",
    listenBtn: "🔊 వినండి", stopBtn: "⏹️ ఆపండి", backHome: "← ప్రధాన డ్యాష్‌బోర్డ్‌కు వెళ్ళండి", openPageBtn: "ఈ పేజీ తెరవండి →", learnMoreBtn: "మరింత తెలుసుకోండి", hideBtn: "తక్కువ చూడండి",
    nav: { home: "డ్యాష్‌బోర్డ్", phases: "దశలు", schedule: "షెడ్యూల్", aiGuide: "ఆద్య AI", stepper: "సిద్ధం", safety: "భద్రత", misinfo: "నిజ నిర్ధారణ", insights: "డేటా", startGuide: "ప్రారంభించండి →" },
    hero: {
      title: "జనగణన 2027, ఇప్పుడు సులభం 🇮🇳", subtitle: "జనగణన ప్రక్రియను అర్థం చేసుకోండి. మీ తేదీలను చూడండి. వాయిస్ సాయం పొందండి.",
      startBtn: "▶️ AI గైడ్", scheduleBtn: "📅 షెడ్యూల్", listenBtn: "🔊 వాయిస్ వినండి",
      audioText: "జనగణన 2027 కి స్వాగతం. మీకు కావలసిన విభాగాన్ని ఎంచుకుని వాయిస్ ద్వారా తెలుసుకోండి.",
      dashboardHeading: "మీరు చూడాలనుకుంటున్న విభాగాన్ని ఎంచుకోండి:", dashboardSub: "పూర్తి పేజీ తెరవడానికి క్రింది కార్డుపై క్లిక్ చేయండి."
    },
    cards: {
      phases: { title: "🏠 జనగణన దశలు", desc: "ఇంటి వివరాలు మరియు కుటుంబ సభ్యుల లెక్క రెండు భాగాలు తెలుసుకోండి.", action: "దశలు చూడండి" },
      schedule: { title: "📅 రాష్ట్ర షెడ్యూల్", desc: "ఆన్‌లైన్ నమోదు మరియు అధికారి పర్యటన తేదీలను చూడండి.", action: "తేదీలు చూడండి" },
      aiGuide: { title: "🤖 ఆద్య AI గైడ్", desc: "సులభమైన ప్రశ్నలు అడగండి మరియు వాయిస్ సమాధానాలు వినండి.", action: "ఆద్యతో మాట్లాడండి" },
      stepper: { title: "📝 జనగణన తయారీ", desc: "4 సులభమైన దశలలో కుటుంబ సమాచారం సిద్ధం చేసుకోండి.", action: "4 దశలు ప్రారంభించండి" },
      safety: { title: "🔒 భద్రతా నియమాలు", desc: "మోసపూరిత సందేశాల నుండి మిమ్మల్ని మీరు రక్షించుకోండి.", action: "భద్రత చూడండి" },
      misinfo: { title: "🔍 సందేశాన్ని తనిఖీ చేయండి", desc: "వచ్చిన సందేశం నిజమో కాదో సులభంగా తెలుసుకోండి.", action: "తనిఖీ చేయండి" },
      insights: { title: "📊 డేటా చార్ట్‌లు", desc: "జనాభా మరియు విద్య వివరాలను చార్ట్‌ల ద్వారా చూడండి.", action: "చార్ట్‌లు చూడండి" }
    },
    phases: {
      tag: "రెండు దశలు", title: "జనగణన 2027 అర్థం చేసుకోవడం", subtitle: "జనగణన రెండు భాగాలుగా జరుగుతుంది.",
      audioText: "మొదటి దశ ఇంటి వివరాల కోసం, రెండవ దశ ప్రజల వివరాల కోసం.",
      phase1: { tag: "🏠 దశ 1", title: "ఇంటి సౌకర్యాల సమాచారం", desc: "ఇల్లు, నీరు, విద్యుత్ వివరాలు.", items: ["💧 తాగునీరు", "💡 విద్యుత్", "🏠 గదుల సంఖ్య", "🔥 వంట గ్యాస్"], audioText: "దశ 1: ఇంటి సౌకర్యాల సమాచారం." },
      phase2: { tag: "👥 దశ 2", title: "కుటుంబ సభ్యుల సమాచారం", desc: "వయస్సు, విద్య, ఉద్యోగ వివరాలు.", items: ["🎂 వయస్సు & పుట్టిన తేదీ", "📚 విద్య", "💼 పని / ఉద్యోగం", "🗣️ మాతృభాష"], audioText: "దశ 2: ప్రజల సమాచారం." }
    },
    schedule: {
      tag: "తేదీలు", title: "📅 మీ జనగణన షెడ్యూల్", subtitle: "మీ రాష్ట్రాన్ని ఎంచుకుని తేదీలను చూడండి.",
      step1: "📍 దశ 1: రాష్ట్రం ఎంచుకోండి", step2: "దశ 2: తేదీలు చూడండి",
      selfEnumTitle: "📱 స్వయంగా నమోదు (ఆన్‌లైన్)", selfEnumDesc: "మీ మొబైల్ ఫోన్ ద్వారా మీరే నమోదు చేసుకోవచ్చు.",
      surveyTitle: "🏠 అధికారి పర్యటన (ఇంటి సర్వే)", surveyDesc: "ప్రభుత్వ గుర్తింపు కార్డు ఉన్న అధికారి మీ ఇంటికి వస్తారు.",
      disclaimer: "నమూనా సమాచారం — అధికారిక సమాచారం కోసం censusindia.gov.in చూడండి.", listenBtn: "🔊 షెడ్యూల్ వినండి"
    },
    aiGuide: {
      tag: "AI సహాయకురాలు", title: "🤖 ఆద్య — మీ జనగణన సహాయకురాలు", subtitle: "ఏదైనా ప్రశ్న అడగండి, ఆద్య సమాధానం ఇస్తుంది.",
      greeting: "నమస్కారం! నేను ఆద్య. జనగణన 2027 గురించి మీకు సహాయం చేస్తాను.",
      quickChips: ["జనగణన అంటే ఏమిటి?", "రెండు దశలు ఏమిటి?", "ఎలా సిద్ధం కావాలి?", "ఎప్పుడు పాల్గొనాలి?", "సురక్షితంగా ఎలా ఉండాలి?"],
      placeholder: "మీ ప్రశ్న ఇక్కడ రాయండి...", sendBtn: "అడగండి", resetBtn: "మళ్ళీ ప్రారంభించండి", disclaimer: "ఇది సమాచారం కోసం మాత్రమే."
    },
    stepper: {
      tag: "4 దశలు", title: "జనగణన తయారీ", subtitle: "ఫారమ్ నింపే ముందు 4 దశలను పూర్తి చేయండి.",
      audioText: "నాలుగు సులభమైన దశలలో తయారవ్వండి.",
      step1Title: "① తెలుసుకోండి", step1Desc: "రెండు దశలను అర్థం చేసుకోండి.",
      step2Title: "② తేదీలు చూడండి", step2Desc: "మీ రాష్ట్ర తేదీలు తెలుసుకోండి.",
      step3Title: "③ సమాచారం సిద్ధం చేయండి", step3Desc: "కుటుంబ సభ్యుల వివరాలు గుర్తుంచుకోండి.",
      step4Title: "④ ప్రభుత్వ నియమాలు", step4Desc: "censusindia.gov.in లో మాత్రమే నింపండి.",
      checklistItems: ["🏠 ఇంటి వివరాలు", "👨‍👩‍👧 సభ్యుల వయస్సు", "📚 చదువు వివరాలు", "💼 ఉద్యోగం వివరాలు"],
      prevBtn: "← వెనుకకు", nextBtn: "తరువాతి దశ →", readyBadge: "మీరు సిద్ధంగా ఉన్నారు! 🎉"
    },
    safety: {
      tag: "భద్రత", title: "🔒 భద్రత మరియు గోప్యత", subtitle: "మోసాల నుండి సురక్షితంగా ఉండండి.",
      audioText: "బ్యాంక్ పాస్‌వర్డ్ మరియు ఓటీపీని ఎవరికీ ఇవ్వవద్దు.",
      cards: [
        { title: "🔐 ప్రభుత్వ వెబ్‌సైట్ వాడండి", desc: ".gov.in ఉన్న వెబ్‌సైట్‌లను మాత్రమే నమ్మండి.", audio: "ప్రభుత్వ వెబ్‌సైట్‌ను మాత్రమే వాడండి." },
        { title: "🚫 పాస్‌వర్డ్ ఇవ్వవద్దు", desc: "జనగణనలో బ్యాంక్ వివరాలు అడగరు.", audio: "బ్యాంక్ పాస్‌వర్డ్ ఇవ్వవద్దు." },
        { title: "🔍 ఐడీ కార్డు చూడండి", desc: "ఇంటికి వచ్చే అధికారి ఐడీ కార్డును తప్పక చూడండి.", audio: "ఐడీ కార్డు చూడండి." },
        { title: "🛡️ సమాచారం సురక్షితం", desc: "చట్టం ప్రకారం మీ సమాచారం గోప్యంగా ఉంటుంది.", audio: "మీ సమాచారం సురక్షితం." }
      ]
    },
    misinfo: {
      tag: "నిజ నిర్ధారణ", title: "🔍 సందేశాన్ని తనిఖీ చేయండి", subtitle: "సందేశం నిజమో కాదో తెలుసుకోవడానికి ఇక్కడ పేస్ట్ చేయండి.",
      placeholder: "సందేశాన్ని ఇక్కడ పేస్ట్ చేయండి...", checkBtn: "🔍 తనిఖీ చేయండి", sampleTitle: "నమూనా సందేశం:",
      safeBadge: "🟢 సురక్షితం", warnBadge: "🟠 జాగ్రత్త అవసరం", dangerBadge: "🔴 మోసం / ఫేక్", actionTitle: "మీరు ఏమి చేయాలి?",
      disclaimer: "అధికారిక సమాచారం కోసం censusindia.gov.in చూడండి."
    },
    insights: {
      tag: "డేటా", title: "📊 జనాభా వివరాలు", subtitle: "జనాభా మరియు విద్య వివరాల చార్ట్‌లు.",
      sampleNotice: "నమూనా డేటా", selectState: "రాష్ట్రం ఎంచుకోండి:", allIndia: "భారతదేశ మొత్తం వివరాలు",
      kpiPop: "👥 మొత్తం జనాభా", kpiLit: "📚 అక్షరాస్యత", kpiUrban: "🏙️ పట్టణ జనాభా", kpiRural: "🌾 గ్రామీణ జనాభా", kpiSex: "⚖️ లింగ నిష్పత్తి",
      barTitle: "📊 వయస్సు ప్రకారం జనాభా", pieTitle: "🥧 నగరం vs గ్రామం",
      audioText: "జనాభా వివరాలను సులభంగా అర్థం చేసుకోండి."
    },
    footer: { brand: "జనగణన కనెక్ట్ AI 🇮🇳", text: "అందరికీ సులభమైన జనగణన మార్గదర్శి.", prototype: "⚠️ ఇది డెమో ప్రోటోటైప్ మాత్రమే." }
  },

  bn: {
    brand: "জনগণনা কানেক্ট AI",
    tagline: "জনগণনা ২০২৭ এর সহজ সহায়িকা",
    listenBtn: "🔊 শুনুন", stopBtn: "⏹️ থামুন", backHome: "← মূল ড্যাশবোর্ডে ফিরুন", openPageBtn: "এই পৃষ্ঠা খুলুন →", learnMoreBtn: "আরও জানুন", hideBtn: "কম দেখুন",
    nav: { home: "ড্যাশবোর্ড", phases: "পর্যায়", schedule: "সময়সূচী", aiGuide: "আদ্যা AI", stepper: "প্রস্তুতি", safety: "সুরক্ষা", misinfo: "তথ্য যাচাই", insights: "উপাত্ত", startGuide: "শুরু করুন →" },
    hero: {
      title: "জনগণনা ২০২৭, এখন অত্যন্ত সহজ 🇮🇳", subtitle: "জনগণনা পদ্ধতি বুঝুন। সময়সূচী দেখুন। বাংলায় সহজ ভয়েস সহায়তা পান।",
      startBtn: "▶️ AI গাইড", scheduleBtn: "📅 সময়সূচী", listenBtn: "🔊 শুনে জানুন",
      audioText: "জনগণনা ২০২৭ এ স্বাগতম। আপনার পছন্দের বিভাগটি বেছে নিন এবং ভয়েস সহায়তায় জেনে নিন।",
      dashboardHeading: "আপনি কী দেখতে চান তা নির্বাচন করুন:", dashboardSub: "সম্পূর্ণ পৃষ্ঠা খুলতে নিচের কার্ডে ক্লিক করুন।"
    },
    cards: {
      phases: { title: "🏠 জনগণনার পর্যায়", desc: "বাড়ি ও পরিবারের গণনার দুটি পর্যায় সহজে জানুন।", action: "পর্যায় দেখুন" },
      schedule: { title: "📅 রাজ্য সময়সূচী", desc: "অনলাইন ফর্ম ও কর্মী পরিদর্শনের তারিখ দেখুন।", action: "তারিখ দেখুন" },
      aiGuide: { title: "🤖 আদ্যা AI গাইড", desc: "যেকোনো প্রশ্ন বাংলায় জিজ্ঞাসা করুন এবং ভয়েসে উত্তর শুনুন।", action: "আদ্যার সাথে কথা বলুন" },
      stepper: { title: "📝 জনগণনার প্রস্তুতি", desc: "৪টি সহজ ধাপে পরিবারের তথ্য প্রস্তুত করুন।", action: "৪টি ধাপ শুরু করুন" },
      safety: { title: "🔒 সুরক্ষা নিয়মাবলী", desc: "ভুয়ো মেসেজ ও জালিয়াতি থেকে নিজেকে সুরক্ষিত রাখুন।", action: "সুরক্ষা নিয়ম দেখুন" },
      misinfo: { title: "🔍 মেসেজ যাচাই", desc: "পাওয়া মেসেজটি সত্য নাকি ভুয়ো তা পরীক্ষা করুন।", action: "যাচাই করুন" },
      insights: { title: "📊 উপাত্ত চার্ট", desc: "জনসংখ্যা ও শিক্ষার সহজ চার্ট দেখুন।", action: "চার্ট দেখুন" }
    },
    phases: {
      tag: "দুটি পর্যায়", title: "জনগণনা ২০২৭ বোঝা", subtitle: "জনগণনা দুটি সহজ ভাগে অনুষ্ঠিত হয়।",
      audioText: "প্রথম পর্যায় বাড়ির তথ্যের জন্য, দ্বিতীয় পর্যায় পরিবারের সদস্যদের গণনার জন্য।",
      phase1: { tag: "🏠 পর্যায় ১", title: "বাড়ি ও সুযোগ-সুবিধা", desc: "বাড়ি, ঘর, পানীয় জল ও বিদ্যুতের তথ্য।", items: ["💧 পানীয় জল", "💡 বিদ্যুৎ", "🏠 ঘরের সংখ্যা", "🔥 রান্নার গ্যাস"], audioText: "পর্যায় ১: বাড়ি ও সুযোগ-সুবিধা।" },
      phase2: { tag: "👥 পর্যায় ২", title: "পরিবারের সদস্যদের তথ্য", desc: "বয়স, শিক্ষা ও কাজের তথ্য।", items: ["🎂 বয়স ও জন্মতারিখ", "📚 শিক্ষা", "💼 পেশা / কাজ", "🗣️ মাতৃভাষা"], audioText: "পর্যায় ২: পরিবারের সদস্যদের তথ্য।" }
    },
    schedule: {
      tag: "তারিখ", title: "📅 আপনার জনগণনা সময়সূচী", subtitle: "আপনার রাজ্য নির্বাচন করুন এবং তারিখ দেখুন।",
      step1: "📍 ধাপ ১: রাজ্য নির্বাচন করুন", step2: "ধাপ ২: নিচে তারিখ দেখুন",
      selfEnumTitle: "📱 নিজে অনলাইনে পূরণ (মোবাইল)", selfEnumDesc: "আপনি আপনার মোবাইল থেকে সরকারি পোর্টালে ফর্ম পূরণ করতে পারেন।",
      surveyTitle: "🏠 কর্মী পরিদর্শন (বাড়ি বাড়ি সমীক্ষা)", surveyDesc: "সরকারি পরিচয়পত্র সহ কর্মী বাড়ি এসে তথ্য যাচাই করবেন।",
      disclaimer: "নমুনা তথ্য — অফিসিয়াল তথ্যের জন্য censusindia.gov.in দেখুন।", listenBtn: "🔊 সময়সূচী শুনুন"
    },
    aiGuide: {
      tag: "AI সহায়িকা", title: "🤖 আদ্যা — আপনার জনগণনা সহায়িকা", subtitle: "যেকোনো প্রশ্ন করুন, আদ্যা আপনাকে সাহায্য করবে।",
      greeting: "নমস্কার! আমি আদ্যা। জনগণনা ২০২৭ বুঝতে আমি আপনাকে সাহায্য করব।",
      quickChips: ["জনগণনা কী?", "দুটি পর্যায় কী?", "প্রস্তুতি কীভাবে নেব?", "কখন অংশ নেব?", "সুরক্ষিত কীভাবে থাকব?"],
      placeholder: "আপনার প্রশ্ন এখানে লিখুন...", sendBtn: "জিজ্ঞাসা করুন", resetBtn: "পুনরায় শুরু", disclaimer: "এটি শুধুমাত্র তথ্যের জন্য।"
    },
    stepper: {
      tag: "৪টি ধাপ", title: "জনগণনার প্রস্তুতি", subtitle: "ফর্ম পূরণের আগে ৪টি ধাপ সম্পূর্ণ করুন।",
      audioText: "চারটি সহজ ধাপে জনগণনার প্রস্তুতি নিন।",
      step1Title: "① বুঝুন", step1Desc: "দুটি পর্যায় জানুন।",
      step2Title: "② তারিখ দেখুন", step2Desc: "আপনার রাজ্যের তারিখ দেখুন।",
      step3Title: "③ তথ্য তৈরি রাখুন", step3Desc: "পরিবারের সদস্যদের তথ্য মনে রাখুন।",
      step4Title: "④ সরকারি নিয়ম", step4Desc: "শুধুমাত্র censusindia.gov.in এ পূরণ করুন।",
      checklistItems: ["🏠 বাড়ির বিবরণ", "👨‍👩‍👧 সদস্যদের বয়স", "📚 শিক্ষার তথ্য", "💼 কাজের বিবরণ"],
      prevBtn: "← পূর্ববর্তী", nextBtn: "পরবর্তী ধাপ →", readyBadge: "আপনি প্রস্তুত! 🎉"
    },
    safety: {
      tag: "সুরক্ষা", title: "🔒 সুরক্ষা ও গোপনীয়তা", subtitle: "ভুয়ো মেসেজ থেকে সতর্ক থাকুন।",
      audioText: "ব্যাংক পাসওয়ার্ড ও ওটিপি কাউকে দেবেন না।",
      cards: [
        { title: "🔐 সরকারি পোর্টাল ব্যবহার করুন", desc: "শুধুমাত্র .gov.in থাকা ওয়েবসাইটে বিশ্বাস করুন।", audio: "সরকারি ওয়েবসাইট ব্যবহার করুন।" },
        { title: "🚫 পাসওয়ার্ড দেবেন না", desc: "জনগণনায় ব্যাংক পাসওয়ার্ড চাওয়া হয় না।", audio: "পাসওয়ার্ড দেবেন না।" },
        { title: "🔍 আইডি কার্ড দেখুন", desc: "কর্মীর সরকারি আইডি কার্ড অবশ্যই দেখুন।", audio: "আইডি কার্ড দেখুন।" },
        { title: "🛡️ তথ্য সুরক্ষিত", desc: "আইন অনুযায়ী আপনার তথ্য সম্পূর্ণ গোপন রাখা হয়।", audio: "আপনার তথ্য সুরক্ষিত।" }
      ]
    },
    misinfo: {
      tag: "যাচাইকরণ", title: "🔍 মেসেজ যাচাই করুন", subtitle: "মেসেজটি সত্য নাকি সন্দেহজনক তা জানতে এখানে পেস্ট করুন।",
      placeholder: "মেসেজটি এখানে পেস্ট করুন...", checkBtn: "🔍 যাচাই করুন", sampleTitle: "নমুনা মেসেজ:",
      safeBadge: "🟢 নিরাপদ", warnBadge: "🟠 সতর্ক থাকুন", dangerBadge: "🔴 ভুয়ো / জালিয়াতি", actionTitle: "আপনার কী করা উচিত?",
      disclaimer: "অফিসিয়াল তথ্যের জন্য censusindia.gov.in দেখুন।"
    },
    insights: {
      tag: "উপাত্ত", title: "📊 জনসংখ্যা তথ্য", subtitle: "জনসংখ্যা ও শিক্ষার সহজ বিবরণ।",
      sampleNotice: "নমুনা তথ্য", selectState: "রাজ্য বেছে নিন:", allIndia: "সমগ্র ভারত বিবরণ",
      kpiPop: "👥 মোট জনসংখ্যা", kpiLit: "📚 শিক্ষার হার", kpiUrban: "🏙️ শহুরে জনসংখ্যা", kpiRural: "🌾 গ্রামীণ জনসংখ্যা", kpiSex: "⚖️ লিঙ্গ অনুপাত",
      barTitle: "📊 বয়স অনুযায়ী জনসংখ্যা", pieTitle: "🥧 শহর বনাম গ্রাম",
      audioText: "জনসংখ্যার তথ্য সহজে জেনে নিন।"
    },
    footer: { brand: "জনগণনা কানেক্ট AI 🇮🇳", text: "সকলের জন্য সহজ জনগণনা সহায়িকা।", prototype: "⚠️ এটি ডেমো প্রোটোটাইপ।" }
  },

  kn: {
    brand: "ಜನಗಣತಿ ಕನೆಕ್ಟ್ AI",
    tagline: "ಜನಗಣತಿ 2027 ಗಾಗಿ ನಿಮ್ಮ ಸರಳ ಮಾರ್ಗದರ್ಶಿ",
    listenBtn: "🔊 ಕೇಳಿ", stopBtn: "⏹️ ನಿಲ್ಲಿಸಿ", backHome: "← ಮುಖ್ಯ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ", openPageBtn: "ಈ ಪುಟ ತೆರೆಯಿರಿ →", learnMoreBtn: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ", hideBtn: "ಕಡಿಮೆ ನೋಡಿ",
    nav: { home: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", phases: "ಹಂತಗಳು", schedule: "ವೇಳಾಪಟ್ಟಿ", aiGuide: "ಆದ್ಯ AI", stepper: "ಸಿದ್ಧತೆ", safety: "ಸುರಕ್ಷತೆ", misinfo: "ಸತ್ಯ ಪರಿಶೀಲನೆ", insights: "ಮಾಹಿತಿ", startGuide: "ಪ್ರಾರಂಭಿಸಿ →" },
    hero: {
      title: "ಜನಗಣತಿ 2027, ಈಗ ಸುಲಭ 🇮🇳", subtitle: "ಜನಗಣತಿ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ. ದಿನಾಂಕಗಳನ್ನು ನೋಡಿ. ಧ್ವನಿ ನೆರವು ಪಡೆಯಿರಿ.",
      startBtn: "▶️ AI ಮಾರ್ಗದರ್ಶಿ", scheduleBtn: "📅 ವೇಳಾಪಟ್ಟಿ", listenBtn: "🔊 ಧ್ವನಿ ಕೇಳಿ",
      audioText: "ಜನಗಣತಿ 2027 ಗೆ ಸ್ವಾಗತ. ನಿಮಗೆ ಬೇಕಾದ ವಿಭಾಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ ಧ್ವನಿಯ ಮೂಲಕ ತಿಳಿಯಿರಿ.",
      dashboardHeading: "ನೀವು ನೋಡಲು ಬಯಸುವ ವಿಭಾಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ:", dashboardSub: "ಪೂರ್ಣ ಪುಟವನ್ನು ತೆರೆಯಲು ಕೆಳಗಿನ ಕಾರ್ಡ್ ಕ್ಲಿಕ್ ಮಾಡಿ."
    },
    cards: {
      phases: { title: "🏠 ಜನಗಣತಿ ಹಂತಗಳು", desc: "ಮನೆ ವಿವರಗಳು ಮತ್ತು ಕುಟುಂಬ ಸದಸ್ಯರ ಗಣತಿ ಎರಡು ಭಾಗಗಳನ್ನು ತಿಳಿಯಿರಿ.", action: "ಹಂತಗಳನ್ನು ನೋಡಿ" },
      schedule: { title: "📅 ರಾಜ್ಯ ವೇಳಾಪಟ್ಟಿ", desc: "ಆನ್‌ಲೈನ್ ನೋಂದಣಿ ಮತ್ತು ಅಧಿಕಾರಿ ಭೇಟಿಯ ದಿನಾಂಕಗಳನ್ನು ನೋಡಿ.", action: "ದಿನಾಂಕ ನೋಡಿ" },
      aiGuide: { title: "🤖 ಆದ್ಯ AI ಮಾರ್ಗದರ್ಶಿ", desc: "ಸರಳ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ ಮತ್ತು ಧ್ವನಿ ರೂಪದಲ್ಲಿ ಉತ್ತರ ಪಡೆಯಿರಿ.", action: "ಆದ್ಯ ಜತೆ ಮಾತನಾಡಿ" },
      stepper: { title: "📝 ಜನಗಣತಿ ಸಿದ್ಧತೆ", desc: "4 ಸರಳ ಹಂತಗಳಲ್ಲಿ ಕುಟುಂಬದ ಮಾಹಿತಿಯನ್ನು ಸಿದ್ಧಪಡಿಸಿ.", action: "4 ಹಂತ ಪ್ರಾರಂಭಿಸಿ" },
      safety: { title: "🔒 ಸುರಕ್ಷತಾ ನಿಯಮಗಳು", desc: "ನಕಲಿ ಕರೆಗಳು ಮತ್ತು ವಂಚನೆಗಳಿಂದ ಸುರಕ್ಷಿತವಾಗಿರಲು ತಿಳಿಯಿರಿ.", action: "ಸುರಕ್ಷತೆ ನೋಡಿ" },
      misinfo: { title: "🔍 ಸಂದೇಶ ಪರಿಶೀಲನೆ", desc: "ಬಂದ ಸಂದೇಶ ನಿಜವೋ ಸುಳ್ಳೋ ಎಂದು ಸುಲಭವಾಗಿ ತಿಳಿಯಿರಿ.", action: "ಪರಿಶೀಲಿಸಿ" },
      insights: { title: "📊 ಮಾಹಿತಿ ಚಾರ್ಟ್", desc: "ಜನಸಂಖ್ಯೆ ಮತ್ತು ಶಿಕ್ಷಣದ ಸರಳ ಚಾರ್ಟ್‌ಗಳನ್ನು ನೋಡಿ.", action: "ಚಾರ್ಟ್ ನೋಡಿ" }
    },
    phases: {
      tag: "ಎರಡು ಹಂತಗಳು", title: "ಜನಗಣತಿ 2027 ತಿಳಿಯಿರಿ", subtitle: "ಜನಗಣತಿ ಎರಡು ಸರಳ ಭಾಗಗಳಲ್ಲಿ ನಡೆಯುತ್ತದೆ.",
      audioText: "ಮೊದಲ ಹಂತ ಮನೆ ವಿವರಗಳಿಗಾಗಿ, ಎರಡನೇ ಹಂತ ಜನರ ವಿವರಗಳಿಗಾಗಿ.",
      phase1: { tag: "🏠 ಹಂತ 1", title: "ಮನೆ ಮತ್ತು ಸೌಲಭ್ಯಗಳ ಮಾಹಿತಿ", desc: "ಮನೆ, ನೀರು, ವಿದ್ಯುತ್ ವಿವರಗಳು.", items: ["💧 ಕುಡಿಯುವ ನೀರು", "💡 ವಿದ್ಯುತ್", "🏠 ಕೊಠಡಿಗಳ ಸಂಖ್ಯೆ", "🔥 ಅಡುಗೆ ಅನಿಲ"], audioText: "ಹಂತ 1: ಮನೆ ಮತ್ತು ಸೌಲಭ್ಯಗಳ ಮಾಹಿತಿ." },
      phase2: { tag: "👥 ಹಂತ 2", title: "ಜನರ ಮಾಹಿತಿ", desc: "ವಯಸ್ಸು, ಶಿಕ್ಷಣ, ಉದ್ಯೋಗ ವಿವರಗಳು.", items: ["🎂 ವಯಸ್ಸು & ಹುಟ್ಟಿದ ದಿನಾಂಕ", "📚 ಶಿಕ್ಷಣ", "💼 ಕೆಲಸ / ಉದ್ಯೋಗ", "🗣️ ಮಾತೃಭಾಷೆ"], audioText: "ಹಂತ 2: ಜನರ ಮಾಹಿತಿ." }
    },
    schedule: {
      tag: "ದಿನಾಂಕ", title: "📅 ನಿಮ್ಮ ಜನಗಣತಿ ವೇಳಾಪಟ್ಟಿ", subtitle: "ನಿಮ್ಮ ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ ದಿನಾಂಕಗಳನ್ನು ನೋಡಿ.",
      step1: "📍 ಹಂತ 1: ರಾಜ್ಯ ಆಯ್ಕೆಮಾಡಿ", step2: "ಹಂತ 2: ದಿನಾಂಕಗಳನ್ನು ನೋಡಿ",
      selfEnumTitle: "📱 ಸ್ವತಃ ನೋಂದಣಿ (ಆನ್‌ಲೈನ್)", selfEnumDesc: "ನಿಮ್ಮ ಮೊಬೈಲ್ ಮೂಲಕ ನೀವೇ ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಬಹುದು.",
      surveyTitle: "🏠 ಅಧಿಕಾರಿ ಭೇಟಿ (ಮನೆ ಸಮೀಕ್ಷೆ)", surveyDesc: "ಸರ್ಕಾರಿ ಗುರುತಿನ ಚೀಟಿ ಹೊಂದಿರುವ ಅಧಿಕಾರಿ ಮನೆಗೆ ಬಂದು ಪರಿಶೀಲಿಸುತ್ತಾರೆ.",
      disclaimer: "ಮಾದರಿ ಮಾಹಿತಿ — ಅಧಿಕೃತ ಮಾಹಿತಿಗಾಗಿ censusindia.gov.in ನೋಡಿ.", listenBtn: "🔊 ವೇಳಾಪಟ್ಟಿ ಕೇಳಿ"
    },
    aiGuide: {
      tag: "AI ಸಹಾಯಕ", title: "🤖 ಆದ್ಯ — ನಿಮ್ಮ ಜನಗಣತಿ ಮಾರ್ಗದರ್ಶಿ", subtitle: "ಯಾವುದೇ ಪ್ರಶ್ನೆ ಕೇಳಿ, ಆದ್ಯ ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      greeting: "ನಮಸ್ಕಾರ! ನಾನು ಆದ್ಯ. ಜನಗಣತಿ 2027 ಬಗ್ಗೆ ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತೇನೆ.",
      quickChips: ["ಜನಗಣತಿ ಎಂದರೇನು?", "ಎರಡು ಹಂತಗಳು ಯಾವುವು?", "ಸಿದ್ಧತೆ ಹೇಗೆ?", "ಯಾವಾಗ ಭಾಗವಹಿಸಬೇಕು?", "ಸುರಕ್ಷಿತವಾಗಿರುವುದು ಹೇಗೆ?"],
      placeholder: "ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಇಲ್ಲಿ ಬರೆಯಿರಿ...", sendBtn: "ಕೇಳಿ", resetBtn: "ಮತ್ತೆ ಪ್ರಾರಂಭಿಸಿ", disclaimer: "ಇದು ಮಾಹಿತಿಗಾಗಿ ಮಾತ್ರ."
    },
    stepper: {
      tag: "4 ಹಂತಗಳು", title: "ಜನಗಣತಿ ಸಿದ್ಧತೆ", subtitle: "ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡುವ ಮುನ್ನ 4 ಹಂತಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ.",
      audioText: "ನಾಲ್ಕು ಸರಳ ಹಂತಗಳಲ್ಲಿ ಸಿದ್ಧರಾಗಿ.",
      step1Title: "① ತಿಳಿಯಿರಿ", step1Desc: "ಎರಡು ಹಂತಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",
      step2Title: "② ದಿನಾಂಕ ನೋಡಿ", step2Desc: "ನಿಮ್ಮ ರಾಜ್ಯದ ದಿನಾಂಕ ತಿಳಿಯಿರಿ.",
      step3Title: "③ ಮಾಹಿತಿ ಸಿದ್ಧಪಡಿಸಿ", step3Desc: "ಕುಟುಂಬದ ವಿವರಗಳನ್ನು ನೆನಪಿಡಿ.",
      step4Title: "④ ಸರ್ಕಾರಿ ನಿಯಮಗಳು", step4Desc: "censusindia.gov.in ನಲ್ಲಿ ಮಾತ್ರ ಭರ್ತಿ ಮಾಡಿ.",
      checklistItems: ["🏠 ಮನೆ ವಿವರಗಳು", "👨‍👩‍👧 ಕುಟುಂಬ ಸದಸ್ಯರ ವಯಸ್ಸು", "📚 ಶಿಕ್ಷಣ ವಿವರ", "💼 ಉದ್ಯೋಗ ವಿವರ"],
      prevBtn: "← ಹಿಂದಿನ", nextBtn: "ಮುಂದಿನ ಹಂತ →", readyBadge: "ನೀವು ಸಿದ್ಧರಾಗಿದ್ದೀರಿ! 🎉"
    },
    safety: {
      tag: "ಸುರಕ್ಷತೆ", title: "🔒 ಸುರಕ್ಷತೆ ಮತ್ತು ಗೌಪ್ಯತೆ", subtitle: "ವಂಚನೆಗಳಿಂದ ಸುರಕ್ಷಿತವಾಗಿರಿ.",
      audioText: "ಬ್ಯಾಂಕ್ ಪಾಸ್‌ವರ್ಡ್ ಮತ್ತು ಓಟಿಪಿಯನ್ನು ಯಾರಿಗೂ ನೀಡಬೇಡಿ.",
      cards: [
        { title: "🔐 ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್ ಬಳಸಿ", desc: ".gov.in ಇರುವ ವೆಬ್‌ಸೈಟ್‌ಗಳನ್ನು ಮಾತ್ರ ನಂಬಿ.", audio: "ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್ ಬಳಸಿ." },
        { title: "🚫 ಪಾಸ್‌ವರ್ಡ್ ನೀಡಬೇಡಿ", desc: "ಜನಗಣತಿಯಲ್ಲಿ ಬ್ಯಾಂಕ್ ವಿವರಗಳನ್ನು ಕೇಳುವುದಿಲ್ಲ.", audio: "ಪಾಸ್‌ವರ್ಡ್ ನೀಡಬೇಡಿ." },
        { title: "🔍 ಐಡಿ ಕಾರ್ಡ್ ನೋಡಿ", desc: "ಮನೆಗೆ ಬರುವ ಅಧಿಕಾರಿಯ ಐಡಿ ಕಾರ್ಡ್ ಖಂಡಿತ ನೋಡಿ.", audio: "ಐಡಿ ಕಾರ್ಡ್ ನೋಡಿ." },
        { title: "🛡️ ಮಾಹಿತಿ ಸುರಕ್ಷಿತ", desc: "ಕಾನೂನಿನ ಪ್ರಕಾರ ನಿಮ್ಮ ಮಾಹಿತಿ ರಹಸ್ಯವಾಗಿರುತ್ತದೆ.", audio: "ಮಾಹಿತಿ ಸುರಕ್ಷಿತ." }
      ]
    },
    misinfo: {
      tag: "ಪರಿಶೀಲನೆ", title: "🔍 ಸಂದೇಶ ಪರಿಶೀಲಿಸಿ", subtitle: "ಸಂದೇಶ ನಿಜವೋ ಸುಳ್ಳೋ ಎಂದು ತಿಳಿಯಲು ಇಲ್ಲಿ ಪೇಸ್ಟ್ ಮಾಡಿ.",
      placeholder: "ಸಂದೇಶವನ್ನು ಇಲ್ಲಿ ಪೇಸ್ಟ್ ಮಾಡಿ...", checkBtn: "🔍 ಪರಿಶೀಲಿಸಿ", sampleTitle: "ಮಾದರಿ ಸಂದೇಶ:",
      safeBadge: "🟢 ಸುರಕ್ಷಿತ", warnBadge: "🟠 ಎಚ್ಚರಿಕೆ ಅಗತ್ಯ", dangerBadge: "🔴 ವಂಚನೆ / ನಕಲಿ", actionTitle: "ನೀವು ಏನು ಮಾಡಬೇಕು?",
      disclaimer: "ಅಧಿಕೃತ ಮಾಹಿತಿಗಾಗಿ censusindia.gov.in ನೋಡಿ."
    },
    insights: {
      tag: "ಮಾಹಿತಿ", title: "📊 ಜನಸಂಖ್ಯೆ ಮಾಹಿತಿ", subtitle: "ಜನಸಂಖ್ಯೆ ಮತ್ತು ಶಿಕ್ಷಣದ ಸರಳ ಚಾರ್ಟ್‌ಗಳು.",
      sampleNotice: "ಮಾದರಿ ಮಾಹಿತಿ", selectState: "ರಾಜ್ಯ ಆಯ್ಕೆಮಾಡಿ:", allIndia: "ಸಮಗ್ರ ಭಾರತ ಮಾಹಿತಿ",
      kpiPop: "👥 ಒಟ್ಟು ಜನಸಂಖ್ಯೆ", kpiLit: "📚 ಸಾಕ್ಷರತೆ", kpiUrban: "🏙️ ನಗರ ಜನಸಂಖ್ಯೆ", kpiRural: "🌾 ಗ್ರಾಮೀಣ ಜನಸಂಖ್ಯೆ", kpiSex: "⚖️ ಲಿಂಗ ಅನುಪಾತ",
      barTitle: "📊 ವಯಸ್ಸಿನ ಪ್ರಕಾರ ಜನಸಂಖ್ಯೆ", pieTitle: "🥧 ನಗರ vs ಗ್ರಾಮ",
      audioText: "ಜನಸಂಖ್ಯೆ ಮಾಹಿತಿಯನ್ನು ಸರಳವಾಗಿ ತಿಳಿಯಿರಿ."
    },
    footer: { brand: "ಜನಗಣತಿ ಕನೆಕ್ಟ್ AI 🇮🇳", text: "ಎಲ್ಲರಿಗೂ ಸರಳ ಜನಗಣತಿ ಮಾರ್ಗದರ್ಶಿ.", prototype: "⚠️ ಇದು ಡೆಮೊ ಮಾದರಿ ಮಾತ್ರ." }
  }
};
