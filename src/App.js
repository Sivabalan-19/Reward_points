import React, { useState } from 'react';
import Sidebar from './component/firsttwopage/Aside';
import Login from './component/firsttwopage/Login';
import Dashboard from './component/firsttwopage/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={
          <div className={`main ${darkMode ? 'dark-mode' : ''}`}>
            <div className="leftside">
              <Sidebar darkMode={darkMode} />
            </div>
            <div className="rightside">
              <Dashboard darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>
        } />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;