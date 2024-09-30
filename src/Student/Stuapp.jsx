import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdNotificationsNone, MdLightMode, MdDarkMode } from "react-icons/md";
import Notipopup from "../Student/Notipopup.jsx";
import axios from "axios";
function Stuapp({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  const team_size = location.state.team_size;
  const event_id = location.state.event_id;
  const [showNotifications, setShowNotifications] = useState(false);
  const [teamSize, setTeamSize] = useState(team_size);
  const [desc, setdesc] = useState(" ");
  const [title, settitle] = useState(" ");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [team_name, setteam_name] = useState("");
  const handleTeamSizeChange = (e) => {
    const size = parseInt(e.target.value);
    setTeamSize(size);
    if (size > 4) {
      setErrorMessage("Team size should be 4 or less");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (teamSize > 0 && teamSize <= 4) {
    // navigate("/dashboard/team-members", { state: { teamSize } });
    // } else {
    //   setErrorMessage("Please enter a valid team size (1 to 4)");
    // }
    try {
      axios.defaults.withCredentials = true;
      await axios.post(
        process.env.REACT_APP_API_URL + "student/teamregister",
        {
          team_size: teamSize,
          event_id: event_id,
          team_name: team_name,
          description: desc,
          title: title,
        },
        {
          headers: {
            withCredentials: true,
            Authorization: localStorage.getItem("authToken"),
          },
        }
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    navigate("/event-masters")
  };

  return (
    <form
      className={`con ${darkMode ? "dark-mode" : ""}`}
      onSubmit={handleSubmit}
    >
      <div className="header1">
        <div className="Dash">Event Registration</div>
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
          <div className="inside-below-padding">
            <div className="Reward">Event Registration</div>
            <div className="row-imo-student">
              <div className="col-imo">
                <div className="dropdown-container">
                  <div className="dropdown-label">
                    Team Name<span className="required">*</span>
                  </div>
                  <input
                    className="dropdown-select1"
                    type="text"
                    placeholder="Type here..."
                    onChange={(e) => {
                      setteam_name(e.target.value);
                    }}
                    value={team_name}
                    required
                  />
                </div>
                {/* <div className="dropdown-container">
                  <div className="dropdown-label">
                    Team Leader Name<span className="required">*</span>
                  </div>
                  <input
                    className="dropdown-select1"
                    type="text"
                    placeholder="Type here..."
                    required
                  />
                </div> */}
                {/* <div className="dropdown-container">
                  <div className="dropdown-label">
                    Reg No<span className="required">*</span>
                  </div>
                  <input
                    className="dropdown-select1"
                    type="text"
                    placeholder="Type here..."
                    required
                  />
                </div> */}
                {/* <div className="dropdown-container">
                  <div className="dropdown-label">
                    E-mail<span className="required">*</span>
                  </div>
                  <input
                    className="dropdown-select1"
                    type="text"
                    placeholder="Type here..."
                    required
                  />
                </div> */}
                <div className="dropdown-container">
                  <label htmlFor="event-details" className="dropdown-label">
                    Details About the project
                  </label>
                  <textarea
                    id="event-details"
                    style={{ backgroundColor: "transparent" }}
                    className="multiline-input-1"
                    placeholder="Type here..."
                    value={desc}
                    onChange={(e) => {
                      setdesc(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
              <div className="col-imo">
                {/* <div className="dropdown-container">
                  <div className="dropdown-label">
                    Year<span className="required">*</span>
                  </div>
                  <input
                    className="dropdown-select1"
                    type="text"
                    placeholder="Type here..."
                    required
                  />
                </div> */}
                {/* <div className="dropdown-container">
                  <div className="dropdown-label">
                    Department<span className="required">*</span>
                  </div>
                  <input
                    className="dropdown-select1"
                    type="text"
                    placeholder="Type here..."
                    required
                  />
                </div> */}
                <div className="dropdown-container">
                  <div className="dropdown-label">
                    Team Size<span className="required">*</span>
                  </div>
                  <input
                    className="dropdown-select1"
                    type="number"
                    placeholder="Enter team size"
                    value={teamSize}
                    onChange={handleTeamSizeChange}
                    required
                  />
                  {errorMessage && (
                    <div style={{ color: "red" }}>{errorMessage}</div>
                  )}
                </div>
                <div className="dropdown-container">
                  <div className="dropdown-label">
                    Project Title<span className="required">*</span>
                  </div>
                  <input
                    className="dropdown-select1"
                    type="text"
                    placeholder="Type here..."
                    required
                    value={title}
                    onChange={(e) => {
                      settitle(e.target.value);
                    }}
                  />
                </div>
                {/* 
                <div className="dropdown-container">
                  <label htmlFor="event-details" className="dropdown-label">
                    Details About the Event
                  </label>
                  <textarea
                    id="event-details"
                    style={{ backgroundColor: "transparent" }}
                    className="multiline-input-1"
                    placeholder="Type here..."
                    required
                  />
                </div> */}
              </div>
            </div>
            <div className="threebuttonintwopage" style={{ padding: "0px" }}>
              <button
                type="submit"
                className="createeventbut"
                style={{ backgroundColor: "#4318FF" }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {showNotifications && <Notipopup />}
    </form>
  );
}

export default Stuapp;
