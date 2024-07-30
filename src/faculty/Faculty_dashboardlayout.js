import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../component/Aside';

import Asidefalculti from '../faculty/FacultyLogin';
import EventRequest from './EventRequest';

import ReviewRequest from './Reviewrequest';
import Myevents from './myevents';
const Faculty_DashboardLayout = ({ darkMode, toggleDarkMode }) => (
  <div className={`main ${darkMode ? 'dark-mode' : ''}`}>
    <div className="leftside">
      <Asidefalculti darkMode={darkMode} />
    </div>
    <div className="rightside">
      <Routes>
        <Route path="event-enter" element={<EventRequest/>} />
        <Route path="review" element={<ReviewRequest/>} />
        <Route path="My-Events" element={<Myevents/>} />
      </Routes>
    </div>
  </div>
);

export default Faculty_DashboardLayout;
