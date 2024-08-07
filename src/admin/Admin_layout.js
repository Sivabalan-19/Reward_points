import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Adminsidebar from './Adminsidebar';
import Myeventrequest from './Layout';
const Admin_layout= ({ darkMode, toggleDarkMode }) => (
  <div className={`main ${darkMode ? 'dark-mode' : ''}`}>
    <div className="leftside">
  <Adminsidebar></Adminsidebar>
    </div>
    <div className="rightside">
      <Routes>
        <Route path="report" element={<Myeventrequest></Myeventrequest>} />
        <Route path="Dashboard" element={<Myeventrequest></Myeventrequest>} />
      </Routes>
    </div>
  </div>
);

export default Admin_layout;
