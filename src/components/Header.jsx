import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { t, language, changeLanguage } = useLanguage();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 lg:px-40 py-4"
    >
      <div className="flex items-center justify-between max-w-[1280px] mx-auto">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 cursor-pointer" 
          onClick={scrollToTop}
        >
          <div className="size-9 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <h2 className="text-slate-900 dark:text-white text-xl lg:text-2xl font-black leading-tight tracking-tighter uppercase">CAPSTONE</h2>
            <span className="text-[8px] lg:text-[10px] font-bold text-primary tracking-wider">AND LEGAL PARTNERS</span>
          </div>
        </motion.div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-slate-700 dark:text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleNavigation('home')}
            className="text-slate-700 dark:text-slate-300 text-sm font-bold hover:text-primary transition-colors"
          >
            {t('home')}
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleNavigation('about')}
            className="text-slate-700 dark:text-slate-300 text-sm font-bold hover:text-primary transition-colors"
          >
            {t('about')}
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleNavigation('portfolio')}
            className="text-slate-700 dark:text-slate-300 text-sm font-bold hover:text-primary transition-colors"
          >
            {t('cases')}
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleNavigation('faq')}
            className="text-slate-700 dark:text-slate-300 text-sm font-bold hover:text-primary transition-colors"
          >
            {t('faq')}
          </motion.button>
          
          <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2"></div>
          
          <motion.select 
            whileHover={{ scale: 1.05 }}
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-transparent border border-slate-200 dark:border-slate-700 rounded px-2 py-1 text-sm"
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ (Lotin)</option>
            <option value="uz_cyrl">UZ (Kiril)</option>
          </motion.select>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="text-slate-500 dark:text-slate-400 hover:text-primary p-2 transition-colors"
          >
            <span className="material-symbols-outlined block dark:hidden">dark_mode</span>
            <span className="material-symbols-outlined hidden dark:block">light_mode</span>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#b91c1c" }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded font-bold text-sm transition-all shadow-md shadow-primary/20"
          >
            {t('consultation')}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.nav 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-4 space-y-4"
        >
          <button 
            onClick={() => handleNavigation('home')}
            className="block w-full text-left text-slate-700 dark:text-slate-300 text-sm font-bold hover:text-primary p-2"
          >
            {t('home')}
          </button>
          <button 
            onClick={() => handleNavigation('about')}
            className="block w-full text-left text-slate-700 dark:text-slate-300 text-sm font-bold hover:text-primary p-2"
          >
            {t('about')}
          </button>
          <button 
            onClick={() => handleNavigation('portfolio')}
            className="block w-full text-left text-slate-700 dark:text-slate-300 text-sm font-bold hover:text-primary p-2"
          >
            {t('cases')}
          </button>
          <button 
            onClick={() => handleNavigation('faq')}
            className="block w-full text-left text-slate-700 dark:text-slate-300 text-sm font-bold hover:text-primary p-2"
          >
            {t('faq')}
          </button>
          
          <div className="flex items-center gap-4 p-2">
            <select 
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-transparent border border-slate-200 dark:border-slate-700 rounded px-2 py-1 text-sm"
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="uz">UZ (Lotin)</option>
              <option value="uz_cyrl">UZ (Kiril)</option>
            </select>
            
            <button 
              onClick={toggleTheme}
              className="text-slate-500 dark:text-slate-400 hover:text-primary p-2"
            >
              <span className="material-symbols-outlined block dark:hidden">dark_mode</span>
              <span className="material-symbols-outlined hidden dark:block">light_mode</span>
            </button>
          </div>
          
          <div className="flex gap-2 p-2">
            <button className="flex-1 bg-primary hover:bg-primary-hover text-white px-3 py-2 rounded font-bold text-sm">
              {t('consultation')}
            </button>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;