import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    home: "Home",
    about: "About",
    cases: "Cases",
    faq: "FAQ",
    consultation: "Consultation",
    elite: "Elite Jurisdictional Excellence",
    pioneering: "Legal Advocacy for a Modern Era",
    strategy: "Dynamic strategy meets rigorous precision. We provide high-authority legal solutions for global jurisdictional challenges with absolute boldness.",
    startConsultation: "Start Consultation",
    ourPortfolio: "Our Portfolio",
    leadership: "Our Leadership",
    headedBy: "Headed by Legal Visionaries",
    trustedBy: "Trusted By Global Institutions",
    practicePortfolio: "Practice Portfolio",
    successfulCases: "Successful Legal Precedents",
    viewAllCases: "VIEW ALL CASES",
    legalResources: "Legal Resources",
    sampleDocuments: "Sample Documents",
    haveQuestions: "Have Specific Questions?",
    joinDiscussion: "Join Discussion",
    secureCommunication: "SECURE & ENCRYPTED COMMUNICATION",
    contactDetails: "Contact Details",
    copyright: "© 2024 CLPLaw International. Excellence Defined.",
    privacy: "Privacy",
    terms: "Terms",
    disclaimer: "Disclaimer",
    yearsExperience: "Industry Leadership",
    corporateMergerTitle: "Corporate Merger",
    commercialLitigationTitle: "Commercial Litigation",
    regulatoryAdvisoryTitle: "Regulatory Advisory",
    ndaTemplate: "NDA Template 2024",
    serviceAgreement: "Service Agreement Pro",
    alexanderBio: "Expert in International Corporate Law and M&A with over 20 years of dynamic courtroom experience.",
    elenaBio: "Specialist in Litigation and Commercial Arbitration. Leading advisor for government regulatory affairs.",
    corporateMergerDesc: "Represented a major tech conglomerate in a $200M cross-border acquisition, ensuring full regulatory compliance across four jurisdictions.",
    commercialLitigationDesc: "Successfully defended a leading manufacturing firm in a high-stakes patent dispute involving complex engineering intellectual property.",
    regulatoryAdvisoryDesc: "Drafted comprehensive national policy frameworks for emerging digital finance sectors in collaboration with central bank authorities.",
    telegramDescription: "Our legal experts are available for immediate consultation via our official Telegram channel. Get strategic guidance in under 30 minutes.",
    firmDescription: "A premier law firm specializing in high-authority litigation and dynamic corporate advisory for the digital age.",
    address: "7th Floor, Justice Plaza, Tashkent, Uzbekistan",
    phone: "+998 (71) 234-56-78",
    email: "info@clplaw.uz",
    globalOffice: "Global Head Office"
  },
  ru: {
    home: "Главная",
    about: "О нас",
    cases: "Кейсы",
    faq: "FAQ",
    consultation: "Консультация",
    elite: "Элитное Юридическое Превосходство",
    pioneering: "Юридическая Защита для Современной Эпохи",
    strategy: "Динамичная стратегия встречает строгую точность. Мы предоставляем высококачественные юридические решения для глобальных юрисдикционных вызовов с абсолютной смелостью.",
    startConsultation: "Начать Консультацию",
    ourPortfolio: "Наше Портфолио",
    leadership: "Наше Руководство",
    headedBy: "Возглавляют Юридические Визионеры",
    trustedBy: "Доверяют Глобальные Институты",
    practicePortfolio: "Портфолио Практики",
    successfulCases: "Успешные Юридические Прецеденты",
    viewAllCases: "ВСЕ КЕЙСЫ",
    legalResources: "Юридические Ресурсы",
    sampleDocuments: "Примеры Документов",
    haveQuestions: "Есть Конкретные Вопросы?",
    joinDiscussion: "Присоединиться к Обсуждению",
    secureCommunication: "БЕЗОПАСНАЯ И ЗАШИФРОВАННАЯ СВЯЗЬ",
    contactDetails: "Контактные Данные",
    copyright: "© 2024 CLPLaw International. Превосходство Определено.",
    privacy: "Конфиденциальность",
    terms: "Условия",
    disclaimer: "Отказ от Ответственности",
    yearsExperience: "Лидерство в Отрасли",
    corporateMergerTitle: "Корпоративное Слияние",
    commercialLitigationTitle: "Коммерческий Спор",
    regulatoryAdvisoryTitle: "Регуляторный Консалтинг",
    ndaTemplate: "Шаблон NDA 2024",
    serviceAgreement: "Профессиональный Договор Услуг",
    alexanderBio: "Эксперт в области международного корпоративного права и слияний и поглощений с более чем 20-летним опытом работы в зале суда.",
    elenaBio: "Специалист по судебным разбирательствам и коммерческому арбитражу. Ведущий консультант по вопросам государственного регулирования.",
    corporateMergerDesc: "Представлял интересы крупного технологического конгломерата в сделке по трансграничному поглощению на сумму 200 млн долларов, обеспечивая полное соответствие нормативным требованиям в четырех юрисдикциях.",
    commercialLitigationDesc: "Успешно защищал интересы ведущей производственной компании в высокорисковом патентном споре, связанном со сложной инженерной интеллектуальной собственностью.",
    regulatoryAdvisoryDesc: "Разработал комплексные национальные политические рамки для развивающихся секторов цифровых финансов в сотрудничестве с центральными банковскими органами.",
    telegramDescription: "Наши юридические эксперты доступны для немедленной консультации через наш официальный канал Telegram. Получите стратегические рекомендации менее чем за 30 минут.",
    firmDescription: "Ведущая юридическая фирма, специализирующаяся на судебных разбирательствах высшего уровня и динамическом корпоративном консалтинге для цифровой эпохи.",
    address: "7-й этаж, Площадь Правосудия, Ташкент, Узбекистан",
    phone: "+998 (71) 234-56-78",
    email: "info@clplaw.uz",
    globalOffice: "Главный Офис"
  },
  uz: {
    home: "Bosh Sahifa",
    about: "Biz Haqimizda",
    cases: "Ishlar",
    faq: "Savol-Javob",
    consultation: "Konsultatsiya",
    elite: "Elit Yurisdiktsion Ustunlik",
    pioneering: "Zamonaviy Davr uchun Huquqiy Himoya",
    strategy: "Dinamik strategiya qat'iy aniqlik bilan uchrashadi. Biz global yurisdiktsion muammolar uchun yuqori darajadagi huquqiy yechimlarni mutlaq jasorat bilan taqdim etamiz.",
    startConsultation: "Konsultatsiyani Boshlash",
    ourPortfolio: "Bizning Portfolio",
    leadership: "Bizning Rahbariyat",
    headedBy: "Huquqiy Vizyonerlar Boshqaradi",
    trustedBy: "Global Institutsiyalar Ishonadi",
    practicePortfolio: "Amaliy Portfolio",
    successfulCases: "Muvaffaqiyatli Huquqiy Pretsendentlar",
    viewAllCases: "BARCHA ISHLARNI KO'RISH",
    legalResources: "Huquqiy Resurslar",
    sampleDocuments: "Namuna Hujjatlar",
    haveQuestions: "Maxsus Savollaringiz Bormi?",
    joinDiscussion: "Muhokamaga Qo'shilish",
    secureCommunication: "XAVFSIZ VA SHIFRLANGAN ALOQA",
    contactDetails: "Aloqa Ma'lumotlari",
    copyright: "© 2024 CLPLaw International. Ustunlik Belgilangan.",
    privacy: "Maxfiylik",
    terms: "Shartlar",
    disclaimer: "Mas'uliyatni Cheklash",
    yearsExperience: "Sanoat Yetakchiligi",
    corporateMergerTitle: "Korporativ Birlashish",
    commercialLitigationTitle: "Tijorat Sud Ishlari",
    regulatoryAdvisoryTitle: "Regulyator Maslahat",
    ndaTemplate: "NDA Shablon 2024",
    serviceAgreement: "Xizmat Shartnomasi Pro",
    alexanderBio: "Xalqaro korporativ huquq va M&A bo'yicha mutaxassis, 20 yildan ortiq dinamik sud tajribasiga ega.",
    elenaBio: "Sud jarayonlari va tijorat arbitraji bo'yicha mutaxassis. Davlat regulyator masalalari bo'yicha yetakchi maslahatchi.",
    corporateMergerDesc: "200 million dollarlik transchegaraviy sotib olishda yirik texnologiya konglomeratining manfaatlarini himoya qildi, to'rt yurisdiktsiyada to'liq regulyator muvofiqlikni ta'minladi.",
    commercialLitigationDesc: "Murakkab muhandislik intellektual mulkini o'z ichiga olgan yuqori darajadagi patent nizosida yetakchi ishlab chiqarish kompaniyasining manfaatlarini muvaffaqiyatli himoya qildi.",
    regulatoryAdvisoryDesc: "Markaziy bank organlari bilan hamkorlikda raqamli moliya sohalari uchun keng qamrovli milliy siyosat doirasini ishlab chiqdi.",
    telegramDescription: "Bizning huquqiy mutaxassislarimiz rasmiy Telegram kanalimiz orqali darhol konsultatsiya olish uchun mavjud. 30 daqiqa ichida strategik maslahat oling.",
    firmDescription: "Raqamli davr uchun yuqori darajadagi sud jarayonlari va dinamik korporativ maslahat bilan shug'ullanadigan yetakchi huquqiy firma.",
    address: "7-qavat, Adolat maydoni, Toshkent, O'zbekiston",
    phone: "+998 (71) 234-56-78",
    email: "info@clplaw.uz",
    globalOffice: "Bosh Ofis"
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
    // Faqat mavjud tillarni tekshirish
    const validLanguages = ['en', 'ru', 'uz'];
    return saved && validLanguages.includes(saved) ? saved : 'en';
  });

  const t = (key) => {
    // Agar til mavjud bo'lmasa, default ingliz tilidan foydalanish
    const langData = translations[language] || translations.en;
    return langData[key] || key;
  };

  const changeLanguage = (lang) => {
    // Faqat mavjud tillarni o'zgartirishga ruxsat berish
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