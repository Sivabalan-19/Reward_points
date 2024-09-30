import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";

import { IoMoon } from "react-icons/io5";
import { MdLightMode, MdNotificationsNone } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegBell, FaSearch } from "react-icons/fa";

import { format } from "date-fns";

import Attendence from "./Attendence";
import Rpadding from "./Rpadding";
const AttendencetableCaller = ({
  darkMode,
  toggleDarkMode,
  nextPage,
  eventId,
}) => {
  const [Data, setData] = useState([]);
  const [Task, setTask] = useState([]);
  const [student_id, setstudent_id] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showNotifications1, setShowNotifications1] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(
          process.env.REACT_APP_API_URL + "faculty/attendence",
          {
            id: eventId,
          },
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
  useEffect(() => {
    const taskData = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(
          process.env.REACT_APP_API_URL + "faculty/task",
          {
            id: eventId,
          },
          {
            headers: {
              withCredentials: true,
              Authorization: localStorage.getItem("authToken"),
            },
          }
        );
        var task = response.data.message.map((row, index) => ({
          ...row,
          sno: index + 1,
        }));
        task = task.map((row, index) => ({ ...row, obtained_mark: 0 }));
        setTask(task);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    taskData();
  }, []);
  const taskSumbit = async (points_text) => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "faculty/sumbittask",
        {
          text: points_text,
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
  };
  const sumbit_task = () => {
    var points_text = "";
    const result = Task.map((item) => {
      points_text +=
        "(" +
        item.user_id +
        "," +
        item.obtained_mark +
        "," +
        item.task_id +
        "),";
    });
    points_text = points_text.slice(0, points_text.length - 1);

    taskSumbit(points_text);
  };

  const [showEventRegister, setShowEventRegister] = useState(false);
  const [eventData, setEventData] = useState(null);

  const showRegisterForm = (id, data) => {
    setShowEventRegister(true);

    let row = data.find((o) => o.id == id);
    setEventData(id);
  };
  const Student_regestration = async () => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "faculty/openregistration",
        {
          id: eventId,
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
  };
  const columns = useMemo(
    () => [
      { Header: "SNO", accessor: "sno" },
      { Header: "username", accessor: "username" },
      { Header: "department_name", accessor: "department_name" },
      { Header: "year", accessor: "year" },
      { Header: "rollno", accessor: "rollno" },
      {
        Header: "view",
        accessor: "user_id",
        Cell: ({ cell: { value } }) => (
          <div>
            <button
              className="view-em"
              onClick={() => {
                nextPage(value);
                setstudent_id(value);
                setShowNotifications1(true);
              }}
            >
              view
            </button>
          </div>
        ),
      },
    ],
    []
  );
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
      <button
        onClick={() => {
          sumbit_task();
        }}
      >
        {" "}
        sumit
      </button>
     
      <div className="allbody">
        <Attendence
          columns={columns}
          data={Data}
          Task={Task}
          Table_header_name="Attendence table"
        ></Attendence>
      </div>

      {showNotifications1 && (
        <Rpadding
          setShowNotifications1={setShowNotifications1}
          Task={Task}
          student_id={student_id}
          setTask={setTask}
        ></Rpadding>
      )}
    </div>
  );
};
export default AttendencetableCaller;
