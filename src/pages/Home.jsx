import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useAdmin } from '../contexts/AdminContext';

const Home = () => {
  const { t } = useLanguage();
  const { partners, cases, documents } = useAdmin();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="px-6 lg:px-40 py-20 lg:py-32 bg-background-light dark:bg-background-dark legal-pattern" id="home">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            {...fadeInUp}
            className="flex flex-col gap-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary border border-primary/30 rounded-full w-fit">
              <span className="material-symbols-outlined text-sm font-bold">verified</span>
              <span className="text-[10px] font-black uppercase tracking-[0.15em]">{t('elite')}</span>
            </div>
            
            <h1 className="text-slate-900 dark:text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              Pioneering <br/><span className="text-primary">{t('pioneering')}</span>
            </h1>
            
            <p className="text-slate-600 dark:text-slate-400 text-xl font-medium leading-relaxed max-w-[580px]">
              {t('strategy')}
            </p>
            
            <div className="flex flex-wrap gap-5">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded font-black text-base transition-all shadow-xl shadow-primary/30 flex items-center gap-3"
              >
                {t('startConsultation')} <span className="material-symbols-outlined">bolt</span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-10 py-5 rounded font-black text-base hover:border-primary/50 transition-all"
              >
                {t('ourPortfolio')}
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border-4 border-white dark:border-slate-800" 
                 style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOplDH-XxQoJLDvs88cYudVjXXnMoTDeENuwgrjtupy9io18nQyREsh9d9OhsWPSA4hmTjfh4w14SM1HhGOV-glHOUGbG9wRO6BFiKc7-u7XXY9b8uR9RQ9guVZNheYu51UT3nr-mt3GzHKjYvQIzrl-TTuJLLDdpSeOdVRS7cNOowNlk2030aVA0wuik6h6WLO2VMURa6ThmhcbVl8W6S1uLd-EtvDaGkblqK48LaEaNUlXaF91ed6pVMtFTZY9r_-O3vzqJdqg")' }}>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-8 shadow-2xl rounded-2xl hidden lg:block border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-5">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <span className="material-symbols-outlined text-primary text-4xl">gavel</span>
                </div>
                <div>
                  <p className="text-3xl font-black text-primary">15+ Years</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('yearsExperience')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 lg:px-40 py-24 bg-background-alt-light dark:bg-background-alt-dark" id="about">
        <div className="max-w-[1280px] mx-auto">
          <motion.div 
            {...fadeInUp}
            className="flex flex-col mb-16"
          >
            <div className="h-1.5 w-12 bg-primary mb-6"></div>
            <h2 className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-3">
              {t('leadership')}
            </h2>
            <h3 className="text-slate-900 dark:text-white text-4xl font-black">
              {t('headedBy')}
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col md:flex-row gap-8 p-6 rounded-2xl bg-white dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl transition-all border border-transparent hover:border-primary/30"
            >
              <div className="w-full md:w-56 h-72 bg-center bg-no-repeat bg-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg" 
                   style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_nd7pq-w1slWA7pww6_lC4oF_6YvkcwZBa0a5kC_6jEvAP96con29DzHqxz92cKIo8oRjoFwvQu2897c6yxvBWf1PIh0177Wkj7uBzZx7XEoEoodaj6PkG2r6puVz8i4VU747eTJOt9tOnHyx2mmQ8C1Np01fkB_npgYjDtnWw4bEc3PRMCAw38erzznpCCl316bVPYpubzcQuJHujEul2s_vyLCl_ziHbTRDOOulYunXFXj4GTvxVotkti0FtU0DeW2ivp4OBw")' }}>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <span className="text-primary text-xs font-black tracking-[0.2em] uppercase">{t('managingPartner')}</span>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white">Alexander V. Sterling</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {t('alexanderBio')}
                </p>
                <div className="flex gap-4">
                  <a className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined">link</span>
                  </a>
                  <a className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined">mail</span>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col md:flex-row gap-8 p-6 rounded-2xl bg-white dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl transition-all border border-transparent hover:border-primary/30"
            >
              <div className="w-full md:w-56 h-72 bg-center bg-no-repeat bg-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg" 
                   style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxXPj0ZLaFQw9XG9N6nU9ZKYjHpgajLAzv5Jsf5PdUems1QRf0QO6wZKhEe-IA6cNGDE8qVuI2G4FrcKiZwObeSjfWgUAZaoJdnwt4KaawOlYvdKlqvVa-uc_dSdoTM1XAY-6N40AtQBhGJ_2hOPHOqNU7oTH0ZICyQHsxolJ5JzPZtZYGyHtFBOZ4ahhudaKwBs2I9d19R6ronPbHDGyCHaTPDpvN3okMAAj3JmZcNy2jvNOqak1e1ax0nnLyMmX_JreIWlcuXg")' }}>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <span className="text-primary text-xs font-black tracking-[0.2em] uppercase">{t('seniorPartner')}</span>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white">Elena M. Rostova</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {t('elenaBio')}
                </p>
                <div className="flex gap-4">
                  <a className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined">link</span>
                  </a>
                  <a className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined">mail</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="border-y border-slate-100 dark:border-slate-800 bg-white dark:bg-background-dark py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-40">
          <motion.p 
            {...fadeInUp}
            className="text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] mb-12"
          >
            {t('trustedBy')}
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 dark:opacity-40 grayscale hover:grayscale-0 transition-all">
            {partners.map((partner, index) => (
              <motion.div 
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3 font-black text-xl text-slate-600 dark:text-slate-300 cursor-pointer"
              >
                <span className="material-symbols-outlined text-primary">{partner.icon}</span>
                {partner.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="px-6 lg:px-40 py-24 bg-background-alt-light dark:bg-background-alt-dark" id="portfolio">
        <div className="max-w-[1280px] mx-auto">
          <motion.div 
            {...fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16"
          >
            <div className="flex flex-col">
              <h2 className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-3">
                {t('practicePortfolio')}
              </h2>
              <h3 className="text-slate-900 dark:text-white text-4xl font-black">
                {t('successfulCases')}
              </h3>
            </div>
            <motion.a 
              whileHover={{ x: 5 }}
              className="group text-primary font-black text-sm flex items-center gap-2 hover:opacity-80 transition-all"
              href="#"
            >
              {t('viewAllCases')} 
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_right_alt
              </span>
            </motion.a>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <motion.div 
                key={caseItem.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-slate-800 p-10 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all group"
              >
                <span className="material-symbols-outlined text-primary mb-6 text-4xl group-hover:scale-110 transition-transform block">
                  {caseItem.icon}
                </span>
                <h4 className="text-xl font-black mb-4 text-slate-900 dark:text-white">
                  {t(caseItem.title)}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                  {t(caseItem.description)}
                </p>
                <span className="text-[10px] font-black text-primary px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20 tracking-wider">
                  {caseItem.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Documents Section */}
      <section className="px-6 lg:px-40 py-24 bg-white dark:bg-background-dark" id="faq">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div {...fadeInUp}>
            <h2 className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-3">
              {t('legalResources')}
            </h2>
            <h3 className="text-slate-900 dark:text-white text-4xl font-black mb-10">
              {t('sampleDocuments')}
            </h3>
            <div className="space-y-5">
              {documents.map((doc) => (
                <motion.div 
                  key={doc.id}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center justify-between p-6 border-2 border-slate-50 dark:border-slate-800 rounded-xl hover:border-primary/30 dark:hover:border-primary/30 cursor-pointer transition-all group bg-slate-50/30 dark:bg-slate-800/20"
                >
                  <div className="flex items-center gap-5">
                    <span className="material-symbols-outlined text-primary text-2xl">{doc.icon}</span>
                    <div>
                      <p className="font-black text-sm text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        {t(doc.name)}
                      </p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                        {doc.type} • {doc.size}
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">download</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-primary p-12 rounded-3xl text-white shadow-[0_32px_64px_-12px_rgba(220,38,38,0.25)] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-9xl">forum</span>
            </div>
            <h3 className="text-3xl font-black mb-6 relative z-10">
              {t('haveQuestions')}
            </h3>
            <p className="text-white/90 mb-10 text-lg leading-relaxed relative z-10">
              {t('telegramDescription')}
            </p>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center justify-center gap-4 w-full bg-white text-primary hover:bg-slate-50 py-5 rounded-xl font-black text-lg transition-all shadow-xl relative z-10" 
              href="https://t.me/clplaw"
            >
              <svg className="size-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.35-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.96-.75 3.78-1.65 6.31-2.74 7.58-3.27 3.61-1.51 4.35-1.77 4.84-1.78.11 0 .35.03.5.16.13.1.17.24.18.33-.01.06.01.21 0 .26z"></path>
              </svg>
              {t('joinDiscussion')}
            </motion.a>
            <p className="text-center text-[10px] font-bold text-white/50 mt-8 uppercase tracking-[0.2em] relative z-10">
              {t('secureCommunication')}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;