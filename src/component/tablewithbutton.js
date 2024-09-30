import React, { useState, useEffect, useMemo } from "react";
import Eventinfo from "../Student/Eventregister";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import Table from "./tableButton";
import { IoMoon } from "react-icons/io5";
import { MdLightMode, MdNotificationsNone } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { format } from "date-fns";
import Notipopup from "../Student/Notipopup";
const PointContainer2 = ({ darkMode, toggleDarkMode }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showEventRegister, setShowEventRegister] = useState(false);
  const [data, setData] = useState([]);
  const [eventData, setEventData] = useState(null);
  const [teamSize,setteamSize]=useState(-1)
  const showRegisterForm = (id, data,team_size) => {
    setShowEventRegister(true);
    setteamSize(team_size)
  
    setEventData(id);
  };

  const formClose = () => {
    setShowEventRegister(false);
    setEventData(null);
  };

  const columns = useMemo(
    () => [
      { Header: "SNO", accessor: "sno" },
      {
        Header: "Date",
        accessor: "Date",
        Cell: ({ cell: { value } }) => (
          <span>{format(new Date(value), "dd-MM-yy")}</span>
        ),
      },
      { Header: "Activity name", accessor: "Activity_name" },
      { Header: "Activity code", accessor: "Activity_code" },
      { Header: "Activity Category", accessor: "Activity_type" },
      { Header: "Max Points", accessor: "points" },
      { Header: "Organiser", accessor: "Organier" },
      // {
      //   Header: "seat",
      //   accessor: "seat",
      //   Cell: ({ cell: { value } }) => {
      //     return (
      //       <div style={{ display: "flex" }}>
      //         <span>
      //           {value < 10 ? (
      //             <div style={{ color: "red" }}>{value} Seats</div>
      //           ) : (
      //             <div>{value} Seats</div>
      //           )}
      //         </span>
      //         <span></span>
      //       </div>
      //     );
      //   },
      // },
      {
        Header: "Action",
        accessor: "id",
        Cell: ({row}) => (
          <div>
            <button
              className="view-em"
              onClick={() => showRegisterForm(row.original.id, data,row.original.team_size)}
            >
              view
            </button>
          </div>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.get(
          process.env.REACT_APP_API_URL + "student/pointtable",
          {
            headers: {
              withCredentials: true,
              Authorization: localStorage.getItem("authToken"),
            },
          }
        );
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
    setShowEventRegister(false);
    setEventData(null);
   // Set default configuration for Axios
axios.defaults.withCredentials = true;

// Check the token and request body
const token = localStorage.getItem("authToken");
setData((d)=>{
  return d.filter(item=>item.id!==id)
})
await axios.post(
  `${process.env.REACT_APP_API_URL}student/changeregister`,
  { event_id: id },
  {
    headers: {
      Authorization: `${token}`, // Add a scheme if required
    },
  }
);

  };

  return (
    <div className={`con ${darkMode ? "dark-mode" : ""}`}>
      <div className="header11">
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div className="Dash-em">Event Registration</div>
          <div className="Dash-em1">
            <IoIosArrowForward />
          </div>
          <div className="em-subtiti">Event Master</div>
        </div>
        <div className="theme">
          <div
            className="noti"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <MdNotificationsNone />
          </div>
          <div className="light" onClick={toggleDarkMode}>
            {darkMode ? <IoMoon /> : <MdLightMode />}
          </div>
        </div>
      </div>
      <div className="allbody">
        <Table
          columns={columns}
          data={data}
          Table_header_name="Event Master"
          handleDeleteRow={handleDeleteRow}
        />
      </div>

      {showNotifications && <Notipopup></Notipopup>}

      <Dialog open={showEventRegister} onClose={formClose}>
        <Eventinfo
          detail={data}
          id={eventData}
          onDeleteRow={(id) => handleDeleteRow(id)}
          onc={formClose}
          darkMode={darkMode}
          teamSize={teamSize}
        />
      </Dialog>
    </div>
  );
};
export default PointContainer2;
