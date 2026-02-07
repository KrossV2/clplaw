import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAdmin } from '../contexts/AdminContext';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const { 
    partners, addPartner, updatePartner, deletePartner,
    cases, addCase, updateCase, deleteCase,
    documents, addDocument, updateDocument, deleteDocument
  } = useAdmin();
  
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('partners');
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    icon: '',
    title: '',
    description: '',
    category: 'CORPORATE LAW',
    type: 'PDF',
    size: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (activeTab === 'partners') {
      if (editingId) {
        updatePartner(editingId, formData);
      } else {
        addPartner(formData);
      }
    } else if (activeTab === 'cases') {
      if (editingId) {
        updateCase(editingId, formData);
      } else {
        addCase(formData);
      }
    } else if (activeTab === 'documents') {
      if (editingId) {
        updateDocument(editingId, formData);
      } else {
        addDocument(formData);
      }
    }
    
    setEditingId(null);
    setFormData({ name: '', icon: '', title: '', description: '', category: 'CORPORATE LAW', type: 'PDF', size: '' });
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData(item);
  };

  const renderList = () => {
    switch (activeTab) {
      case 'partners':
        return partners.map(partner => (
          <motion.div 
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg mb-2"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">{partner.icon}</span>
              <span>{partner.name}</span>
            </div>
            <div className="flex gap-2">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleEdit(partner)}
                className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
              >
                Edit
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => deletePartner(partner.id)}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm"
              >
                Delete
              </motion.button>
            </div>
          </motion.div>
        ));
      
      case 'cases':
        return cases.map(caseItem => (
          <motion.div 
            key={caseItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-white dark:bg-slate-800 rounded-lg mb-2"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold">{caseItem.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{caseItem.description}</p>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded mt-2 inline-block">
                  {caseItem.category}
                </span>
              </div>
              <div className="flex gap-2">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleEdit(caseItem)}
                  className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
                >
                  Edit
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => deleteCase(caseItem.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                >
                  Delete
                </motion.button>
              </div>
            </div>
          </motion.div>
        ));
      
      case 'documents':
        return documents.map(doc => (
          <motion.div 
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg mb-2"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">{doc.icon}</span>
              <div>
                <p className="font-bold">{doc.name}</p>
                <p className="text-xs text-gray-500">{doc.type} • {doc.size}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleEdit(doc)}
                className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
              >
                Edit
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => deleteDocument(doc.id)}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm"
              >
                Delete
              </motion.button>
            </div>
          </motion.div>
        ));
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background-alt-light dark:bg-background-alt-dark py-8">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-black text-primary">Admin Panel</h1>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="bg-primary text-white px-4 py-2 rounded font-bold"
            >
              ← Back to Site
            </motion.button>
          </div>
          <p className="text-slate-600 dark:text-slate-400">Manage your website content here</p>
        </motion.div>
        
        <div className="flex gap-4 mb-8">
          {['partners', 'cases', 'documents'].map(tab => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${activeTab === tab ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-xl font-bold mb-4">
              {editingId ? 'Edit' : 'Add New'} {activeTab.slice(0, -1)}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === 'partners' && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-1">Partner Name</label>
                    <input
                      type="text"
                      placeholder="e.g., BANKCORP"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-700"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Material Icon</label>
                    <input
                      type="text"
                      placeholder="e.g., account_balance"
                      value={formData.icon}
                      onChange={(e) => setFormData({...formData, icon: e.target.value})}
                      className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-700"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">Icon names from <a href="https://fonts.google.com/icons" className="text-primary" target="_blank" rel="noreferrer">Google Material Icons</a></p>
                  </div>
                </>
              )}
              
              {activeTab === 'cases' && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-1">Case Title</label>
                    <input
                      type="text"
                      placeholder="e.g., Corporate Merger"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-700"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                      placeholder="Case description..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-700"
                      rows="3"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-700"
                    >
                      <option value="CORPORATE LAW">CORPORATE LAW</option>
                      <option value="LITIGATION">LITIGATION</option>
                      <option value="CONSULTANCY">CONSULTANCY</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Material Icon</label>
                    <input
                      type="text"
                      placeholder="e.g., corporate_fare"
                      value={formData.icon}
                      onChange={(e) => setFormData({...formData, icon: e.target.value})}
                      className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-700"
                      required
                    />
                  </div>
                </>
              )}
              
              {activeTab === 'documents' && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-1">Document Name</label>
                    <input
                      type="text"
                      placeholder="e.g., NDA Template 2024"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-700"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-700"
                    >
                      <option value="PDF">PDF</option>
                      <option value="DOCX">DOCX</option>
                      <option value="XLSX">XLSX</option>
                      <option value="PPT">PPT</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Size</label>
                    <input
                      type="text"
                      placeholder="e.g., 1.2 MB"
                      value={formData.size}
                      onChange={(e) => setFormData({...formData, size: e.target.value})}
                      className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-700"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Material Icon</label>
                    <input
                      type="text"
                      placeholder="e.g., description"
                      value={formData.icon}
                      onChange={(e) => setFormData({...formData, icon: e.target.value})}
                      className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg dark:bg-slate-700"
                      required
                    />
                  </div>
                </>
              )}
              
              <div className="flex gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="flex-1 bg-primary text-white p-3 rounded-lg font-bold hover:bg-primary-hover transition-colors"
                >
                  {editingId ? 'Update' : 'Add'}
                </motion.button>
                
                {editingId && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => {
                      setEditingId(null);
                      setFormData({ name: '', icon: '', title: '', description: '', category: 'CORPORATE LAW', type: 'PDF', size: '' });
                    }}
                    className="flex-1 bg-gray-500 text-white p-3 rounded-lg font-bold hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </motion.button>
                )}
              </div>
            </form>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-xl font-bold mb-4">
              Current {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} ({renderList().length})
            </h2>
            <div className="max-h-[400px] overflow-y-auto pr-2">
              {renderList().length > 0 ? (
                renderList()
              ) : (
                <p className="text-gray-500 text-center py-8">No items found. Add your first item.</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;