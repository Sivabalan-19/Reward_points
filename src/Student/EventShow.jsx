import React from 'react'
import { useState } from 'react';
import Table2 from './Eventmaster';
import Teamdet from './TeamDetail'

function  EventShow({ darkMode, toggleDarkMode }) {
    const [currentPage, setCurrentPage] = useState(0);
  const [event_id,setevent_id]=useState(-1)
    const nextPage = (id) => {
        setCurrentPage(1);
        setevent_id(id)
      };
      const prevPage = () => {
        setCurrentPage(0);
      };
  return (
    <div
      style={{ height: "100%" }}
      className={`eventrequesteve ${darkMode ? "dark-mode" : ""}`}
    >
      {currentPage === 0 && (
        <Table2
          nextPage={nextPage}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        ></Table2>
      )}
      {currentPage === 1 && (
        <Teamdet
          nextPage={nextPage}
          prevPage={prevPage}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          event_id={event_id}
        ></Teamdet>
      )}
    </div>
  )
}

export default EventShow