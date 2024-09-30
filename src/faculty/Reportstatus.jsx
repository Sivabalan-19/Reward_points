import React, { useState, useEffect, useMemo } from "react";
import { MdNotificationsNone, MdLightMode, MdDarkMode } from "react-icons/md";
import { FiMoon, FiSun } from "react-icons/fi";
import { parseISO, format, isValid } from "date-fns";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Attendence from "./Attendence";
import { IoMoon } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import Strudentapprove from "./Strudentapprove";

function Reportstatus({ detail, id, darkMode, toggleDarkMode }) {
  const [formData, setFormData] = useState({});
  const [student_id,setStudentId]=useState()
  const [Data, setData] = useState([]); 
  // const [filterInput, setFilterInput] = useState("");
  // const [filterInput2, setFilterInput2] = useState("");
  // const formatDate = (dateString) => {
  //   if (!dateString) return ""; // Add this check
  //   const date = parseISO(dateString);
  //   return isValid(date) ? format(date, "yyyy-MM-dd'T'HH:mm") : "";
  // };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       axios.defaults.withCredentials = true;
  //       const response = await axios.post(
  //         process.env.REACT_APP_API_URL + "attendence",
  //         { id: id },
  //         {
  //           headers: {
  //             withCredentials: true,
  //             Authorization: localStorage.getItem("authToken"),
  //           },
  //         }
  //       );
  //       const reversedData = response.data.message
  //         .reverse()
  //         .map((row, index) => ({ ...row, sno: index + 1 }));
  //       setData(reversedData);
        
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  
  // const handleFilterChange = (e) => {
  //   const value = e.target.value || undefined;
  //   setFilter("Activity_name", value);
  //   setFilterInput(value);
  // };

  // const handleFilterChange2 = (e) => {
  //   const value = e.target.value || undefined;
  //   setFilter("Activity_code", value);
  //   setFilterInput2(value);
  // };

  // const handleFilterChange3 = (e) => {
  //   setFilter("Activity_category", e.target.value);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(
          process.env.REACT_APP_API_URL + "faculty/attendenceapprove",
          { id: id },
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
  const columns = useMemo(
    () => [
      { Header: "SNO", accessor: "sno" },
      { Header: "Reg No", accessor: "rollno" },
      { Header: "Student Name", accessor: "username" },
      { Header: "department", accessor: "department_name" },
      { Header: "year", accessor: "year" },
      { Header: "Level", accessor: "level", 
        Cell:({cell:{value}})=>(<span>C Level - {value}</span>),
       
          // Custom sort function for the Age column
          // sortType: (rowA, rowB) => {
          //   const ageA = rowA.original.level;
          //   const ageB = rowB.original.level;
          //   return ageA > ageB ? 1 : -1;
          // },
        
       },
      // {
      //   Header: "Attendance",
      //   accessor: "present",
      //   Cell: ({ cell: { row } }) => (
      //     <button
      //       className="view-em"
      //       onClick={() => handlePresent(row.original.sno)}
      //     >
      //       {row.original.present ? "present" : "absent"}
      //     </button>
      //   ),
      // },
      {
        Header: "view",
        accessor: "user_id",
        Cell: ({ cell: { value } }) => (
          <div
            onClick={() => {
           
           
              const fetchData = async () => {
                try {
                  axios.defaults.withCredentials = true;
                  const response = await axios.post(
                    process.env.REACT_APP_API_URL + "faculty/studentapprove",
                    { studentid: value,Event_id:id },
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
              setData((prevData) => prevData.filter((row) => row.user_id !== value));

              // setShowNotifications1(true);
            }}
          >
       <button className="view-em">Approve</button>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div className={`con ${darkMode ? "dark-mode" : ""}`}>
      <div className="header1">
        <div className="Dash">Event Reports</div>
        <div className="theme">
          <div className="noti">
            <MdNotificationsNone />
          </div>
          <div className="light" onClick={toggleDarkMode}>
            {darkMode ? <MdDarkMode /> : <MdLightMode />}
          </div>
        </div>
      </div>

      <div className="allbody">
            <Strudentapprove
                columns={columns}
                data={Data}
            
                Table_header_name="Attendance table"
              
              ></Strudentapprove>
      </div>
    </div>
  );
}

export default Reportstatus;
