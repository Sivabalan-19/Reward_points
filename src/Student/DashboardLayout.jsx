import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../component/Aside';
import Dashboard from './Dashboard';
import Table from '../component/table';
import PointContainer2 from '../component/tablewithbutton';
import PointContainer from './pointtable';
import Table2 from './Eventmaster';
import Eventinfo from './Eventregister';
import EventRequest from '../faculty/EventRequest';
import Asidefalculti from '../faculty/FacultyLogin';
import Stuapp from './Stuapp';
import StudentFormPage from './StudentFormPage';
import EventShow from './EventShow';

const DashboardLayout = ({ darkMode, toggleDarkMode }) => (
  <div className={`main ${darkMode ? 'dark-mode' : ''}`}>
    <div className="leftside">
      <Sidebar darkMode={darkMode} />
    </div>
    <div className="rightside">
      <Routes>
        <Route path="/" element={<Dashboard   darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>} />
        <Route path="points-container" element={<PointContainer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="my-events" element={<EventShow darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="event-masters" element={<PointContainer2 darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="student-team" element={<Stuapp darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="team-members" element={<StudentFormPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </div>
  </div>
);

export default DashboardLayout;
