import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import Table from "../component/tableButton";
import { IoIosArrowForward } from "react-icons/io";
import { FiMoon, FiSun } from "react-icons/fi";
import { MdNotificationsNone, MdLightMode } from "react-icons/md";
import Eventview from "../Student/Eventview";
import Notification from "../Student/notification";
import { format } from "date-fns";
import Notipopup from "../Student/Notipopup";
import { IoMoon } from "react-icons/io5";
const RevieW = ({ goToPreviousPage, darkMode, toggleDarkMode }) => {
  const [showEventRegister, setShowEventRegister] = useState(false);
  const [data, setData] = useState([]);
  const [eventData, setEventData] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);

  const showRegisterForm = (id) => {
    setShowEventRegister(true);
    setEventData(id);
  };

  const formClose = () => {
    setShowEventRegister(false);
    setEventData(null);
  };

  const columns = useMemo(
    () => [
      {
        Header: "SNO",
        accessor: "sno",
      },
      {
        Header: "Date",
        accessor: "StartDate",
        Cell: ({ cell: { value } }) => (
          <span>{format(new Date(value), "dd.MM.yy")}</span>
        ),
      },
      {
        Header: "Activity_name",
        accessor: "Activity_name",
      },
      {
        Header: "Activity_code",
        accessor: "Activity_code",
      },
      {
        Header: "Activity Type",
        accessor: "Activity_type",
      },
      {
        Header: "Activity Category",
        accessor: "Activity_category",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ cell: { value } }) => (
          <div style={{ display: "flex" }}>
            <span>
              {value === 1 ? (
                <div style={{ color: "orange" }}>pending</div>
              ) : value==9?(
                <div style={{ color: "red" }}>rejected</div>
              ):value==8?(<div style={{ color: "green" }}>completed</div>):(<div className="dodododo">Ongoing</div>)}
            </span>
          </div>
        ),
      },
      {
        Header: "Action",
        accessor: "Event_id",
        Cell: ({ row }) => (
          <div>
            <button
              className="view-em"
              onClick={() => {
                goToPreviousPage(row.original.Event_id,row.original.team_size);
              }}
            >
              view
            </button>
          </div>
        ),
      },
    ],
    [goToPreviousPage]
  );

  const [showregister, setshowregister] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.get(process.env.REACT_APP_API_URL + "faculty/r", {
          headers: {
            withCredentials: true,
            Authorization: localStorage.getItem("authToken"),
          },
        });

        const reversedData = response.data.message
          .reverse()
          .map((row, index) => ({ ...row, sno: index + 1 }));
        
        setData(reversedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteRow = async (id) => {
    setshowregister(!showregister);
    axios.defaults.withCredentials = true;
    await axios.post(
      process.env.REACT_APP_API_URL + "student/changeregister",
      { id },
      {
        headers: {
          withCredentials: true,
          Authorization: localStorage.getItem("authToken"),
        },
      }
    );
  };

  return (
    <div className={`con ${darkMode ? "dark-mode" : ""}`}>
      <div className="header1">
          <div className="Dash">Event Reports</div>
        <div className="theme">
          <div
            className="noti"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <MdNotificationsNone />
          </div>
          <div className="light" onClick={toggleDarkMode}>
            {darkMode ? <IoMoon /> : <MdLightMode />}{" "}
          </div>
        </div>
      </div>
      <div className="allbody">
        <Table
          columns={columns}
          data={data}
          Table_header_name="My Events"
          handleDeleteRow={handleDeleteRow}
        />
      </div>
      {showNotifications && <Notipopup></Notipopup>}
      <Dialog open={showEventRegister} onClose={formClose}>
        <Eventview
          detail={data}
          id={eventData}
          onDeleteRow={(id) => handleDeleteRow(id)}
          onc={formClose}
        />
      </Dialog>
    </div>
  );
};

export default RevieW;
