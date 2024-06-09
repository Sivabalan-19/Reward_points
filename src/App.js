import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './component/firsttwopage/Aside';
import Login from './component/firsttwopage/Login';
import DashboardLayout from './component/firsttwopage/DashboardLayout';
import Table2 from './component/registerdetail';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', JSON.stringify(!darkMode));
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/*" element={<DashboardLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

