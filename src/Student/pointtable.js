import React, { useState } from "react";
import { useMemo, useEffect } from "react";
import axios from "axios";
import Table from "../component/tableButton";
import { IoMoon } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { format } from "date-fns";
import { MdNotificationsNone } from "react-icons/md";
import Notipopup from "./Notipopup";
const PointContainer = ({ darkMode, toggleDarkMode }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const columns = useMemo(
    () => [
      {
        Header: "SNO",
        accessor: "sno",
      },
      {
        Header: "Date",
        accessor: "Date",

        Cell: ({ cell: { value } }) => (
          <span>{format(new Date(value), "dd-MM-yy")}</span>
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
        Header: "Activity_type",
        accessor: "Tpye",
      },

      {
        Header: "Activity Category",
        accessor: "Activity_category",
      },
      {
        // Second group - Details
        Header: "Points",
        accessor: "points",
      },
      {
        Header: "Organiser",
        accessor: "Organier",
      },
    ],
    []
  );
  const [data, setData] = useState([]);
  const [showregister, setshowregister] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.get(
          process.env.REACT_APP_API_URL + "student/dr",
          {
            headers: {
              withCredentials: true,
              Authorization: localStorage.getItem("authToken"),
            },
          }
        );

        // Assuming your data has an 'id' field, otherwise, adjust accordingly

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

  return (
    <div className={`con ${darkMode ? "dark-mode" : ""}`}>
      <div className="header1">
        <div className="Dash-pt">Points Container</div>
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
          Table_header_name="Points Container"
        />
      </div>

      {showNotifications && <Notipopup></Notipopup>}
    </div>
  );
};

export default PointContainer;
