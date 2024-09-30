import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Notipopup from "../Student/Notipopup";
import { MdDarkMode, MdLightMode, MdNotificationsNone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function StudentFormPage({ darkMode, toggleDarkMode }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();
  const { teamSize } = location.state;
  const navigate = useNavigate();

  const Student = ({}) => (
    <div className="Stu-ent">
      <div className="dropdown-container">
        <div className="dropdown-label">
          Reg No<span className="required">*</span>
        </div>
        <input
          className="dropdown-select1"
          type="text"
          placeholder="Type here..."
          required
        />
      </div>

      <div className="dropdown-container">
        <div className="dropdown-label">
          Name<span className="required">*</span>
        </div>
        <input
          className="dropdown-select1"
          type="text"
          placeholder="Type here..."
          required
        />
      </div>

      <div className="dropdown-container">
        <div className="dropdown-label">
          E-mail<span className="required">*</span>
        </div>
        <input
          className="dropdown-select1"
          type="text"
          placeholder="Type here..."
          required
        />
      </div>

      <div className="dropdown-container">
        <div className="dropdown-label">
          Year<span className="required">*</span>
        </div>
        <input
          className="dropdown-select1"
          type="text"
          placeholder="Type here..."
          required
        />
      </div>

      <div className="dropdown-container">
        <div className="dropdown-label">
          Department<span className="required">*</span>
        </div>
        <input
          className="dropdown-select1"
          type="text"
          placeholder="Type here..."
          required
        />
      </div>
    </div>
  );

  return (
    <div className={`con ${darkMode ? "dark-mode" : ""}`}>
      <div className="header1">
        <div className="Dash">Team members</div>
        <div className="theme">
          <div
            className="noti"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <MdNotificationsNone />
          </div>
          <div className="light" onClick={toggleDarkMode}>
            {darkMode ? <MdDarkMode /> : <MdLightMode />}
          </div>
        </div>
      </div>

      <div className="below-header">
        <div className="inside-below">
          <div
            className="inside-below-padding"
            style={{ overflowY: "scroll", scrollbarWidth: "none" }}
          >
            <div className="student-forms-container">
              <div className="Reward">Team members</div>
              <div className="grid-container">
                {[...Array(teamSize)].map((_, index) => (
                  <div key={index}>
                    <Student />
                  </div>
                ))}
              </div>
            </div>

            <div className="threebuttonintwopage">
              <button
                type="submit"
                className="createeventbut"
                style={{ backgroundColor: "red" }}
                onClick={() => {
                  navigate("/dashboard/student-team");
                }}
              >
                Back
              </button>

              <button type="submit" className="createeventbut">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      {showNotifications && <Notipopup />}
    </div>
  );
}

export default StudentFormPage;
