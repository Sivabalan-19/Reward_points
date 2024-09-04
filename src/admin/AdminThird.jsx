import React,{useState} from 'react'
import { MdLightMode, MdNotificationsNone } from 'react-icons/md'
import Rpapproveltable from './Rpapproveltable'
import { IoMoon } from 'react-icons/io5'

import  ReportAttendence  from './ReportAttendence';
import ReportApproval from './ReportApproval'; 
import AdminAttendenceTableCaller from './AdminAttendenceTableCaller';

function AdminThird({darkMode,toggleDarkMode}) {

  const [currentPage, setCurrentPage] = useState(0);
  
 
  const [selectedEventId, setSelectedEventId] = useState(null);
  const nextPage = (id) => {
    setSelectedEventId(id);
   

    setCurrentPage(1);
  };
  const prevPage = () => {
    setCurrentPage(0);
  };

  return (
    <div className={`con ${darkMode ? "dark-mode" : ""}`}>
        <div className="header11">
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', height: '100%' }}>
          <div className="Dash-em">Reward Point</div>
        </div>
        <div className="theme">
          <div className="noti" > 
            <MdNotificationsNone />
          </div>
          <div className="light" onClick={toggleDarkMode}>
            {darkMode ? <IoMoon /> : <MdLightMode />}
          </div>
        </div>
      </div>

      <div className="allbody">
      {currentPage === 0 && (
      <ReportApproval nextPage={nextPage}/>
      )}
      {currentPage === 1 && (      
      <AdminAttendenceTableCaller prevPage={prevPage} selectedEventId={selectedEventId}></AdminAttendenceTableCaller>
      )}
      </div>
    </div>
  )
}

export default AdminThird