import React from "react";
import Myevents from "./myevents";
import Falcultyfirstpage from "./Falcultyfirstpage";
import { useState } from "react";
import AttendencetableCaller from "./Attendencetablercaller";
const Myeventrequest = ({ darkMode, toggleDarkMode }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [Activity_code, setActivity_code] = useState(0);
  const [Activity_name, setActivity_name] = useState(0);
  const [Activity_type, setActivity_type] = useState(0);
  const [status, setstatus] = useState(null);
 
  const [selectedEventId, setSelectedEventId] = useState(null);
  const nextPage = (id,status) => {
    setSelectedEventId(id);
    setstatus(status)
    setCurrentPage(1);
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
        <Myevents
          nextPage={nextPage}
          setActivity_code={setActivity_code}
          setActivity_name={setActivity_name}
          setActivity_type={setActivity_type}
          Activity_name={Activity_name}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        ></Myevents>
      )}
      {currentPage === 1 && (
        <Falcultyfirstpage
          nextPage={nextPage}
          prevPage={prevPage}
          setstatus={setstatus}
          status={status}
          eventId={selectedEventId}
          Activity_code={Activity_code}
          Activity_name={Activity_name}
          Activity_type={Activity_type}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        ></Falcultyfirstpage>
      )}
    </div>
  );
};

export default Myeventrequest;
