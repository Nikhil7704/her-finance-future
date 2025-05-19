
interface TranslationObject {
  [key: string]: string | TranslationObject;
}

interface Translations {
  [language: string]: TranslationObject;
}

export const translations: Translations = {
  english: {
    navbar: {
      financing: "Financing",
      credit: "Credit Evaluation",
      academy: "Academy",
      about: "About",
      signin: "Sign In",
      getStarted: "Get Started"
    },
    hero: {
      title: "Financial freedom",
      subtitle: "for every woman",
      description: "EmpowerHer Finance is dismantling barriers for women entrepreneurs through alternative financing, AI-powered credit evaluation, and practical financial education.",
      cta: "Start Your Journey",
      learnMore: "Learn More"
    },
    stats: {
      title: "Our Impact",
      description: "Empowering women entrepreneurs globally through financial inclusion and support."
    },
    features: {
      title: "Our Three Pillars",
      description: "EmpowerHer Finance is built on three interconnected pillars designed to holistically address the unique challenges faced by women entrepreneurs.",
      financing: {
        title: "Alternative Financing Hub",
        description: "Access flexible, non-traditional funding options tailored to your unique business needs."
      },
      credit: {
        title: "AI-Powered Credit Evaluation",
        description: "Replace biased credit assessments with our equitable, data-driven scoring system."
      },
      academy: {
        title: "Financial Literacy Academy",
        description: "Equip yourself with practical skills to manage finances and scale your business."
      }
    },
    testimonials: {
      title: "Success Stories",
      description: "Meet the women entrepreneurs who have transformed their businesses with EmpowerHer Finance."
    },
    cta: {
      title: "Ready to transform your financial future?",
      description: "Join thousands of women entrepreneurs who are accessing the capital, knowledge, and community they need to thrive.",
      financing: "Apply for Financing",
      academy: "Explore the Academy"
    },
    academy: {
      title: "EmpowerHer",
      subtitle: "Academy",
      description: "Designed specifically for women entrepreneurs, our courses will help you build the financial knowledge and skills needed to succeed in business.",
      exploreCourses: "Explore Courses",
      beginnerCourses: "Beginner Courses",
      beginnerDescription: "Start your journey with our foundational courses designed for new entrepreneurs.",
      advancedCourses: "Advanced Courses",
      advancedDescription: "Take your business to the next level with our specialized advanced courses.",
      mentorship: {
        title: "1:1 Mentorship",
        description: "Connect with experienced women entrepreneurs who have been in your shoes. Our mentorship program pairs you with business leaders who understand your unique challenges.",
        feature1: "Personalized guidance tailored to your business needs",
        feature2: "Monthly 1:1 sessions with your dedicated mentor",
        feature3: "Access to our exclusive network of successful entrepreneurs",
        cta: "Apply for Mentorship"
      },
      readyToGrow: "Ready to grow your financial knowledge?",
      joinThousands: "Join thousands of women entrepreneurs who have transformed their businesses through our academy.",
      createAccount: "Create Your Free Account"
    },
    chatbot: {
      title: "Finance Assistant",
      placeholder: "Ask me anything about financing or our services...",
      send: "Send",
      startMessage: "Hello! I'm your EmpowerHer Finance assistant. How can I help you today?"
    }
  },
  hindi: {
    navbar: {
      financing: "वित्तपोषण",
      credit: "क्रेडिट मूल्यांकन",
      academy: "अकादमी",
      about: "हमारे बारे में",
      signin: "साइन इन करें",
      getStarted: "शुरू करें"
    },
    hero: {
      title: "वित्तीय स्वतंत्रता",
      subtitle: "हर महिला के लिए",
      description: "एम्पावरहर फाइनेंस वैकल्पिक वित्तपोषण, AI-संचालित क्रेडिट मूल्यांकन और व्यावहारिक वित्तीय शिक्षा के माध्यम से महिला उद्यमियों के लिए बाधाओं को दूर कर रहा है।",
      cta: "अपनी यात्रा शुरू करें",
      learnMore: "और जानें"
    },
    stats: {
      title: "हमारा प्रभाव",
      description: "वित्तीय समावेश और समर्थन के माध्यम से दुनिया भर में महिला उद्यमियों को सशक्त बनाना।"
    },
    features: {
      title: "हमारे तीन स्तंभ",
      description: "एम्पावरहर फाइनेंस तीन परस्पर जुड़े स्तंभों पर बनाया गया है जो महिला उद्यमियों के सामने आने वाली अनूठी चुनौतियों का समग्र रूप से समाधान करता है।",
      financing: {
        title: "वैकल्पिक वित्तपोषण केंद्र",
        description: "अपनी अनूठी व्यावसायिक आवश्यकताओं के अनुरूप लचीले, गैर-पारंपरिक फंडिंग विकल्पों तक पहुंचें।"
      },
      credit: {
        title: "AI-संचालित क्रेडिट मूल्यांकन",
        description: "पक्षपातपूर्ण क्रेडिट मूल्यांकनों को हमारी न्यायसंगत, डेटा-संचालित स्कोरिंग प्रणाली से बदलें।"
      },
      academy: {
        title: "वित्तीय साक्षरता अकादमी",
        description: "वित्त प्रबंधन और अपने व्यवसाय को बढ़ाने के लिए व्यावहारिक कौशल से स्वयं को सुसज्जित करें।"
      }
    },
    testimonials: {
      title: "सफलता की कहानियां",
      description: "उन महिला उद्यमियों से मिलें जिन्होंने एम्पावरहर फाइनेंस के साथ अपने व्यवसायों को बदल दिया है।"
    },
    cta: {
      title: "अपने वित्तीय भविष्य को बदलने के लिए तैयार हैं?",
      description: "हजारों महिला उद्यमियों से जुड़ें जो पूंजी, ज्ञान और समुदाय तक पहुंच रही हैं जिनकी उन्हें फलने-फूलने के लिए आवश्यकता है।",
      financing: "वित्तपोषण के लिए आवेदन करें",
      academy: "अकादमी का अन्वेषण करें"
    },
    academy: {
      title: "एम्पावरहर",
      subtitle: "अकादमी",
      description: "विशेष रूप से महिला उद्यमियों के लिए डिज़ाइन किए गए, हमारे पाठ्यक्रम आपको व्यवसाय में सफल होने के लिए आवश्यक वित्तीय ज्ञान और कौशल विकसित करने में मदद करेंगे।",
      exploreCourses: "पाठ्यक्रम देखें",
      beginnerCourses: "शुरुआती पाठ्यक्रम",
      beginnerDescription: "नए उद्यमियों के लिए डिज़ाइन किए गए हमारे आधारभूत पाठ्यक्रमों के साथ अपनी यात्रा शुरू करें।",
      advancedCourses: "उन्नत पाठ्यक्रम",
      advancedDescription: "हमारे विशेष उन्नत पाठ्यक्रमों के साथ अपने व्यवसाय को अगले स्तर पर ले जाएं।",
      mentorship: {
        title: "1:1 मेंटरशिप",
        description: "अनुभवी महिला उद्यमियों से जुड़ें जो आपके जूते में रह चुके हैं। हमारा मेंटरशिप प्रोग्राम आपको ऐसे बिजनेस लीडर्स के साथ जोड़ता है जो आपकी अनूठी चुनौतियों को समझते हैं।",
        feature1: "आपकी व्यावसायिक जरूरतों के अनुरूप व्यक्तिगत मार्गदर्शन",
        feature2: "आपके समर्पित मेंटर के साथ मासिक 1:1 सेशन",
        feature3: "सफल उद्यमियों के हमारे विशिष्ट नेटवर्क तक पहुंच",
        cta: "मेंटरशिप के लिए आवेदन करें"
      },
      readyToGrow: "अपने वित्तीय ज्ञान को बढ़ाने के लिए तैयार हैं?",
      joinThousands: "हजारों महिला उद्यमियों से जुड़ें जिन्होंने हमारी अकादमी के माध्यम से अपने व्यवसायों को बदल दिया है।",
      createAccount: "अपना नि:शुल्क खाता बनाएं"
    },
    chatbot: {
      title: "वित्त सहायक",
      placeholder: "वित्तपोषण या हमारी सेवाओं के बारे में कुछ भी पूछें...",
      send: "भेजें",
      startMessage: "नमस्ते! मैं आपका एम्पावरहर फाइनेंस सहायक हूं। आज मैं आपकी कैसे सहायता कर सकता हूं?"
    }
  },
  marathi: {
    navbar: {
      financing: "वित्तपुरवठा",
      credit: "क्रेडिट मूल्यांकन",
      academy: "अकादमी",
      about: "आमच्याबद्दल",
      signin: "साइन इन करा",
      getStarted: "सुरू करा"
    },
    hero: {
      title: "आर्थिक स्वातंत्र्य",
      subtitle: "प्रत्येक महिलेसाठी",
      description: "एम्पावरहर फायनान्स पर्यायी वित्तपुरवठा, AI-संचालित क्रेडिट मूल्यांकन आणि प्रात्यक्षिक आर्थिक शिक्षणाद्वारे महिला उद्योजकांसाठी अडथळे दूर करत आहे.",
      cta: "तुमची यात्रा सुरू करा",
      learnMore: "अधिक जाणून घ्या"
    },
    stats: {
      title: "आमचा प्रभाव",
      description: "जागतिक स्तरावर आर्थिक समावेशन आणि समर्थनाद्वारे महिला उद्योजकांना सक्षम करणे."
    },
    features: {
      title: "आमचे तीन स्तंभ",
      description: "एम्पावरहर फायनान्स हे तीन परस्पर जोडलेल्या स्तंभांवर आधारित आहे जे महिला उद्योजकांसमोरील अनोख्या आव्हानांचे सर्वांगीण निराकरण करण्यासाठी तयार केले आहेत.",
      financing: {
        title: "पर्यायी वित्तपुरवठा केंद्र",
        description: "तुमच्या अनोख्या व्यावसायिक गरजांनुसार लवचिक, अपारंपारिक निधी पर्यायांमध्ये प्रवेश करा."
      },
      credit: {
        title: "AI-संचालित क्रेडिट मूल्यांकन",
        description: "पक्षपाती क्रेडिट मूल्यांकने आमच्या न्याय्य, डेटा-संचालित स्कोरिंग सिस्टमसह बदला."
      },
      academy: {
        title: "वित्तीय साक्षरता अकादमी",
        description: "वित्त व्यवस्थापित करण्यासाठी आणि तुमचा व्यवसाय वाढविण्यासाठी प्रात्यक्षिक कौशल्ये मिळवा."
      }
    },
    testimonials: {
      title: "यशस्वी कथा",
      description: "अशा महिला उद्योजकांना भेटा ज्यांनी एम्पावरहर फायनान्ससह त्यांचा व्यवसाय बदलला आहे."
    },
    cta: {
      title: "तुमचे आर्थिक भविष्य बदलण्यासाठी तयार आहात?",
      description: "हजारो महिला उद्योजकांमध्ये सामील व्हा ज्या भरभराट करण्यासाठी आवश्यक असलेल्या भांडवल, ज्ञान आणि समुदायापर्यंत पोहोचत आहेत.",
      financing: "वित्तपुरवठ्यासाठी अर्ज करा",
      academy: "अकादमीचा शोध घ्या"
    },
    academy: {
      title: "एम्पावरहर",
      subtitle: "अकादमी",
      description: "विशेषत: महिला उद्योजकांसाठी डिझाइन केलेले, आमचे अभ्यासक्रम तुम्हाला व्यवसायात यशस्वी होण्यासाठी आवश्यक आर्थिक ज्ञान आणि कौशल्ये विकसित करण्यात मदत करतील.",
      exploreCourses: "अभ्यासक्रम एक्स्प्लोर करा",
      beginnerCourses: "नवशिक्या अभ्यासक्रम",
      beginnerDescription: "नवीन उद्योजकांसाठी डिझाइन केलेल्या आमच्या मूलभूत अभ्यासक्रमांसह तुमची यात्रा सुरू करा.",
      advancedCourses: "प्रगत अभ्यासक्रम",
      advancedDescription: "आमच्या विशिष्ट प्रगत अभ्यासक्रमांसह तुमचा व्यवसाय पुढच्या स्तरावर न्या.",
      mentorship: {
        title: "1:1 मार्गदर्शन",
        description: "अनुभवी महिला उद्योजकांशी जोडा ज्या तुमच्या जागी होत्या. आमचा मार्गदर्शन कार्यक्रम तुम्हाला अशा व्यवसाय नेत्यांसह जोडतो जे तुमची अनोखी आव्हाने समजतात.",
        feature1: "तुमच्या व्यावसायिक गरजांनुसार वैयक्तिक मार्गदर्शन",
        feature2: "तुमच्या समर्पित मार्गदर्शकासह मासिक 1:1 सत्र",
        feature3: "यशस्वी उद्योजकांच्या आमच्या अनन्य नेटवर्कमध्ये प्रवेश",
        cta: "मार्गदर्शनासाठी अर्ज करा"
      },
      readyToGrow: "तुमचे आर्थिक ज्ञान वाढवण्यासाठी तयार आहात?",
      joinThousands: "हजारो महिला उद्योजकांमध्ये सामील व्हा ज्यांनी आमच्या अकादमीद्वारे त्यांचा व्यवसाय बदलला आहे.",
      createAccount: "तुमचे विनामूल्य खाते तयार करा"
    },
    chatbot: {
      title: "वित्त सहाय्यक",
      placeholder: "वित्तपुरवठ्याविषयी किंवा आमच्या सेवांबद्दल काहीही विचारा...",
      send: "पाठवा",
      startMessage: "नमस्कार! मी तुमचा एम्पावरहर फायनान्स सहाय्यक आहे. मी आज तुमची कशी मदत करू शकतो?"
    }
  },
  gujarati: {
    navbar: {
      financing: "નાણાકીય",
      credit: "ક્રેડિટ મૂલ્યાંકન",
      academy: "એકેડમી",
      about: "અમારા વિશે",
      signin: "સાઇન ઇન કરો",
      getStarted: "શરૂ કરો"
    },
    hero: {
      title: "નાણાકીય સ્વતંત્રતા",
      subtitle: "દરેક મહિલા માટે",
      description: "એમ્પાવરહર ફાઇનાન્સ વૈકલ્પિક નાણાકીય, AI-સંચાલિત ક્રેડિટ મૂલ્યાંકન અને પ્રેક્ટિકલ નાણાકીય શિક્ષણ દ્વારા મહિલા ઉદ્યોગસાહસિકો માટે અવરોધો દૂર કરી રહ્યું છે.",
      cta: "તમારી મુસાફરી શરૂ કરો",
      learnMore: "વધુ જાણો"
    },
    stats: {
      title: "અમારી અસર",
      description: "નાણાકીય સમાવેશ અને સમર્થન દ્વારા વિશ્વભરમાં મહિલા ઉદ્યોગસાહસિકોને સશક્ત બનાવવી."
    },
    features: {
      title: "અમારા ત્રણ સ્તંભો",
      description: "એમ્પાવરહર ફાઇનાન્સ ત્રણ આંતરિક રીતે જોડાયેલા સ્તંભો પર બનાવવામાં આવ્યું છે જે મહિલા ઉદ્યોગસાહસિકોને પડકારતા અનોખા પડકારોને સર્વાંગી રીતે સંબોધે છે.",
      financing: {
        title: "વૈકલ્પિક નાણાકીય કેન્દ્ર",
        description: "તમારી અનન્ય વ્યાવસાયિક જરૂરિયાતો અનુસાર લવચીક, બિન-પરંપરાગત ફંડિંગ વિકલ્પોનો ઉપયોગ કરો."
      },
      credit: {
        title: "AI-સંચાલિત ક્રેડિટ મૂલ્યાંકન",
        description: "પૂર્વગ્રહયુક્ત ક્રેડિટ મૂલ્યાંકનને અમારી ન્યાયી, ડેટા-આધારિત સ્કોરિંગ સિસ્ટમ સાથે બદલો."
      },
      academy: {
        title: "નાણાકીય સાક્ષરતા એકેડમી",
        description: "નાણાંનું સંચાલન કરવા અને તમારા વ્યવસાયને વિકસાવવા માટે વ્યવહારુ કૌશલ્યોથી તમારી જાતને સજ્જ કરો."
      }
    },
    testimonials: {
      title: "સફળતાની કથાઓ",
      description: "એમ્પાવરહર ફાઇનાન્સ સાથે તેમના વ્યવસાયને બદલ્યા છે તે મહિલા ઉદ્યોગસાહસિકોને મળો."
    },
    cta: {
      title: "તમારા નાણાકીય ભવિષ્યને બદલવા માટે તૈયાર છો?",
      description: "હજારો મહિલા ઉદ્યોગસાહસિકો સાથે જોડાઓ જેઓ મૂડી, જ્ઞાન અને સમુદાય સુધી પહોંચી રહ્યા છે જેની તેમને સમૃદ્ધ થવા માટે જરૂર છે.",
      financing: "નાણાકીય માટે અરજી કરો",
      academy: "એકેડમીનું અન્વેષણ કરો"
    },
    academy: {
      title: "એમ્પાવરહર",
      subtitle: "એકેડમી",
      description: "ખાસ કરીને મહિલા ઉદ્યોગસાહસિકો માટે ડિઝાઇન કરાયેલ, અમારા કોર્સ તમને વ્યવસાયમાં સફળ થવા માટે જરૂરી નાણાકીય જ્ઞાન અને કૌશલ્યો બનાવવામાં મદદ કરશે.",
      exploreCourses: "કોર્સ એક્સપ્લોર કરો",
      beginnerCourses: "શરૂઆતના કોર્સ",
      beginnerDescription: "નવા ઉદ્યોગસાહસિકો માટે ડિઝાઇન કરેલા અમારા પાયાના કોર્સ સાથે તમારી મુસાફરી શરૂ કરો.",
      advancedCourses: "એડવાન્સ્ડ કોર્સ",
      advancedDescription: "અમારા વિશિષ્ટ એડવાન્સ્ડ કોર્સ સાથે તમારા વ્યવસાયને આગલા સ્તરે લઈ જાઓ.",
      mentorship: {
        title: "1:1 માર્ગદર્શન",
        description: "અનુભવી મહિલા ઉદ્યોગસાહસિકો સાથે જોડાઓ જેઓ તમારા જૂતામાં રહી ચૂક્યા છે. અમારો માર્ગદર્શન કાર્યક્રમ તમને બિઝનેસ લીડર્સ સાથે જોડે છે જેઓ તમારા અનોખા પડકારો સમજે છે.",
        feature1: "તમારી વ્યવસાયિક જરૂરિયાતો અનુસાર વ્યક્તિગત માર્ગદર્શન",
        feature2: "તમારા સમર્પિત માર્ગદર્શક સાથે માસિક 1:1 સત્રો",
        feature3: "સફળ ઉદ્યોગસાહસિકોના અમારા વિશિષ્ટ નેટવર્ક સુધી પહોંચ",
        cta: "માર્ગદર્શન માટે અરજી કરો"
      },
      readyToGrow: "તમારા નાણાકીય જ્ઞાનને વિકસાવવા માટે તૈયાર છો?",
      joinThousands: "હજારો મહિલા ઉદ્યોગસાહસિકો સાથે જોડાઓ જેમણે અમારી એકેડમી દ્વારા તેમના વ્યવસાયને બદલ્યો છે.",
      createAccount: "તમારું મફત એકાઉન્ટ બનાવો"
    },
    chatbot: {
      title: "નાણાકીય સહાયક",
      placeholder: "નાણાકીય અથવા અમારી સેવાઓ વિશે કંઈપણ પૂછો...",
      send: "મોકલો",
      startMessage: "નમસ્તે! હું તમારો એમ્પાવરહર ફાઇનાન્સ સહાયક છું. આજે હું તમારી કેવી રીતે મદદ કરી શકું?"
    }
  },
  tamil: {
    navbar: {
      financing: "நிதியளிப்பு",
      credit: "கடன் மதிப்பீடு",
      academy: "அகாடமி",
      about: "எங்களைப் பற்றி",
      signin: "உள்நுழைக",
      getStarted: "தொடங்குங்கள்"
    },
    hero: {
      title: "நிதி சுதந்திரம்",
      subtitle: "ஒவ்வொரு பெண்ணுக்கும்",
      description: "எம்பவர்ஹெர் நிதி மாற்று நிதியளிப்பு, AI-சக்தி வாய்ந்த கடன் மதிப்பீடு மற்றும் நடைமுறை நிதிக் கல்வி மூலம் பெண் தொழில்முனைவோருக்கான தடைகளை அகற்றுகிறது.",
      cta: "உங்கள் பயணத்தைத் தொடங்குங்கள்",
      learnMore: "மேலும் அறிய"
    },
    stats: {
      title: "எங்களின் தாக்கம்",
      description: "நிதி உள்ளடக்கம் மற்றும் ஆதரவு மூலம் உலகளவில் பெண் தொழில்முனைவோரை அதிகாரப்படுத்துதல்."
    },
    features: {
      title: "எங்களின் மூன்று தூண்கள்",
      description: "எம்பவர்ஹெர் நிதி பெண் தொழில்முனைவோர் எதிர்கொள்ளும் தனித்துவமான சவால்களை முழுமையாகத் தீர்க்க வடிவமைக்கப்பட்ட மூன்று இணைக்கப்பட்ட தூண்களின் அடிப்படையில் உருவாக்கப்பட்டுள்ளது.",
      financing: {
        title: "மாற்று நிதியளிப்பு மையம்",
        description: "உங்களின் தனித்துவமான வணிகத் தேவைகளுக்கு ஏற்ப நெகிழ்வான, பாரம்பரியமற்ற நிதி விருப்பங்களை அணுகவும்."
      },
      credit: {
        title: "AI-சக்தி வாய்ந்த கடன் மதிப்பீடு",
        description: "பாரபட்சமான கடன் மதிப்பீடுகளை எங்களின் நியாயமான, தரவு-இயக்கப்படும் மதிப்பெண் அமைப்புடன் மாற்றவும்."
      },
      academy: {
        title: "நிதி கல்வியறிவு அகாடமி",
        description: "நிதியை நிர்வகிக்கவும் உங்கள் வணிகத்தை விரிவுபடுத்தவும் நடைமுறை திறன்களுடன் உங்களை தயாராக்கிக் கொள்ளுங்கள்."
      }
    },
    testimonials: {
      title: "வெற்றிக் கதைகள்",
      description: "எம்பவர்ஹெர் நிதியுடன் தங்கள் வணிகங்களை மாற்றியமைத்த பெண் தொழில்முனைவோரைச் சந்திக்கவும்."
    },
    cta: {
      title: "உங்கள் நிதி எதிர்காலத்தை மாற்ற தயாரா?",
      description: "செழிக்க தேவையான மூலதனம், அறிவு மற்றும் சமூகத்தை அணுகும் ஆயிரக்கணக்கான பெண் தொழில்முனைவோருடன் இணையுங்கள்.",
      financing: "நிதியளிப்புக்கு விண்ணப்பிக்கவும்",
      academy: "அகாடமியை ஆராயுங்கள்"
    },
    academy: {
      title: "எம்பவர்ஹெர்",
      subtitle: "அகாடமி",
      description: "குறிப்பாக பெண் தொழில்முனைவோருக்காக வடிவமைக்கப்பட்ட, எங்கள் படிப்புகள் வணிகத்தில் வெற்றி பெற தேவையான நிதி அறிவு மற்றும் திறன்களை உருவாக்க உதவும்.",
      exploreCourses: "படிப்புகளை ஆராயுங்கள்",
      beginnerCourses: "துவக்க படிப்புகள்",
      beginnerDescription: "புதிய தொழில்முனைவோருக்காக வடிவமைக்கப்பட்ட எங்களின் அடிப்படை படிப்புகளுடன் உங்கள் பயணத்தைத் தொடங்குங்கள்.",
      advancedCourses: "மேம்பட்ட படிப்புகள்",
      advancedDescription: "எங்களின் சிறப்பு மேம்பட்ட படிப்புகளுடன் உங்கள் வணிகத்தை அடுத்த நிலைக்கு எடுத்துச் செல்லுங்கள்.",
      mentorship: {
        title: "1:1 வழிகாட்டல்",
        description: "உங்கள் காலணியில் இருந்த அனுபவம் வாய்ந்த பெண் தொழில்முனைவோருடன் இணையுங்கள். எங்கள் வழிகாட்டல் திட்டம் உங்களை உங்களின் தனித்துவமான சவால்களைப் புரிந்து கொள்ளும் வணிகத் தலைவர்களுடன் இணைக்கிறது.",
        feature1: "உங்கள் வணிகத் தேவைகளுக்கு ஏற்ப தனிப்பயனாக்கப்பட்ட வழிகாட்டல்",
        feature2: "உங்கள் அர்ப்பணிப்பு மிக்க வழிகாட்டியுடன் மாதாந்திர 1:1 அமர்வுகள்",
        feature3: "வெற்றிகரமான தொழில்முனைவோரின் எங்களின் பிரத்யேக வலைப்பின்னலுக்கான அணுகல்",
        cta: "வழிகாட்டலுக்கு விண்ணப்பிக்கவும்"
      },
      readyToGrow: "உங்கள் நிதி அறிவை வளர்க்க தயாரா?",
      joinThousands: "எங்கள் அகாடமி மூலம் தங்கள் வணிகங்களை மாற்றிய ஆயிரக்கணக்கான பெண் தொழில்முனைவோருடன் இணையுங்கள்.",
      createAccount: "உங்கள் இலவச கணக்கை உருவாக்குங்கள்"
    },
    chatbot: {
      title: "நிதி உதவியாளர்",
      placeholder: "நிதியளிப்பு அல்லது எங்கள் சேவைகள் பற்றி எதையும் கேளுங்கள்...",
      send: "அனுப்பு",
      startMessage: "வணக்கம்! நான் உங்கள் எம்பவர்ஹெர் நிதி உதவியாளர். இன்று நான் உங்களுக்கு எவ்வாறு உதவ முடியும்?"
    }
  }
};
