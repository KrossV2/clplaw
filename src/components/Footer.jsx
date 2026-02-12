import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-background-alt-light dark:bg-background-alt-dark pt-24 pb-12 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="size-7 text-primary">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-black dark:text-white uppercase tracking-tighter">CAPSTONE</h2>
                <span className="text-[8px] font-bold text-primary tracking-wider">AND LEGAL PARTNERS</span>
              </div>
            </div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
              {t('firmDescription')}
            </p>
            <div className="flex gap-4">
              <a className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm shadow-primary/5" href="#">
                <span className="material-symbols-outlined text-xl">public</span>
              </a>
              <a className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm shadow-primary/5" href="#">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm shadow-primary/5" href="#">
                <span className="material-symbols-outlined text-xl">alternate_email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-black mb-8 dark:text-white uppercase text-[10px] tracking-[0.4em] text-primary">
              {t('contactDetails')}
            </h4>
            <ul className="space-y-5 text-sm font-bold text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                <span className="leading-tight">{t('address')}</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-xl">call</span>
                <span>{t('phone')}</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                <span>{t('email')}</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <div className="w-full h-56 rounded-2xl bg-slate-200 dark:bg-slate-800 overflow-hidden relative border border-slate-100 dark:border-slate-700 shadow-inner">
              <img 
                className="w-full h-full object-cover opacity-70 grayscale contrast-125" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv1vLFP9E4dvW2L1x0r0OwVTJl-yXSMhE_5w_6N3IS-qfGaTdJ5FeP91wsYR-UqsipqXKI_Zerm2ZQwyF04Nq7Dja4F1MOe2gvpaqWlodtrhR8P_Fopk9L9JNzdO8f6hlaWMLDg8ETvG1aMLFP4TkaWhqJpVn2tDl0MawEojyVHSEPAS0fv4qnt1sOkozQqfJh-oAK8ep8z6rd4FAYMMF24I_zzbYnKBokVlQxULxPZcVGBoFNfQAAURug6sPLlYmWj_pVitUGyw"
                alt="Office"
              />
              <div className="absolute inset-0 bg-primary/5"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-white/20">
                  <span className="material-symbols-outlined">location_on</span>
                  <span className="text-xs font-black uppercase tracking-widest">{t('globalOffice')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            {t('copyright')}
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">{t('privacy')}</a>
            <a className="hover:text-primary transition-colors" href="#">{t('terms')}</a>
            <a className="hover:text-primary transition-colors" href="#">{t('disclaimer')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;