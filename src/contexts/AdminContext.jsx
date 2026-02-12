// contexts/AdminContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [partners, setPartners] = useState([]);
  const [cases, setCases] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Default partners ma'lumotlari
    const defaultPartners = [
      { id: 1, name: "SINOHYDRO TASHKENT", icon: "bolt", category: "energy" },
      { id: 2, name: "POWERCHINA HUADONG", icon: "electrical_services", category: "engineering" },
      { id: 3, name: "ACWA POWER BASH WIND", icon: "wind_power", category: "energy" },
      { id: 4, name: "CHINA ENERGY INTL", icon: "energy_program_saving", category: "energy" },
      { id: 5, name: "HAYRLIBINO", icon: "business_center", category: "construction" }
    ];

    // Default cases ma'lumotlari
    const defaultCases = [
      { 
        id: 1, 
        title: "corporateMergerTitle", 
        description: "corporateMergerDesc", 
        icon: "receipt_long", 
        category: "Tax Law" 
      },
      { 
        id: 2, 
        title: "commercialLitigationTitle", 
        description: "commercialLitigationDesc", 
        icon: "account_balance", 
        category: "Civil Law" 
      },
      { 
        id: 3, 
        title: "regulatoryAdvisoryTitle", 
        description: "regulatoryAdvisoryDesc", 
        icon: "work", 
        category: "Labor Law" 
      }
    ];

    // Default documents ma'lumotlari
    const defaultDocuments = [
      { 
        id: 1, 
        name: "ndaTemplate", 
        icon: "description", 
        type: "PDF", 
        size: "245 KB",
        url: "/documents/legal-consultation.pdf" 
      },
      { 
        id: 2, 
        name: "serviceAgreement", 
        icon: "assignment", 
        type: "DOCX", 
        size: "180 KB",
        url: "/documents/power-of-attorney.docx" 
      }
    ];

    // LocalStorage dan ma'lumotlarni o'qish yoki default qiymatlarni o'rnatish
    const storedPartners = localStorage.getItem('clplaw_partners');
    const storedCases = localStorage.getItem('clplaw_cases');
    const storedDocuments = localStorage.getItem('clplaw_documents');

    setPartners(storedPartners ? JSON.parse(storedPartners) : defaultPartners);
    setCases(storedCases ? JSON.parse(storedCases) : defaultCases);
    setDocuments(storedDocuments ? JSON.parse(storedDocuments) : defaultDocuments);
    setLoading(false);
  }, []);

  // Partnerlarni yangilash
  const updatePartners = (newPartners) => {
    setPartners(newPartners);
    localStorage.setItem('clplaw_partners', JSON.stringify(newPartners));
  };

  // Caselarni yangilash
  const updateCases = (newCases) => {
    setCases(newCases);
    localStorage.setItem('clplaw_cases', JSON.stringify(newCases));
  };

  // Documentlarni yangilash
  const updateDocuments = (newDocuments) => {
    setDocuments(newDocuments);
    localStorage.setItem('clplaw_documents', JSON.stringify(newDocuments));
  };

  // Yangi partner qo'shish
  const addPartner = (partner) => {
    const newPartner = {
      id: Date.now(),
      ...partner
    };
    const updatedPartners = [...partners, newPartner];
    updatePartners(updatedPartners);
    return newPartner;
  };

  // Partner o'chirish
  const deletePartner = (id) => {
    const updatedPartners = partners.filter(p => p.id !== id);
    updatePartners(updatedPartners);
  };

  // Partner yangilash
  const editPartner = (id, updatedData) => {
    const updatedPartners = partners.map(p => 
      p.id === id ? { ...p, ...updatedData } : p
    );
    updatePartners(updatedPartners);
  };

  // Yangi case qo'shish
  const addCase = (newCase) => {
    const caseItem = {
      id: Date.now(),
      ...newCase
    };
    const updatedCases = [...cases, caseItem];
    updateCases(updatedCases);
    return caseItem;
  };

  // Case o'chirish
  const deleteCase = (id) => {
    const updatedCases = cases.filter(c => c.id !== id);
    updateCases(updatedCases);
  };

  // Case yangilash
  const editCase = (id, updatedData) => {
    const updatedCases = cases.map(c => 
      c.id === id ? { ...c, ...updatedData } : c
    );
    updateCases(updatedCases);
  };

  // Yangi document qo'shish
  const addDocument = (newDocument) => {
    const documentItem = {
      id: Date.now(),
      ...newDocument
    };
    const updatedDocuments = [...documents, documentItem];
    updateDocuments(updatedDocuments);
    return documentItem;
  };

  // Document o'chirish
  const deleteDocument = (id) => {
    const updatedDocuments = documents.filter(d => d.id !== id);
    updateDocuments(updatedDocuments);
  };

  // Document yangilash
  const editDocument = (id, updatedData) => {
    const updatedDocuments = documents.map(d => 
      d.id === id ? { ...d, ...updatedData } : d
    );
    updateDocuments(updatedDocuments);
  };

  const value = {
    partners,
    cases,
    documents,
    loading,
    updatePartners,
    updateCases,
    updateDocuments,
    addPartner,
    deletePartner,
    editPartner,
    addCase,
    deleteCase,
    editCase,
    addDocument,
    deleteDocument,
    editDocument
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};