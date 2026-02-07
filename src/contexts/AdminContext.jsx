import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [partners, setPartners] = useState(() => {
    const saved = localStorage.getItem('clplaw_partners');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: "BANKCORP", icon: "account_balance" },
      { id: 2, name: "GLOBAL HOLDINGS", icon: "apartment" },
      { id: 3, name: "SECURE LAW", icon: "shield" },
      { id: 4, name: "INDUSTRUZ", icon: "factory" },
      { id: 5, name: "WORLD GOV", icon: "language" }
    ];
  });

  const [cases, setCases] = useState(() => {
    const saved = localStorage.getItem('clplaw_cases');
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        title: "corporateMergerTitle",
        description: "corporateMergerDesc",
        category: "CORPORATE LAW",
        icon: "corporate_fare"
      },
      {
        id: 2,
        title: "commercialLitigationTitle",
        description: "commercialLitigationDesc",
        category: "LITIGATION",
        icon: "balance"
      },
      {
        id: 3,
        title: "regulatoryAdvisoryTitle",
        description: "regulatoryAdvisoryDesc",
        category: "CONSULTANCY",
        icon: "policy"
      }
    ];
  });

  const [documents, setDocuments] = useState(() => {
    const saved = localStorage.getItem('clplaw_documents');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: "ndaTemplate", type: "PDF", size: "1.2 MB", icon: "description" },
      { id: 2, name: "serviceAgreement", type: "DOCX", size: "2.4 MB", icon: "contract" }
    ];
  });

  useEffect(() => {
    localStorage.setItem('clplaw_partners', JSON.stringify(partners));
  }, [partners]);

  useEffect(() => {
    localStorage.setItem('clplaw_cases', JSON.stringify(cases));
  }, [cases]);

  useEffect(() => {
    localStorage.setItem('clplaw_documents', JSON.stringify(documents));
  }, [documents]);

  const addPartner = (partner) => {
    setPartners([...partners, { ...partner, id: Date.now() }]);
  };

  const updatePartner = (id, updatedPartner) => {
    setPartners(partners.map(p => p.id === id ? { ...p, ...updatedPartner } : p));
  };

  const deletePartner = (id) => {
    setPartners(partners.filter(p => p.id !== id));
  };

  const addCase = (caseItem) => {
    setCases([...cases, { ...caseItem, id: Date.now() }]);
  };

  const updateCase = (id, updatedCase) => {
    setCases(cases.map(c => c.id === id ? { ...c, ...updatedCase } : c));
  };

  const deleteCase = (id) => {
    setCases(cases.filter(c => c.id !== id));
  };

  const addDocument = (document) => {
    setDocuments([...documents, { ...document, id: Date.now() }]);
  };

  const updateDocument = (id, updatedDocument) => {
    setDocuments(documents.map(d => d.id === id ? { ...d, ...updatedDocument } : d));
  };

  const deleteDocument = (id) => {
    setDocuments(documents.filter(d => d.id !== id));
  };

  return (
    <AdminContext.Provider value={{
      partners, setPartners, addPartner, updatePartner, deletePartner,
      cases, setCases, addCase, updateCase, deleteCase,
      documents, setDocuments, addDocument, updateDocument, deleteDocument
    }}>
      {children}
    </AdminContext.Provider>
  );
};