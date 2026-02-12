import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    // Firm name
    firmName: "CAPSTONE AND LEGAL PARTNERS Law Firm",
    firmShortName: "CLP",
    firmTagline: "CAPSTONE – Your Primary Defender",
    
    // Navigation
    home: "Home",
    about: "About",
    cases: "Cases",
    faq: "FAQ",
    consultation: "Consultation",
    
    // Hero section
    elite: "Elite Legal Excellence",
    pioneering: "CAPSTONE – Your Primary Defender",
    strategy: "CAPSTONE AND LEGAL PARTNERS Law Firm operates in the legal services market of the Republic of Uzbekistan and provides legal assistance in all types of disputes, including tax disputes, debt recovery, labor disputes, civil cases, as well as criminal and administrative proceedings.",
    startConsultation: "Start Consultation",
    ourPortfolio: "Our Portfolio",
    
    // About firm section
    aboutFirm: "About the Firm",
    firmDescription: "CAPSTONE AND LEGAL PARTNERS Law Firm operates in the legal services market of the Republic of Uzbekistan and provides legal assistance in all types of disputes, including tax disputes, debt recovery, labor disputes, civil cases, as well as criminal and administrative proceedings. To date, CAPSTONE AND LEGAL PARTNERS Law Firm has successfully participated in more than 1,000 cases, representing and protecting the legitimate interests of individuals and legal entities before courts and state authorities.",
    
    // Leadership
    leadership: "Our Leadership",
    headedBy: "Led by Experienced Attorneys",
    managingPartner: "Co-Founder",
    seniorPartner: "Founder",
    
    // Attorneys
    attorney1Name: "Tohirxonov Og'abek Nodirbek o'g'li",
    attorney1Title: "Co-Founder of CAPSTONE AND LEGAL PARTNERS Law Firm",
    attorney1Bio: "Specialist in economic and civil litigation.",
    
    attorney2Name: "Umirzoqov Shohrux Shuhrat o'g'li",
    attorney2Title: "Founder of CAPSTONE AND LEGAL PARTNERS Law Firm",
    attorney2Bio: "Specialist in administrative and criminal law, as well as economic and civil litigation.",
    
    // Partners
    trustedBy: "Trusted Partners",
    
    // Cases section
    practicePortfolio: "Practice Portfolio",
    successfulCases: "Successful Legal Precedents",
    viewAllCases: "VIEW ALL CASES",
    
    // Cases titles
    corporateMergerTitle: "Tax Dispute Resolution",
    commercialLitigationTitle: "Debt Recovery",
    regulatoryAdvisoryTitle: "Labor Dispute",
    
    // Cases descriptions
    corporateMergerDesc: "Successful representation of a major corporation in a complex tax dispute with state authorities, achieving full satisfaction of client interests.",
    commercialLitigationDesc: "Effective debt recovery in favor of a commercial bank totaling over $5 million through comprehensive legal proceedings.",
    regulatoryAdvisoryDesc: "Defense of employee rights in a complex labor dispute against a large employer, achieving reinstatement and compensation.",
    
    // Legal resources
    legalResources: "Legal Resources",
    sampleDocuments: "Sample Documents",
    ndaTemplate: "Legal Consultation Agreement",
    serviceAgreement: "Power of Attorney Form",
    
    // FAQ section
    haveQuestions: "Have Specific Questions?",
    joinDiscussion: "Join Discussion",
    secureCommunication: "SECURE & ENCRYPTED COMMUNICATION",
    telegramDescription: "Our attorneys are available for immediate consultation via our official Telegram channel. Get strategic guidance in under 30 minutes.",
    
    // Contact
    contactDetails: "Contact Details",
    copyright: "© 2025 CAPSTONE AND LEGAL PARTNERS Law Firm. All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
    disclaimer: "Disclaimer",
    
    // Stats
    yearsExperience: "Years of Experience",
    
    // Contact info
    address: "7th Floor, Justice Plaza, Tashkent, Uzbekistan",
    phone: "+998 (71) 234-56-78",
    email: "info@capstonelegal.uz",
    globalOffice: "Head Office"
  },
  
  ru: {
    // Firm name
    firmName: "Адвокатская фирма «CAPSTONE AND LEGAL PARTNERS»",
    firmShortName: "КЛП",
    firmTagline: "CAPSTONE – ваш надёжный защитник",
    
    // Navigation
    home: "Главная",
    about: "О нас",
    cases: "Кейсы",
    faq: "FAQ",
    consultation: "Консультация",
    
    // Hero section
    elite: "Элитное Юридическое Превосходство",
    pioneering: "CAPSTONE – ваш надёжный защитник",
    strategy: "Адвокатская фирма «CAPSTONE AND LEGAL PARTNERS» осуществляет деятельность на рынке юридических услуг Республики Узбекистан и оказывает правовую помощь по всем видам споров, включая налоговые споры, взыскание задолженности, трудовые споры, гражданские дела, а также уголовные и административно-процессуальные дела.",
    startConsultation: "Начать Консультацию",
    ourPortfolio: "Наше Портфолио",
    
    // About firm section
    aboutFirm: "О фирме",
    firmDescription: "Адвокатская фирма «CAPSTONE AND LEGAL PARTNERS» осуществляет деятельность на рынке юридических услуг Республики Узбекистан и оказывает правовую помощь по всем видам споров, включая налоговые споры, взыскание задолженности, трудовые споры, гражданские дела, а также уголовные и административно-процессуальные дела. На сегодняшний день адвокатская фирма «CAPSTONE AND LEGAL PARTNERS» успешно приняла участие более чем в 1000 делах, обеспечивая защиту законных интересов физических и юридических лиц в судах и государственных органах.",
    
    // Leadership
    leadership: "Наше Руководство",
    headedBy: "Опытные Адвокаты",
    managingPartner: "Соучредитель",
    seniorPartner: "Учредитель",
    
    // Attorneys
    attorney1Name: "Адвокат Тохирхонов Ог‘абек Нодирбек угли",
    attorney1Title: "Соучредитель адвокатской фирмы «CAPSTONE AND LEGAL PARTNERS»",
    attorney1Bio: "Специалист по экономическим и гражданским судебным делам.",
    
    attorney2Name: "Адвокат Умирзоков Шохрух Шухрат угли",
    attorney2Title: "Учредитель адвокатской фирмы «CAPSTONE AND LEGAL PARTNERS»",
    attorney2Bio: "Специалист по административным и уголовным делам, а также по экономическим и гражданским судебным делам.",
    
    // Partners
    trustedBy: "Партнёры",
    
    // Cases section
    practicePortfolio: "Портфолио Практики",
    successfulCases: "Успешные Юридические Прецеденты",
    viewAllCases: "ВСЕ КЕЙСЫ",
    
    // Cases titles
    corporateMergerTitle: "Налоговые споры",
    commercialLitigationTitle: "Взыскание задолженности",
    regulatoryAdvisoryTitle: "Трудовые споры",
    
    // Cases descriptions
    corporateMergerDesc: "Успешное представление интересов крупной корпорации в сложном налоговом споре с государственными органами, достижение полного удовлетворения интересов клиента.",
    commercialLitigationDesc: "Эффективное взыскание задолженности в пользу коммерческого банка на сумму свыше 5 миллионов долларов посредством комплексных судебных процедур.",
    regulatoryAdvisoryDesc: "Защита прав работников в сложном трудовом споре против крупного работодателя, достижение восстановления на работе и компенсации.",
    
    // Legal resources
    legalResources: "Юридические Ресурсы",
    sampleDocuments: "Образцы Документов",
    ndaTemplate: "Договор юридической консультации",
    serviceAgreement: "Доверенность",
    
    // FAQ section
    haveQuestions: "Есть Конкретные Вопросы?",
    joinDiscussion: "Присоединиться к Обсуждению",
    secureCommunication: "БЕЗОПАСНАЯ И ЗАШИФРОВАННАЯ СВЯЗЬ",
    telegramDescription: "Наши адвокаты доступны для немедленной консультации через наш официальный канал Telegram. Получите стратегические рекомендации менее чем за 30 минут.",
    
    // Contact
    contactDetails: "Контактные Данные",
    copyright: "© 2025 Адвокатская фирма «CAPSTONE AND LEGAL PARTNERS». Все права защищены.",
    privacy: "Конфиденциальность",
    terms: "Условия",
    disclaimer: "Отказ от Ответственности",
    
    // Stats
    yearsExperience: "Лет опыта",
    
    // Contact info
    address: "7-й этаж, Площадь Правосудия, Ташкент, Узбекистан",
    phone: "+998 (71) 234-56-78",
    email: "info@capstonelegal.uz",
    globalOffice: "Главный Офис"
  },
  
  uz: {
    // Firm name - Lotin
    firmName: "«CAPSTONE AND LEGAL PARTNERS» advokatlik firmasi",
    firmShortName: "CLP",
    firmTagline: "CAPSTONE – asosiy himoyachingiz",
    
    // Navigation
    home: "Bosh Sahifa",
    about: "Biz Haqimizda",
    cases: "Ishlar",
    faq: "Savol-Javob",
    consultation: "Konsultatsiya",
    
    // Hero section
    elite: "Elit Yuridik Ustunlik",
    pioneering: "CAPSTONE – asosiy himoyachingiz",
    strategy: "«CAPSTONE AND LEGAL PARTNERS» advokatlik firmasi O‘zbekiston Respublikasi huquq bozorida faoliyat yuritib, barcha turdagi nizolar, jumladan soliq nizolari, qarzdorlikni undirish, mehnat nizolari, fuqarolik ishlari, shuningdek jinoyat va ma’muriy protsessual ishlar bo‘yicha huquqiy yordam ko‘rsatib kelayotgan advokatlik tuzilmasi hisoblanadi.",
    startConsultation: "Konsultatsiyani Boshlash",
    ourPortfolio: "Bizning Portfolio",
    
    // About firm section
    aboutFirm: "Firma Haqida",
    firmDescription: "«CAPSTONE AND LEGAL PARTNERS» advokatlik firmasi O‘zbekiston Respublikasi huquq bozorida faoliyat yuritib, barcha turdagi nizolar, jumladan soliq nizolari, qarzdorlikni undirish, mehnat nizolari, fuqarolik ishlari, shuningdek jinoyat va ma’muriy protsessual ishlar bo‘yicha huquqiy yordam ko‘rsatib kelayotgan advokatlik tuzilmasi hisoblanadi. «CAPSTONE AND LEGAL PARTNERS» advokatlik firmasi bugungi kunga qadar 1000 dan ortiq ishlarda muvaffaqiyatli ishtirok etgan bo‘lib, jismoniy va yuridik shaxslarning qonuniy manfaatlarini sudlarda hamda davlat organlarida himoya qilib kelmoqda.",
    
    // Leadership
    leadership: "Rahbariyat",
    headedBy: "Tajribali Advokatlar",
    managingPartner: "Hamta'sischisi",
    seniorPartner: "Ta'sischisi",
    
    // Attorneys
    attorney1Name: "Advokat Tohirxonov Og‘abek Nodirbek o‘g‘li",
    attorney1Title: "«CAPSTONE AND LEGAL PARTNERS» advokatlik firmasi hamta’sischisi",
    attorney1Bio: "Iqtisodiy hamda fuqarolik sud ishlari bo‘yicha mutaxassis.",
    
    attorney2Name: "Advokat Umirzoqov Shohrux Shuhrat o‘g‘li",
    attorney2Title: "«CAPSTONE AND LEGAL PARTNERS» advokatlik firmasi ta’sischisi",
    attorney2Bio: "Ma’muriy va jinoyat ishlari, shuningdek iqtisodiy hamda fuqarolik sud ishlari bo‘yicha mutaxassis.",
    
    // Partners
    trustedBy: "Ishonchli Hamkorlar",
    
    // Cases section
    practicePortfolio: "Amaliyot Portfolio",
    successfulCases: "Muvaffaqiyatli Yuridik Pretsedentlar",
    viewAllCases: "BARChA ISHLARNI KO'RISH",
    
    // Cases titles
    corporateMergerTitle: "Soliq nizolari",
    commercialLitigationTitle: "Qarzdorlikni undirish",
    regulatoryAdvisoryTitle: "Mehnat nizolari",
    
    // Cases descriptions
    corporateMergerDesc: "Yirik korporatsiya manfaatlarini davlat organlari bilan murakkab soliq nizosida muvaffaqiyatli himoya qilish, mijoz manfaatlarining to'liq qondirilishiga erishish.",
    commercialLitigationDesc: "Tijorat banki foydasiga 5 million dollardan ortiq qarzdorlikni kompleks sud jarayonlari orqali samarali undirish.",
    regulatoryAdvisoryDesc: "Yirik ish beruvchiga qarshi murakkab mehnat nizosida xodimlar huquqlarini himoya qilish, ishga tiklash va kompensatsiya undirish.",
    
    // Legal resources
    legalResources: "Yuridik Resurslar",
    sampleDocuments: "Namuna Hujjatlar",
    ndaTemplate: "Yuridik konsultatsiya shartnomasi",
    serviceAgreement: "Ishonchnoma",
    
    // FAQ section
    haveQuestions: "Maxsus Savollaringiz Bormi?",
    joinDiscussion: "Muhokamaga Qo'shilish",
    secureCommunication: "XAVFSIZ VA SHIFRLANGAN ALOQA",
    telegramDescription: "Advokatlarimiz rasmiy Telegram kanalimiz orqali darhol konsultatsiya olish uchun mavjud. 30 daqiqa ichida strategik maslahat oling.",
    
    // Contact
    contactDetails: "Aloqa Ma'lumotlari",
    copyright: "© 2025 «CAPSTONE AND LEGAL PARTNERS» advokatlik firmasi. Barcha huquqlar himoyalangan.",
    privacy: "Maxfiylik",
    terms: "Shartlar",
    disclaimer: "Mas'uliyatni Cheklash",
    
    // Stats
    yearsExperience: "Yillik tajriba",
    
    // Contact info
    address: "7-qavat, Adolat maydoni, Toshkent, O‘zbekiston",
    phone: "+998 (71) 234-56-78",
    email: "info@capstonelegal.uz",
    globalOffice: "Bosh Ofis"
  },
  
  uz_cyrl: {
    // Firm name - Kirill
    firmName: "«CAPSTONE AND LEGAL PARTNERS» адвокатлик фирмаси",
    firmShortName: "КЛП",
    firmTagline: "CAPSTONE – асосий ҳимоячингиз",
    
    // Navigation
    home: "Бош Саҳифа",
    about: "Биз Ҳақимизда",
    cases: "Ишлар",
    faq: "Савол-Жавоб",
    consultation: "Консультация",
    
    // Hero section
    elite: "Элит Юридик Устунлик",
    pioneering: "CAPSTONE – асосий ҳимоячингиз",
    strategy: "«CAPSTONE AND LEGAL PARTNERS» адвокатлик фирмаси Ўзбекистон Республикаси ҳуқуқ бозорида фаолият юритиб, барча турдаги низолар, жумладан солиқ низолари, қарздорликни ундириш, меҳнат низолари, фуқаролик ишлари, шунингдек жиноят ва маъмурий процессуал ишлар бўйича ҳуқуқий ёрдам кўрсатиб келаётган адвокатлик тузилмаси ҳисобланади.",
    startConsultation: "Консультацияни Бошлаш",
    ourPortfolio: "Бизнинг Портфолио",
    
    // About firm section
    aboutFirm: "Фирма Ҳақида",
    firmDescription: "«CAPSTONE AND LEGAL PARTNERS» адвокатлик фирмаси Ўзбекистон Республикаси ҳуқуқ бозорида фаолият юритиб, барча турдаги низолар, жумладан солиқ низолари, қарздорликни ундириш, меҳнат низолари, фуқаролик ишлари, шунингдек жиноят ва маъмурий процессуал ишлар бўйича ҳуқуқий ёрдам кўрсатиб келаётган адвокатлик тузилмаси ҳисобланади. «CAPSTONE AND LEGAL PARTNERS» адвокатлик фирмаси бугунги кунга қадар 1000 дан ортиқ ишларда муваффақиятли иштирок этган бўлиб, жисмоний ва юридик шахсларнинг қонуний манфаатларини судларда ҳамда давлат органларида ҳимоя қилиб келмоқда.",
    
    // Leadership
    leadership: "Раҳбарият",
    headedBy: "Тажрибали Адвокатлар",
    managingPartner: "Ҳамтаъсисчи",
    seniorPartner: "Таъсисчи",
    
    // Attorneys
    attorney1Name: "Адвокат Тоҳирхонов Оғабек Нодирбек ўғли",
    attorney1Title: "«CAPSTONE AND LEGAL PARTNERS» адвокатлик фирмаси ҳамтаъсисчиси",
    attorney1Bio: "Иқтисодий ҳамда фуқаролик суд ишлари бўйича мутахассис.",
    
    attorney2Name: "Адвокат Умирзоқов Шоҳрух Шуҳрат ўғли",
    attorney2Title: "«CAPSTONE AND LEGAL PARTNERS» адвокатлик фирмаси таъсисчиси",
    attorney2Bio: "Маъмурий ва жиноят ишлари, шунингдек иқтисодий ҳамда фуқаролик суд ишлари бўйича мутахассис.",
    
    // Partners
    trustedBy: "Ишончли Ҳамкорлар",
    
    // Cases section
    practicePortfolio: "Амалиёт Портфолиоси",
    successfulCases: "Муваффақиятли Юридик Прецедентлар",
    viewAllCases: "БАРЧА ИШЛАРНИ КЎРИШ",
    
    // Cases titles
    corporateMergerTitle: "Солиқ низолари",
    commercialLitigationTitle: "Қарздорликни ундириш",
    regulatoryAdvisoryTitle: "Меҳнат низолари",
    
    // Cases descriptions
    corporateMergerDesc: "Йирик корпорация манфаатларини давлат органлари билан мураккаб солиқ низосида муваффақиятли ҳимоя қилиш, мижоз манфаатларининг тўлиқ қондирилишига эришиш.",
    commercialLitigationDesc: "Тижорат банки фойдасига 5 миллион доллардан ортиқ қарздорликни комплекс суд жараёнлари орқали самарали ундириш.",
    regulatoryAdvisoryDesc: "Йирик иш берувчига қарши мураккаб меҳнат низосида ходимлар ҳуқуқларини ҳимоя қилиш, ишга тиклаш ва компенсация ундириш.",
    
    // Legal resources
    legalResources: "Юридик Ресурслар",
    sampleDocuments: "Намуна Ҳужжатлар",
    ndaTemplate: "Юридик консультация шартномаси",
    serviceAgreement: "Ишончнома",
    
    // FAQ section
    haveQuestions: "Максус Саволларингиз Борми?",
    joinDiscussion: "Муҳокамага Қўшилиш",
    secureCommunication: "ХАВФСИЗ ВА ШИФРЛАНГАН АЛОҚА",
    telegramDescription: "Адвокатларимиз расмий Telegram каналимиз орқали дарҳол консультация олиш учун мавжуд. 30 дақиқа ичида стратегик маслаҳат олинг.",
    
    // Contact
    contactDetails: "Алоқа Маълумотлари",
    copyright: "© 2025 «CAPSTONE AND LEGAL PARTNERS» адвокатлик фирмаси. Барча ҳуқуқлар ҳимояланган.",
    privacy: "Махфийлик",
    terms: "Шартлар",
    disclaimer: "Масъулиятни Чеклаш",
    
    // Stats
    yearsExperience: "Йиллик тажриба",
    
    // Contact info
    address: "7-қават, Адолат майдони, Тошкент, Ўзбекистон",
    phone: "+998 (71) 234-56-78",
    email: "info@capstonelegal.uz",
    globalOffice: "Бош Офис"
  }
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('clplaw_language');
    const validLanguages = ['en', 'ru', 'uz', 'uz_cyrl'];
    return saved && validLanguages.includes(saved) ? saved : 'en';
  });

  const t = (key) => {
    const langData = translations[language] || translations.en;
    return langData[key] || key;
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem('clplaw_language', lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};