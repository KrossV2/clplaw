import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { AdminProvider } from './contexts/AdminContext';
import Header from './components/Header';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <AdminProvider>
            <div className="App">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<AdminPanel />} />
              </Routes>
              <Footer />
            </div>
          </AdminProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;