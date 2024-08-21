import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Adminsidebar from './Adminsidebar';
import Myeventrequest from './Layout';
import Redemption from './Redemption';
import AdminThird from './AdminThird';
const Admin_layout= ({ darkMode, toggleDarkMode }) => (
  <div className={`main ${darkMode ? 'dark-mode' : ''}`}>
    <div className="leftside">
  <Adminsidebar />
    </div>
    <div className="rightside">
      <Routes>
        <Route path="Dashboard" element={<Myeventrequest darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="Redemption" element={<Redemption darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="AdminThird" element={<AdminThird darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </div>
  </div>
);

export default Admin_layout;
