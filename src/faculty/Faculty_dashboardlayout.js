import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../component/Aside";

import Asidefalculti from "../faculty/FacultyLogin";
import EventRequest from "./EventRequest";

import ReviewRequest from "./Reviewrequest";
import Myevents from "./myevents";
import Falcultyfirstpage from "./Falcultyfirstpage";
import Myeventrequest from "./My-event-request";
const Faculty_DashboardLayout = ({ darkMode, toggleDarkMode }) => (
  <div className={`main ${darkMode ? "dark-mode" : ""}`}>
    <div className="leftside">
      <Asidefalculti darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
    <div className="rightside">
      <Routes>
        <Route
          path="My-Events"
          element={
            <Myeventrequest
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          }
        />
        <Route
          path="event-enter"
          element={
            <EventRequest darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
          <Route
            path="review"
            element={
              <ReviewRequest
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
      </Routes>
    </div>
  </div>
);

export default Faculty_DashboardLayout;
